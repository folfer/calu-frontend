import imgbird from "../assets/bird.svg";
export default class Obstacle {
  constructor(p, score) {
    const limit = score < p.height / 2 ? score * 0.03 : p.height / 2;
    this.pos = p.createVector(
      -10,
      p.random(p.height / 2 - limit, p.height / 2 + limit)
    );
    this.speed = p.createVector(p.random(1, 3), 0);
    this.size = 60;
    this.img = p.loadImage(imgbird);
  }
  render(p) {
    // p.ellipse(this.pos.x, this.pos.y, this.size, this.size);
    p.image(this.img, this.pos.x - 30, this.pos.y - 30, this.size, this.size);
  }

  move(p) {
    this.pos.add(this.speed);
  }

  offscreen(p, score) {
    if (this.pos.x > p.width) {
      const limit = score < p.height / 2 ? score * 0.03 : p.height / 2;
      this.pos = p.createVector(
        -10,
        p.random(p.height / 2 - limit, p.height / 2 + limit)
      );
    }
  }

  isAlive(p) {
    if (this.pos.x < p.width) {
      return true;
    }
    return false;
  }
}
