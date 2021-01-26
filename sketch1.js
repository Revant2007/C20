
var fixedRect,movingRect

function setup() {
  createCanvas(800,400);
  
  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.velocityX = -3;
  fixedRect.shapeColor = "red";

  
  movingRect = createSprite(600, 200, 100, 50);
  movingRect.velocityX = 3;
  movingRect.shapeColor = "red";

  fixedRect.debug = true;
  movingRect.debug = true;

}


function draw() {
  
  background(0); 
    
  //algorithm for bounceOff

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 
     && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    )
    {
    
    movingRect.velocityX = movingRect.velocityX * -1;
    fixedRect.velocityX = fixedRect.velocityX * -1;

    }

  
  drawSprites();
}