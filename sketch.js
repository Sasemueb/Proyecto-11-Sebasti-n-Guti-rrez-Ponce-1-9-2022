var mar;
var seaImg;
var ship, ship_running;

function preload(){
  ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png",);
  seaImg = loadImage("sea.png");

}

function setup(){
  createCanvas(1000,1000);

  mar = createSprite(500,500,20,20);
  mar.addImage(seaImg);
  seaImg.x=0
  ship = createSprite(500,500,20,40);
  ship.addAnimation("running", ship_running);
  ship.scale = 0.5 

  
}

function draw() {
  background("blue");

  if(seaImg.x <0){
    seaImg.x=seaImg.width/2;
  }

  drawSprites();

 
}