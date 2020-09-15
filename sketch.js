const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var canvas,track;
var tank,tankIMG;
var cop,copIMG,fire,fire2,fire3,fire4,fire5,fire6,fire7,fire8,fire9,fireIMG;
var rod,car1,car1IMG,car2,car2IMG,car3,car4,car5,car6,car7,car8,car9,car10;

function preload(){
  
  track=loadImage("track.jpg");
  tankIMG=loadImage("tank.png");
  copIMG=loadImage("cop.png");
  fireIMG=loadImage("fire.png");
  car1IMG=loadImage("car1.png");
  car2IMG=loadImage("car2.png");
}

function setup() 
{
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  
 tank = createSprite(680,400,50,50);
 tank.addImage(tankIMG);
 tank.scale=0.2;

 car1 = createSprite(600,-200,50,50);
 car1.addImage(car1IMG);
 car1.scale=0.2;

 car2 = createSprite(900,-400,50,50);
 car2.addImage(car2IMG);
 car2.scale=0.2;

 fire = createSprite(600,-200,50,50);
 fire.addImage(fireIMG);
 fire.scale=0.08;

 fire2 = createSprite(900,-400,50,50);
 fire2.addImage(fireIMG);
 fire2.scale=0.08;

 car3 = createSprite(380,-650,50,50);
 car3.addImage(copIMG);
 car3.scale=0.28;

 fire3 = createSprite(380,-650,50,50);
 fire3.addImage(fireIMG);
 fire3.scale=0.12;

 rod = createSprite(500,-3080,5000,20);
 rod.shapeColor=75,75,75;

 car4 = createSprite(900,-800,50,50);
 car4.addImage(car1IMG);
 car4.scale=0.2;

 fire4 = createSprite(890,-800,50,50)
 fire4.addImage(fireIMG);
 fire4.scale=0.1;

 car5 = createSprite(700,-1000,50,50);
 car5.addImage(car2IMG);
 car5.scale=0.2;

 fire5 = createSprite(700,-1000,50,50)
 fire5.addImage(fireIMG);
 fire5.scale=0.1;

 car6 = createSprite(350,-1200,50,50);
 car6.addImage(car1IMG);
 car6.scale=0.2;

 fire6 = createSprite(350,-1200,50,50)
 fire6.addImage(fireIMG);
 fire6.scale=0.15;

 car7 = createSprite(450,-1400,50,50);
 car7.addImage(copIMG);
 car7.scale=0.28;

 car8 = createSprite(850,-1400,50,50);
 car8.addImage(copIMG);
 car8.scale=0.28;

 car9 = createSprite(500,-1700,50,50);
 car9.addImage(car1IMG);
 car9.scale=0.2;

 fire7  =createSprite(500,-1900,50,50);
 fire7.addImage(fireIMG);
 fire7.scale=0.3;

 fire8  =createSprite(500,-2000,50,50);
 fire8.addImage(fireIMG);
 fire8.scale=0.27;

 fire9  =createSprite(800,-2500,50,50);
 fire9.addImage(fireIMG);
 fire9.scale=0.25;
}


function draw() 
{
background(75,75,75);
image(track,0,-displayHeight*4,displayWidth,displayHeight*5);

if(keyWentDown(UP_ARROW)){
   tank.velocityY=-8;
}else if(keyWentUp(UP_ARROW)){
   tank.velocityY=0;
}

if(keyWentDown(DOWN_ARROW)){
   tank.velocityY=5;
}else if(keyWentUp(DOWN_ARROW)){
  tank.velocityY=0;
}
if(keyWentDown(LEFT_ARROW)){
  tank.velocityX=-5;
}else if(keyWentUp(LEFT_ARROW)){
  tank.velocityX=0;
}
if(keyWentDown(RIGHT_ARROW)){
  tank.velocityX=5;
}else if(keyWentUp(RIGHT_ARROW)){
  tank.velocityX=0;
}

if(tank.isTouching(rod)){
  tank.velocityY=0;
  tank.velocityX=0;
}

camera.position.y=tank.position.y;


 
  fire.depth=tank.depth;
  fire.depth=tank.depth+1;
  fire2.depth=tank.depth;
  fire2.depth=tank.depth+1;
  fire3.depth=tank.depth;
  fire3.depth=tank.depth+1;
  fire4.depth=tank.depth;
  fire4.depth=tank.depth+1;
  fire5.depth=tank.depth;
  fire5.depth=tank.depth+1;
 

  tank.depth=car1.depth;
  tank.depth=car1.depth+1;
  tank.depth=car2.depth;
  tank.depth=car2.depth+1;
  tank.depth=car3.depth;
  tank.depth=car3.depth+1;
  tank.depth=car4.depth;
  tank.depth=car4.depth+1;
  tank.depth=car5.depth;
  tank.depth=car5.depth+1;
  tank.depth=car6.depth;
  tank.depth=car6.depth+1;
  tank.depth=car7.depth;
  tank.depth=car7.depth+1;
  tank.depth=car8.depth;
  tank.depth=car8.depth+1;
  tank.depth=car9.depth;
  tank.depth=car9.depth+1;

  drawSprites();
}

