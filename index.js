// create 2 Canvas
window.onload = () => {
  const mainCanvasContainer = document.getElementById("mainCanvas");
  let mainCanvas = new Canvas(
    "mainCanvas",
    mainCanvasContainer.clientWidth,
    mainCanvasContainer.clientHeight
  );
  mainCanvas.init();

  const coCanvasContainer = document.getElementById("coCanvas");
  let coCanvas = new Canvas(
    "coCanvas",
    coCanvasContainer.clientWidth,
    coCanvasContainer.clientHeight
  );
  coCanvas.init();
};
