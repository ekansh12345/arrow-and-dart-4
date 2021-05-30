var canvas, backgroundImage;
var arrow, dart;
var arrowImg, dartImg;
var speed;
var score = 0;
var bg;
var bgImg;
function preload(){
  arrowImg = loadImage("images/Arrow.png");
  dartImg = loadImage("images/dart.png");
  bgImg = loadImage("images/Tree.png");
}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
   bg = createSprite(displayWidth / 2, displayHeight / 2);
  arrow = createSprite(displayWidth -200, displayHeight /2+150);
  dart = createSprite(displayWidth / 2, displayHeight -200);
  dart.scale = 0.30;
  arrow.scale = 0.15;
  arrow.addImage(arrowImg);
  dart.addImage(dartImg);
  bg.addImage(bgImg);
   arrow.setCollider("circle", -600, -50,250);
  dart.setCollider("circle", 0, 0, 150);
   dart.debug = true;
  arrow.debug = true;
  speed = random( -6,-3);
 // arrow.velocityX = speed;
  
}


function draw(){
   //start the game
  background(255);
  textSize(30);
  fill("Blue");
  text("Score:" + score, displayWidth - 200, 50);

  if (arrow.x - dart.x < (arrow.width + dart.width) / 2) {
    console.log(dart.x - arrow.x);
    if (arrow.x - dart.x > 100 && arrow.x - dart.x < 125) {
     
      score++
    }
    else if (arrow.x - dart.x > 150 && arrow.x - dart.x < 175) {
      score += 2;
     
    }
  
  }

  arrow.depth = dart.depth
 arrow.depth += 1;

 // if (arrow.x - dart.x >-50) {
   // console.log("velocity=0");
   // arrow.velocityX =0;
//}
  drawSprites();
}
function keyPressed() {
  if (keyCode===37) {
    arrow.velocityX = speed;
    console.log(arrow.velocityX);
    if (arrow.velocityX<0) {
     arrow.velocityX = arrow.velocityX + 1; 
    }
    else if (arrow.velocityX > 0) {
       arrow.velocityX = arrow.velocityX - 1;
    }
      
 }
}
