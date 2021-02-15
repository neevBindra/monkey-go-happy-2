
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score = 0;
var ground, groundImage;
var invground;
    
function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  groundImage = loadImage("jungle.jpg");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  ground = createSprite(300,300,1,1);
  ground.addImage(groundImage);
  ground.velocityX = -4;
 

  
  
  invground = createSprite(300,510,600,1);
  invground.visible = false;
  
  
  
  
  // creating monkey 
monkey = createSprite(80,510,10,10);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
  
  // creating ground
  


  bananaGroup = createGroup();
  obstacleGroup= createGroup();
  

  

  monkey.debug = false
  monkey.setCollider("rectangle",0,0,20,monkey.height);
  
}


function draw() {
background("white");
  
  monkey.depth = ground.depth;
  monkey.depth ++;
 
  
  monkey.collide(invground);
  
    if(ground.x < 20){
      ground.x = 300;
    }
  
    if (invground < 0) {
    invground.x = 300;
    
  }
  
     if( keyDown("space")){
    monkey.velocityY=-12;
     }
  monkey.velocityY = monkey.velocityY+0.5;

    // banana
  banana();
   
    // obstacles
  obstacles();

    if(monkey.isTouching( bananaGroup)){
 bananaGroup.destroyEach();
    score = score+2;
  }
    
    if(monkey.isTouching(obstacleGroup)){
      monkey.scale = 0.1;
       }
  
  switch(score){
         case 10 : monkey.scale = 0.12;
      break;
    case 20 : monkey.scale = 0.14;
      break;
    case 30 : monkey.scale = 0.16;
      break;
    case 40 : monkey.scale = 0.18;
      break;
    default : break;
  }
  
  drawSprites();
    stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,370,70)

     }

function banana(){
  
  if(frameCount%80===0){
   var banana = createSprite(600,130,10,10);
    banana.addImage(bananaImage);
    banana.velocityX=-6;
    banana.y=Math.round(random(250,505));
    banana.scale=0.1;
    banana.lifetime=100;
    bananaGroup.add(banana);
    
    
   }   
      }

   function obstacles(){
     
     if(frameCount%90===0){
       var obstacle = createSprite(450,510,10,10);
       obstacle.addImage(obstacleImage);
       obstacleGroup.add(obstacle);
       obstacle.scale=0.1;
       obstacle.velocityX=-6;
       obstacle.lifetime=100;
     }
   }


  
  


