const canvas = document.querySelector("#container");
const ctx = canvas.getContext("2d");

// look at clientX, pageX,
// change canvas height and width
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let lastX;
let lastY;
let isDrawing = false;

// look into requestAnimationFrame
// time
function draw(event) {
  if (!isDrawing) return;

  ctx.strokeStyle = "white";
  ctx.lineCap = "round";
  ctx.lineWidth = "50";
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
  [lastX, lastY] = [event.offsetX, event.offsetY];
}

canvas.addEventListener("mousedown", (event) => {
  isDrawing = true;
  [lastX, lastY] = [event.offsetX, event.offsetY];
});
canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
