export default class Particle {
  x: number

  y: number

  vx: number = 0

  vy: number = 0

  radius: number

  speed: number

  heading: number = 0

  scale: number

  color: string = "rgb(255, 221, 157)"

  constructor(
    x: number,
    y: number,
    speed: number,
    heading: number,
    radius: number,
    scale: number
  ) {
    this.x = x
    this.y = y
    this.speed = speed
    this.radius = radius * scale
    this.scale = scale
    this.vx = Math.cos(heading) * speed
    this.vy = Math.sin(heading) * speed
  }

  draw(buffer: CanvasRenderingContext2D) {
    buffer.fillStyle = this.color
    buffer.beginPath()
    buffer.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    buffer.closePath()
    buffer.fill()
  }

  getSpeed() {
    return Math.sqrt(this.vx ** 2 + this.vy ** 2)
  }

  setSpeed() {
    const heading = this.getHeading()
    this.vx = Math.cos(heading) * this.speed
    this.vy = Math.sin(heading) * this.speed
  }

  getHeading() {
    return Math.atan2(this.vy, this.vx)
  }

  setHeading(heading: number) {
    const speed = this.getSpeed()
    this.vx = Math.cos(heading) * speed
    this.vy = Math.sin(heading) * speed
  }

  update(width: number, height: number) {
    this.x += this.vx
    this.y += this.vy

    if (this.x > width) this.x = 0
    if (this.x < 0) this.x = width

    if (this.y > height) this.y = 0
    if (this.y < 0) this.y = height
  }
}
