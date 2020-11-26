var ghost,ghostImage ,block,door,doorImage;
var tower,towerImage,climber,climberImage;
var sound,doorGroup,blockGroup,climberGroup;
var gameState="play";


function preload (){
  climberImage=loadImage("climber.png");
  ghostImage=loadImage("ghost-standing.png");
  towerImage=loadImage("tower.png");
  doorImage=loadImage("door.png");
  sound=loadSound("spooky.wav");
  
}

function setup (){
  createCanvas(400,400);
  
  tower=createSprite(200,200);
  tower.addImage(towerImage);
  tower.scale=0.7;
  
  ghost=createSprite(100,300);
  ghost.addImage(ghostImage);
  ghost.scale=0.5;
  
  doorGroup=new Group();
  blockGroup=new Group ();
  climberGroup=new Group();
  
  sound.loop();

  
}

function draw (){
  background("lightblue");
  tower.velocityY=1;
  if(tower.y>400){
    tower.y=200;
    
  }
  
  if (gameState=="play"){
    if( keyDown ("space")) {
      ghost.velocityY=-5;
      
    }
  ghost.velocityY+=0.5;
    if(keyDown ("right")){
      ghost.x+=2;
      
    }
    if(keyDown ("left")){
      ghost.x-=2;
    }
  spawndoors();
    if(climberGroup.isTouching(ghost)){
      ghost.velocityX=0;
      
    }
    if (blockGroup.isTouching(ghost)||ghost.y>400){
      gameState="end";
      
      
    }
      
    
    
  drawSprites();
  }
  if(gameState=="end"){
    textSize(30);
    text("gameOver",180,200);
    
  }
}

function spawndoors (){
  if(frameCount%100===0){
    door=createSprite(-50,100);
    climber=createSprite(10,100);
    block=createSprite(15,100);
    door.x=Math.round(random(50,250));
    
    climber.x=door.x;
    block.x=door.x;
    
    door.addImage(doorImage);
    climber.addImage(climberImage);
    block.width=door.width;
    block.height=2;
    
    //increase
    ghost.depth=door.depth+1;
    
    doorGroup.add(door);
    climberGroup.add(climber);
    blockGroup.add(block);
    
    door.velocityY=1;
    climber.velocityY=1;
    block.velocityY=1;
    
  }
  
}


