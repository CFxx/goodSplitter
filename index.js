// create 2 Canvas
window.onload = () => {
  const mainCanvasContainer = document.getElementById("mainCanvas");
  let mainCanvas = new Canvas(
    "mainCanvas",
    mainCanvasContainer.clientWidth,
    mainCanvasContainer.clientHeight
  );
  mainCanvas.init();

  document
    .getElementById("main_canvas_selection")
    .addEventListener("click", () => {
      mainCanvas.toggleMode(INTERACTION_MODE.selection);
    });
  document.getElementById("main_canvas_point").addEventListener("click", () => {
    mainCanvas.toggleMode(INTERACTION_MODE.point);
  });
  document.getElementById("main_canvas_line").addEventListener("click", () => {
    mainCanvas.toggleMode(INTERACTION_MODE.line);
  });

  const coCanvasContainer = document.getElementById("coCanvas");
  let coCanvas = new Canvas(
    "coCanvas",
    coCanvasContainer.clientWidth,
    coCanvasContainer.clientHeight
  );
  coCanvas.init();

  document
    .getElementById("co_canvas_selection")
    .addEventListener("click", () => {
      coCanvas.toggleMode(INTERACTION_MODE.selection);
    });
  document.getElementById("co_canvas_point").addEventListener("click", () => {
    coCanvas.toggleMode(INTERACTION_MODE.point);
  });
  document.getElementById("co_canvas_line").addEventListener("click", () => {
    coCanvas.toggleMode(INTERACTION_MODE.line);
  });
};
