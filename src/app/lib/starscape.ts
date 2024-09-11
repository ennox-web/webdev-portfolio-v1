import Canvas from "./canvas";

import { randomRange, degreesToRads, lineToAngle, calculateDensity, calculateLayerIndex } from "./helpers";


class Particle {
    x: number;
    y: number;
    vx: number = 0;
    vy: number = 0;
    radius: number;
    speed: number;
    heading: number = 0;
    scale: number;
    color: string = "rgb(255, 221, 157)";

    constructor(x: number, y: number, speed: number, heading: number, radius: number, scale: number) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.radius = radius * scale;
        this.scale = scale;
        this.vx = Math.cos(heading) * speed;
        this.vy = Math.sin(heading) * speed;
    }

    draw(buffer: CanvasRenderingContext2D) {
        buffer.fillStyle = this.color;
        buffer.beginPath();
        buffer.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        buffer.closePath();
        buffer.fill();
    }

    getSpeed() {
        return Math.sqrt(Math.pow(this.vx, 2) + Math.pow(this.vy, 2));
    }

    setSpeed() {
        const heading = this.getHeading();
        this.vx = Math.cos(heading) * this.speed;
        this.vy = Math.sin(heading) * this.speed;
    }

    getHeading() {
        return Math.atan2(this.vy, this.vx);
    }

    setHeading(heading: number) {
        const speed = this.getSpeed();
        this.vx = Math.cos(heading) * speed;
        this.vy = Math.sin(heading) * speed;
    }

    update(width: number, height: number) {
        this.x += this.vx;
        this.y += this.vy;

        if(this.x > width) this.x = 0;
        if(this.x < 0) this.x = width;
        
        if(this.y > height) this.y = 0;
        if(this.y < 0) this.y = height;
    }
}

class ShootingStar extends Particle {
    opacity: number = 0;
    opacityDelta: number = 0.02;
    tailDelta: number = 0.01;
    tailLengthDelta: number = 0;
    maxTail: number = 300;
    lifeTime: number = 450;
    currentTail: number = 0;
    shootingStarColor: string = "rgba(255, 255, 255, ";
    color: string = "rgba(255, 221, 157, ";

    /* State */
    isSpawning: boolean = true;
    isDying: boolean = false;
    isDead: boolean = false;

    constructor(x: number, y: number, speed: number, heading: number, radius: number, scale: number) {
        super(x, y, speed, heading, radius, scale);
    }

    update(width: number, height: number) {
        if(this.isSpawning) {
            this.opacity += this.opacityDelta;
            if(this.opacity >= 1) {
                this.isSpawning = false;
                this.destroy();
            }
        }

        if(this.isDying) {
            this.opacity -= this.opacityDelta;
            if(this.opacity <= 0) {
                this.isDying = false;
                this.isDead = true;
                return;
            }
        }

        this.tailLengthDelta += this.tailDelta
        this.currentTail = this.maxTail * this.tailLengthDelta;

        // super.update(width, height);
        this.x += this.vx;
        this.y += this.vy;
        if(this.x > width || this.x < 0 || this.y > height || this.y < 0) {
            this.isSpawning = false;
            this.isDying = true;
        }
    }

    draw(buffer: CanvasRenderingContext2D) {
        if(this.opacity > 0) {
            const pos = lineToAngle(this.x, this.y, -this.currentTail, this.getHeading());
            const starLength = 5;

            buffer.fillStyle = this.shootingStarColor + this.opacity + ")";
            buffer.beginPath();
            buffer.moveTo(this.x - 1, this.y + 1);

            buffer.lineTo(this.x, this.y + starLength);
            buffer.lineTo(this.x + 1, this.y + 1);

            buffer.lineTo(this.x + starLength, this.y);
            buffer.lineTo(this.x + 1, this.y - 1);

            buffer.lineTo(this.x, this.y + 1);
            buffer.lineTo(this.x, this.y - starLength);

            buffer.lineTo(this.x - 1, this.y - 1);
            buffer.lineTo(this.x - starLength, this.y);

            buffer.lineTo(this.x - 1, this.y + 1);
            buffer.lineTo(this.x - starLength, this.y);

            buffer.closePath();
            buffer.fill();

            // star tail
            buffer.fillStyle = this.color + this.opacity + ")";
            buffer.beginPath();
            buffer.moveTo(this.x - 1, this.y - 1);
            buffer.lineTo(pos.x, pos.y);
            buffer.lineTo(this.x + 1, this.y + 1);
            buffer.closePath();
            buffer.fill();
        }
    }

    destroy() {
        setTimeout(() => {
            this.isDying = true;
        }, this.lifeTime);
    }
}

interface Layer {
    speed: number;
    scale: number;
}

export default class StarScape {
    /* Canvas Data */
    mainCanvas: Canvas;

    /* Star Data */
    starArray: Particle[] = [];
    layers: Layer[] = [
        { speed: 0.015, scale: 0.2 }, // 80%
        { speed: 0.03, scale: 0.5 }, // 12%
        { speed: 0.05, scale: 0.75 }, // 8%
    ];
    starBaseRadius: number = 2;
    starAngle: number = 145;
    starDensity: number = 1000;
    starCount: number;

    /* Shooting Star Data */
    reducedMotion: boolean;
    shootingStarInterval: number = 1000;
    shootingStarArray: ShootingStar[] = [];
    shootingStarSpeed = {
        min: 10,
        max: 14,
    }
    shootingStarRadius: number = 3;
    maxShootingStars: number = 3;

    /* States */
    firstDraw: boolean = false;
    heightFlip: boolean = false;

    constructor(canvas: HTMLCanvasElement, reducedMotion: boolean = false) {
        this.reducedMotion = reducedMotion;
        this.mainCanvas = new Canvas(canvas);
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
        this.starCount = calculateDensity(this.mainCanvas.width, this.mainCanvas.height, this.starDensity);

        this.createStars();

        // set interval for shooting stars;
        if(!this.reducedMotion) {
            setInterval(() => {
                this.createShootingStars();
            }, this.shootingStarInterval);
        }
    }

    createStars() {
        for (let x = 0; x < this.starCount; x++) {
            const layerIndex = calculateLayerIndex();

            const star = new Particle(
                randomRange(0, this.mainCanvas.width),
                randomRange(0, this.mainCanvas.height),
                this.layers[layerIndex].speed,
                degreesToRads(this.starAngle),
                this.starBaseRadius,
                this.layers[layerIndex].scale,
            );

            this.starArray.push(star);
        }
    }

    createShootingStars() {
        if(this.shootingStarArray.length < this.maxShootingStars) {
            const shootingStar = new ShootingStar(
                randomRange(this.mainCanvas.width / 3, this.mainCanvas.width),
                randomRange(0, this.mainCanvas.height / 4),
                randomRange(this.shootingStarSpeed.min, this.shootingStarSpeed.max),
                degreesToRads(this.starAngle),
                this.shootingStarRadius,
                0,
            )
    
            this.shootingStarArray.push(shootingStar);
        }
    }

    validateStars(oldWidth: number, oldHeight: number) {
        const width = this.mainCanvas.width;
        const height = this.mainCanvas.height;

        if(oldWidth > width || oldHeight > height) {
            for(let x = this.starArray.length-1; x > 0; x--) {
                if(this.starArray[x].x > width || this.starArray[x].y > height) {
                    this.starArray.splice(x, 1);
                }
            }
        }
        
        if(oldWidth < width || oldHeight < height) {
            const newWidth = oldWidth == width ? width : Math.max(oldWidth, width) - Math.min(oldWidth,width);
            const newHeight = oldHeight == height ? height : Math.max(oldHeight, height) - Math.min(oldHeight, height);
            let newStars = calculateDensity(newWidth, newHeight, this.starDensity);

            newStars = newStars == 0 ? 1 : newStars;
            let minWidth = oldWidth >= width ? 0 : Math.min(oldWidth, width);
            let maxWidth = oldWidth >= width ? width : Math.max(oldWidth, width);

            let minHeight = oldHeight >= height ? 0 : Math.min(oldHeight, height);
            let maxHeight = oldHeight >= height ? height : Math.max(oldHeight, height);

            if(oldWidth < width && oldHeight < height) {
                if(this.heightFlip) {
                    minWidth = 0;
                    maxWidth = width;
                }
                else {
                    minHeight = 0;
                    maxHeight = height;
                }
                this.heightFlip = !this.heightFlip;
                newStars = newStars * 5;
            }

            for(let x = 0; x < newStars; x++) {
                const layerIndex = calculateLayerIndex();
                const starX = randomRange(minWidth, maxWidth);
                const starY = randomRange(minHeight, maxHeight);

                const star = new Particle(
                    starX,
                    starY,
                    this.layers[layerIndex].speed,
                    degreesToRads(this.starAngle),
                    this.starBaseRadius,
                    this.layers[layerIndex].scale,
                )

                this.starArray.push(star);
            }
        }
    }

    validateShootingStars() {
        for(let x = 0; x < this.shootingStarArray.length; x++) {
            if(this.shootingStarArray[x].isDead) this.shootingStarArray.splice(x, 1);
        }
    }

    resize() {
        const oldWidth = this.mainCanvas.width;
        const oldHeight = this.mainCanvas.height;

        this.mainCanvas.resize();

        if(this.firstDraw) this.validateStars(oldWidth, oldHeight);
        this.firstDraw = true;
    }

    update() {        
        if(this.mainCanvas.buffer) {
            this.mainCanvas.drawBackground();

            for (let x = 0; x < this.starArray.length; x++) {
                if(!this.reducedMotion) this.starArray[x].update(this.mainCanvas.width, this.mainCanvas.height);
                this.starArray[x].draw(this.mainCanvas.buffer);
            }

            if(!this.reducedMotion) {
                for(let x = 0; x < this.shootingStarArray.length; x++) {
                    this.shootingStarArray[x].update(this.mainCanvas.width, this.mainCanvas.height);
                    this.shootingStarArray[x].draw(this.mainCanvas.buffer);
                }
            }

            this.validateShootingStars();
        }
    }

    animLoop() {
        this.mainCanvas.clearRect();
        this.update();
        this.mainCanvas.render();
    }
}
