class Point {
  x;
  y;
  fill_color;
  stroke_color;
  diameter;
  constructor(
    x,
    y,
    stroke_color = "rgba(0,0,0,1)",
    fill_color = "rgba(0,0,0,1)",
    diameter = 4
  ) {
    this.x = x;
    this.y = y;
    this.stroke_color = stroke_color;
    this.fill_color = fill_color;
    this.diameter = diameter;
  }

  draw(sketch) {
    sketch.stroke(this.stroke_color);
    sketch.fill(this.fill_color);
    sketch.ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
