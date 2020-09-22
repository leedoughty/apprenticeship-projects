const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#FF0000";
ctx.fillRect(10, 10, 100, 100);
ctx.fillRect(10, 200, 100, 100);

ctx.strokeStyle = "pink";
ctx.lineWidth = 10;
ctx.strokeRect(40, 40, 100, 100);
ctx.fillStyle = "rgb(200, 150, 200)";
ctx.fillRect(40, 80, 100, 100);

function randomLines(startX, startY, numOfLines, colour) {
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = colour;
  let x = startX;
  let y = startY;
  ctx.moveTo(x, y);
  for (i = 0; i < numOfLines; i++) {
    let randomNumX = Math.floor((Math.random() - 0.5) * 10);
    let randomNumY = Math.floor((Math.random() - 0.5) * 10);
    x += randomNumX * 10;
    y += randomNumY * 10;
    ctx.lineTo(x, y);
  }
  ctx.stroke();
}

randomLines(60, 150, 30, "blue");
randomLines(100, 300, 30, "pink");
randomLines(250, 150, 30, "orange");
