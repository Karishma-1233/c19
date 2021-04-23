var bg,bg1
var ghost,ghost2
var door,door1
var climber,climber1
var gline
var doorgroup,climbergroup,linegroup
var gameState="PLAY"


function preload(){
  bg1=loadImage("tower.png")
  ghost2=loadImage("ghost-standing.png")
  door1=loadImage("door.png")
  climber1=loadImage("climber.png")
  
  
}


function setup(){
createCanvas(600,600)
  bg=createSprite(300,300,10,10)
  bg.addImage(bg1)
  bg.velocityY=1
  
  ghost=createSprite(300,300,20,20)
  ghost.addImage(ghost2)
  ghost.scale=0.3
  
  doorgroup=new Group()
  linegroup=new Group()
  climbergroup=new Group()
  
}
function draw(){
  background("black")
  if(gameState==="PLAY"){
    
    

  if(bg.y>400){
    bg.y=300
    
  }
  
  if(keyDown("space")){
    ghost.velocityY=-12
    
  }
     if(keyDown("left")){
    ghost.x=ghost.x-5
    
  }
     if(keyDown("right")){
    ghost.x=ghost.x+5
    
  }
    if(climbergroup.isTouching(ghost)){
      ghost.velocityY=0
    }
    if(linegroup.isTouching(ghost)||ghost.y>600){
      ghost.destroy()
      gameState="END"
      
    }
  ghost.velocityY=ghost.velocityY+0.8
  spawnDoor()
  drawSprites()
  }
  if(gameState==="END"){
    textSize(20)
    text("GAMEOVER",250,250)
    
    
  }
}

function spawnDoor(){
  if(frameCount%300===0){
    door=createSprite(Math.round(random(200,400)),10,10,10)
    door.addImage(door1)
    door.velocityY=1
    climber=createSprite(door.x,60,10,10)
    climber.addImage(climber1)
    climber.velocityY=1
    gline=createSprite(door.x,65,climber.width,3)
    gline.velocityY=1
    gline.shapeColor="green"
    doorgroup.add(door)
    climbergroup.add(climber)
    linegroup.add(gline)
    ghost.depth=door.depth+1
  }
  
  
}























