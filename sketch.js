
var fixedRect,movingRect

function setup() {
  createCanvas(800,400);
  
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "red";
  
  movingRect = createSprite(400, 200, 100, 50);
  movingRect.shapeColor = "red";

  fixedRect.debug = true;
  movingRect.debug = true;

}


function draw() {
  
  background(0); 
  
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;
    
  //algorithm for collision

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 
     && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
     && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 
     && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 ){
    
    movingRect.shapeColor = "green";
  
  }

  else{
    movingRect.shapeColor = "red";
  }
  
  drawSprites();
}