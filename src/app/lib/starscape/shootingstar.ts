import { lineToAngle } from "../helpers";
import Particle from "./particle";

export default class ShootingStar extends Particle {
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

    update(width: number, height: number) {
        if (this.isSpawning) {
            this.opacity += this.opacityDelta;
            if (this.opacity >= 1) {
                this.isSpawning = false;
                this.destroy();
            }
        }

        if (this.isDying) {
            this.opacity -= this.opacityDelta;
            if (this.opacity <= 0) {
                this.isDying = false;
                this.isDead = true;
                return;
            }
        }

        this.tailLengthDelta += this.tailDelta;
        this.currentTail = this.maxTail * this.tailLengthDelta;

        // super.update(width, height);
        this.x += this.vx;
        this.y += this.vy;
        if (this.x > width || this.x < 0 || this.y > height || this.y < 0) {
            this.isSpawning = false;
            this.isDying = true;
        }
    }

    draw(buffer: CanvasRenderingContext2D) {
        if (this.opacity > 0) {
            const pos = lineToAngle(
                this.x,
                this.y,
                -this.currentTail,
                this.getHeading(),
            );
            const starLength = 5;

            buffer.fillStyle = `${this.shootingStarColor + this.opacity})`;
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
            buffer.fillStyle = `${this.color + this.opacity})`;
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
