var snowflake,snowflakeimg, backgroundimg, bg;
var boy, boyimg
function setup() {
  createCanvas(800,400);
boy = createSprite(500,275)
boy.addImage(boyimg)
boy.scale=0.5
 
}

function preload(){
snowflakeimg=loadImage("snow4.webp")
backgroundimg = loadImage("snow1.jpg")
boyimg = loadImage("boy in snow.jpg")
}

function draw() {
  background(backgroundimg); 
  if(frameCount%70===0){
    snowflake = createSprite (10,10)
    snowflake.addImage(snowflakeimg)
    snowflake.scale=0.1
    snowflake.x = random(10,600)
    snowflake.velocityY=1
  }
  
  drawSprites();
}