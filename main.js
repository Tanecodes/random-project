// bouncing balls animation

// creating canvas variables
const canvas = document.getElementById("ball-canvas");
const ctx = canvas.getContext("2d");
// setting canvas width
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// setting canvas display
canvas.style.display = "block";

// define ball properties inside a ball object
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 50,
  color: "blue",
  xSpeed: 3,
  ySpeed: 2
};

// drawing the ball with a function abit complicated for me so im gonna leave comments in the function.
function drawBall() {
  ctx.beginPath();
  // ctx.beginPath() creates a path so i can draw new canvas items.This is supposed to stop items from connecting.
  // so basically its the start of a new drawing/item/shape. i think.
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  // so this method is grabbing the location of the ball and setting its radius.
  // the 0 and Math.PI * 2 properties have something to do with the left and right side of the ball
  // 0 is the starting point right side.
  // Math.PI * 2 is the other side? idk lol PI is 180 degrees and times it by 2 makes it 360 degrees.
  ctx.fillStyle = ball.color;
  // this is just geabbing the color from the ball object i created.
  // the color is set inside the object i created earlier which is blue :)
  ctx.fill();
  // this is actually setting/filling the color of the ball. 
  ctx.closePath();
  // so now we close the path after setting all the instructions inside
  // literally a wrapper. 
  // ctx.beginPath() "CODE GOES IN HERE" ctx.closePath();
};

// next up is to create the animation logic inside a function yay :).
function animateBall() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // this method is so that it clears any leftover balls each frame
  // so it wont leave balls when moving around
  drawBall();
  // calling the ball function so it draws.
  ball.x += ball.xSpeed;
  ball.y += ball.ySpeed;
  // this code updates the ball position. literally moving the ball around.

  // now to create an if statement to say "hey you hit the wall bounce back that way".
  if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
    ball.xSpeed *= -1;
  };

  if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
    ball.ySpeed *= -1;
  };

  requestAnimationFrame(animateBall);
}

animateBall();