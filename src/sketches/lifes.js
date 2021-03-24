import lifeimg from "../assets/vidas.svg";

export default class Life {
  constructor(p, index) {
    this.pos = p.createVector(p.width - 200 - 30*index, 35);
    this.size = 20;
    this.img = p.loadImage(lifeimg);
  }

  render(p) {
    p.noFill();
    p.strokeWeight(2);
    p.image(
      this.img,
      this.pos.x,
      this.pos.y,
      this.size,
      this.size
    );
  }
}
