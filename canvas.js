class Canvas {
  width = 0;
  height = 0;
  container_name;
  bg_color;
  p5_canvas = null;
  arrayPoints = [];
  arrayLines = [];
  x;
  y;

  constructor(container_name, width, height, bg_color = "rgba(220,220,220,1)") {
    this.container_name = container_name;
    this.width = width;
    this.height = height;
    this.bg_color = bg_color;
  }

  init() {
    const s = (sketch) => {
      sketch.setup = () => {
        sketch.createCanvas(this.weight, this.height);
      };
      sketch.draw = () => {
        sketch.background(this.bg_color);
        this.arrayPoints.forEach((item) => item.draw(sketch));
      };
      sketch.mouseClicked = () => {
        this.x = Math.trunc(sketch.mouseX);
        this.y = Math.trunc(sketch.mouseY);
        if (
          0 <= this.x &&
          this.x <= this.width &&
          0 <= this.y &&
          this.y <= this.height
        ) {
          console.log("Mouse is in canvas");
          // call any function that must be called
          this.arrayPoints.push(new Point(this.x, this.y));
          console.log(this.arrayPoints);
        }
      };
    };
    if (!this.p5_canvas) {
      this.p5_canvas = new p5(s, this.container_name);
    }
  }
}
