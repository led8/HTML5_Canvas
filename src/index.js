const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineJoin = "round";
ctx.lineCap = "round";

let isDrawing = false;
let hue = 0;
let strokeWidth = true;

function draw(event){
  if (!isDrawing) return;
  console.log(event);

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
  x = event.offsetX;
  y = event.offsetY;

  hue++;
  if (hue >= 360){
    hue = 0;
  }

  if (ctx.lineWidth >= 70 || ctx.lineWidth <= 1){
    strokeWidth = !strokeWidth
  }

  if (strokeWidth){
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

function drawingTrue(event){
  isDrawing = true;
  x = event.offsetX;
  y = event.offsetY;
}

function drawingFalse(){
  isDrawing = false;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', drawingTrue);
canvas.addEventListener('mouseup', drawingFalse);
canvas.addEventListener('mouseout', drawingFalse);
