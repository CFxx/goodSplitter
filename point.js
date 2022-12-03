class Point {
  x = 0;
  y = 0;
  constructor(x, y) {
    console.log("new Point created");
    this.x = x;
    this.y = y;
  }

  draw(sketch) {
    sketch.stroke("rgba(255,0,0,1)");
    sketch.fill("rgba(255,0,0,1)");
    sketch.ellipse(this.x, this.y, 4, 4);
  }
}
