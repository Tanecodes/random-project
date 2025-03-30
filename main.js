// bouncing balls animation

// creating canvas variables
const canvas = document.getElementById("ball-canvas");
const ctx = canvas.getContext("2d");
// setting canvas width
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// setting canvas background color
canvas.style.background = "black";

// define ball properties inside a ball object
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 20,
  color: "blue",
  xSpeed: 5,
  ySpeed: 3
};

// drawing the ball with a function abit complicated for me so im gonna leave comments in the function.
function drawBall() {
  // ctx.beginPath() creates a path so i can draw new canvas items.This is supposed to stop items from connecting.
  // so basically its the start of a new drawing/item/shape. i think.
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
};