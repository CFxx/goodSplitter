// create 2 Canvas
window.onload = () => {
  const mainCanvasContainer = document.getElementById("mainCanvas");
  console.log(
    "mainCanvas size : (",
    mainCanvasContainer.offsetWidth,
    ",",
    mainCanvasContainer.offsetHeight,
    ")"
  );
  let mainCanvas = new Canvas(
    "mainCanvas",
    mainCanvasContainer.clientWidth,
    mainCanvasContainer.clientHeight
  );
  mainCanvas.init();

  const coCanvasContainer = document.getElementById("coCanvas");
  console.log(
    "coCanvas size : (",
    coCanvasContainer.offsetWidth,
    ",",
    coCanvasContainer.offsetHeight,
    ")"
  );
  let coCanvas = new Canvas(
    "coCanvas",
    coCanvasContainer.clientWidth,
    coCanvasContainer.clientHeight
  );
  coCanvas.init();
};
