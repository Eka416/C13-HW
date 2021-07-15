var bow , arrow,  background,score;
text("Score: " + score, 270,30)

var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
score = 0
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
    textSize(30)
    text("Score: " + score, 270,30)

    scene.velocityX = -3 

  // moving ground

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.floor(random(1,5));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      var scale = 0.1
      Balloon(red, red_balloonImage,scale);
    }
    else if(select_balloon == 2) {
      var scale = 0.1
      Balloon(blue, blue_balloonImage,scale);

    }
    else if(select_balloon == 3) {
      var scale = 0.1
      Balloon(green, green_balloonImage,scale);

    }
    else {
      
      var scale = 1.5
      Balloon("pink", pink_balloonImage,scale)
    }
  }
  
  drawSprites();
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function Balloon(red,red_balloonImage,scale) {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = scale;

}

