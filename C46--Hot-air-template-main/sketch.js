var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var jumpSound
var obs1 ,obs2,obs3,obs4,obs5
var obstacle

function preload(){
bgImg = loadImage("assets/bg.png")
jumpSound = loadSound("assets/jump.mp3")
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
obs1 = loadImage("assets/obsBottom1.png")
obs2 = loadImage("assets/obsBottom2.png")
obs3 = loadImage("assets/obsBottom3.png")
obs4 = loadImage("assets/obsTop1.png")
obs5 = loadImage("assets/obsTop2.png")
}

function setup(){
createCanvas(1200,600)
//background image
bg = createSprite(165,485,20,20);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.5;



}

function draw() {
  
  background("white");
        
          //making the hot air balloon jump
          if(keyDown("UP_ARROW")) {
            balloon.velocityY= -6 ;
            jumpSound.play()
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY+0.5 ;

           
          createObstacle()
        drawSprites();
        
}
function createObstacle(){
  if(frameCount%60===0){
  obstacle=createSprite(900,500)
  obstacle.scale=0.2
  obstacle.velocityX= -5
  var rand=Math.round(random(1,3))
  switch (rand){
    case 1:obstacle.addImage(obs1);break;
    case 2:obstacle.addImage(obs2);break;
    case 3:obstacle.addImage(obs3);break;
  }
  }

}