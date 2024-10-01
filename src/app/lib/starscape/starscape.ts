import {
  calculateDensity,
  calculateLayerIndex,
  degreesToRads,
  randomRange,
} from "../helpers";
import Canvas from "./canvas";
import Particle from "./particle";
import ShootingStar from "./shootingstar";

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
  };

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
    this.starCount = calculateDensity(
      this.mainCanvas.width,
      this.mainCanvas.height,
      this.starDensity,
    );

    this.createStars();

    // set interval for shooting stars;
    if (!this.reducedMotion) {
      setInterval(() => {
        this.createShootingStars();
      }, this.shootingStarInterval);
    }
  }

  createStars() {
    for (let x = 0; x < this.starCount; x += 1) {
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
    if (this.shootingStarArray.length < this.maxShootingStars) {
      const shootingStar = new ShootingStar(
        randomRange(this.mainCanvas.width / 3, this.mainCanvas.width),
        randomRange(0, this.mainCanvas.height / 4),
        randomRange(this.shootingStarSpeed.min, this.shootingStarSpeed.max),
        degreesToRads(this.starAngle),
        this.shootingStarRadius,
        0,
      );

      this.shootingStarArray.push(shootingStar);
    }
  }

  validateStars(oldWidth: number, oldHeight: number) {
    const { width } = this.mainCanvas;
    const { height } = this.mainCanvas;

    if (oldWidth > width || oldHeight > height) {
      for (let x = this.starArray.length - 1; x > 0; x -= 1) {
        if (this.starArray[x].x > width || this.starArray[x].y > height) {
          this.starArray.splice(x, 1);
        }
      }
    }

    if (oldWidth < width || oldHeight < height) {
      const newWidth =
        oldWidth === width
          ? width
          : Math.max(oldWidth, width) - Math.min(oldWidth, width);
      const newHeight =
        oldHeight === height
          ? height
          : Math.max(oldHeight, height) - Math.min(oldHeight, height);
      let newStars = calculateDensity(newWidth, newHeight, this.starDensity);

      newStars = newStars === 0 ? 1 : newStars;
      let minWidth = oldWidth >= width ? 0 : Math.min(oldWidth, width);
      let maxWidth = oldWidth >= width ? width : Math.max(oldWidth, width);

      let minHeight = oldHeight >= height ? 0 : Math.min(oldHeight, height);
      let maxHeight =
        oldHeight >= height ? height : Math.max(oldHeight, height);

      if (oldWidth < width && oldHeight < height) {
        if (this.heightFlip) {
          minWidth = 0;
          maxWidth = width;
        } else {
          minHeight = 0;
          maxHeight = height;
        }
        this.heightFlip = !this.heightFlip;
        newStars *= 5;
      }

      for (let x = 0; x < newStars; x += 1) {
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
        );

        this.starArray.push(star);
      }
    }
  }

  validateShootingStars() {
    for (let x = 0; x < this.shootingStarArray.length; x += 1) {
      if (this.shootingStarArray[x].isDead) this.shootingStarArray.splice(x, 1);
    }
  }

  resize() {
    const oldWidth = this.mainCanvas.width;
    const oldHeight = this.mainCanvas.height;

    this.mainCanvas.resize();

    if (this.firstDraw) this.validateStars(oldWidth, oldHeight);
    this.firstDraw = true;
  }

  update() {
    if (this.mainCanvas.buffer) {
      this.mainCanvas.drawBackground();

      for (let x = 0; x < this.starArray.length; x += 1) {
        if (!this.reducedMotion)
          this.starArray[x].update(
            this.mainCanvas.width,
            this.mainCanvas.height,
          );
        this.starArray[x].draw(this.mainCanvas.buffer);
      }

      if (!this.reducedMotion) {
        for (let x = 0; x < this.shootingStarArray.length; x += 1) {
          this.shootingStarArray[x].update(
            this.mainCanvas.width,
            this.mainCanvas.height,
          );
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
