export default class Canvas {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D | null;

    frame: HTMLCanvasElement;
    buffer: CanvasRenderingContext2D | null;

    width: number = 0;
    height: number = 0;
    scrollbarWidth: number = 17;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        
        this.frame = document.createElement('canvas');
        this.buffer = this.frame.getContext('2d');
    }

    resize() {
        console.log("blep?", window.innerWidth);
        this.width = window.innerWidth - this.scrollbarWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.frame.width = this.width;
        this.canvas.height = this.frame.height = this.height;
        console.log("blep2?", this.width);
    }

    clearRect() {
        this.ctx?.clearRect(0, 0, this.width, this.height);
        this.buffer?.clearRect(0, 0, this.width, this.height);
    }

    drawBackground() {
        if(this.buffer) {
            const skyGradient = this.buffer.createLinearGradient(0, 0, 0, this.height);
            skyGradient.addColorStop(0, "black");
            skyGradient.addColorStop(1, "#282a3a");

            this.buffer.fillStyle = skyGradient;
            this.buffer.fillRect(0, 0, this.width, this.height);

            this.buffer.fill();
        }
    }

    render() {
        this.ctx?.drawImage(this.frame, 0, 0);
    }
}
