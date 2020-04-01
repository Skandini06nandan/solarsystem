var sun, 
mercury, 
venus, 
earth,
mars, 
jupiter,
saturn,
uranus,
neptune;
var sunImg, mercuryImg, venusImg, earthImg,marsImg, jupiterImg, saturnImg, uranusImg, neptuneImg;

var angle =0;
var anglespeed =0.2;
var sunRadius;

function preload(){
  sunImg =loadImage("sun.png");
  mercuryImg =loadImage("mercury.jpg");
  venusImg =loadImage("venus.jpg");
  earthImg =loadImage("earth.png");
  marsImg =loadImage("mars.jpg");
  jupiterImg =loadImage("jupiter.jpg");
  saturnImg =loadImage("saturn.jpg");
  uranusImg =loadImage("uranus.jpg");
  neptuneImg =loadImage("neptune.jpg")
}

function setup(){
createCanvas(800,800);

sun =createSprite(0,0);
sun.addImage ("sun", sunImg);
sun.scale =0.3;
sun.setCollider("circle", 0,0,300);
sun.debug =true;

mercury =createSprite(400,235);
mercury.addImage("mercury",mercuryImg);
mercury.scale =0.1;
mercury.debug =true;

venus =createSprite(-360,-500);
venus.addImage("venus",venusImg);
venus.scale =0.15;

earth =createSprite(30,305);
earth.addImage("earth",earthImg);
earth.scale =0.21;

mars =createSprite(05,-500);
mars.addImage("mars",marsImg);
mars.scale = 0.1;

jupiter = createSprite(-405,80);
jupiter.addImage("jupiter",jupiterImg);
jupiter.scale =0.21;

saturn =createSprite(425,-195);
saturn.addImage("saturn",saturnImg);
saturn.scale =0.2;

uranus =createSprite(-405,-180);
uranus.addImage("uranus",uranusImg);
uranus.scale =0.3;

neptune =createSprite(-180,-395);
neptune.addImage("neptune",neptuneImg);
neptune.scale =0.45;
}

function draw(){
  background(0);
   
  angleMode(DEGREES);
  translate(width/2,height/2);
  rotate(angle);
  
  if (sun.collide(mercury)){
    mercury.destroy();
  }
  if (sun.collide(venus)){
    venus.destroy();
  }
  if (sun.collide(earth)){
    earth.destroy();
  }
  if (sun.collide(mars)){
    mars.destroy();
  }
  if (sun.collide(jupiter)){
    jupiter.destroy();
  }
  if (sun.collide(saturn)){
    saturn.destroy();
  }
  if (sun.collide(uranus)){
    uranus.destroy();
  }
  if (sun.collide(neptune)){
    neptune.destroy();
  }
  

  angle = angle + anglespeed;

  if (frameCount % 8 == 0){
    sun.scale= sun.scale + 0.01;
  }
  drawSprites();
}


