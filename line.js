class Line {
  from;
  to;
  stroke_color;
  constructor(from, to, stroke_color = "rgba(0,0,0,1)") {
    this.from = from;
    this.to = to;
    this.stroke_color = stroke_color;
  }

  draw(sketch) {
    sketch.stroke(this.stroke_color);
    sketch.line(this.from.x, this.from.y, this.to.x, this.to.y);
    this.from.draw(sketch);
    this.to.draw(sketch);
  }
}
