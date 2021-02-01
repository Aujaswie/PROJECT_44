var welcomeScr, playButton;
var gameState=0;
var backgroundImg;
var welcomeImg,gameImg;
var playButtonImg;
var timer=5;
var god;
var hadesImg,zeusImg,posiedonImg;
var level=1;

function preload(){
  welcomeImg =loadImage ("Images_GOW/WelcomeBg.jpg");
  gameImg =loadImage ("Images_GOW/gameBg.jpg");
  playButtonImg =loadImage ("Images_GOW/playButton.png");
  titleImg =loadImage ("Images_GOW/title.png");
  hadesImg =loadImage ("Images_GOW/hades.png");
  zeusImg =loadImage ("Images_GOW/zeus.png");
  posiedonImg =loadImage("Images_GOW/posiedon.png");

}

function setup() {
  createCanvas(800,400);

  playButton = createSprite(400, 300, 50, 50);
  playButton.addImage(playButtonImg);
  playButton.scale=0.1

  title = createSprite(390, 50, 50, 50);
  title.addImage(titleImg);
  title.scale=0.2
  

  god = createSprite(150, 250, 50, 50);
  //god.addImage(hadesImg);
  god.scale=0.2
  god.visible=false;

  
}

function draw() {
  if(gameState ==0){
    backgroundImg=welcomeImg;
    if(mousePressedOver(playButton)){
      gameState=1;
    }
  }
  else{ 
    backgroundImg= gameImg;
  }
  background(backgroundImg);  


  if(gameState==1){
    playButton.visible=false;
    title.visible=false;
    selectLevel();

    if(timer==0){
      god.visible=true;
    }
   
  }
 

  drawSprites();
display();

}

function display(){
  if (gameState==0){
    fill("darkred");
    //stroke("black")
    textSize(20);
    textFont("Herculanum");
    text("RULES",width/2-40,140);
    textSize(15);
    text("1.	The player has to defeat the giant using only its power to reach next level.",width/2-270,160);
    text("2.	Player can chose power out of three options . ",width/2-270,180);
    text("3.	Player has to defeat giant in particular lifeline. ",width/2-270,200);
    text("4.	If payer lifeline of player is zero game gets over.  ",width/2-270,220);
    text("5.	If giant lifeline is zero game moves to next level and the god changes. ",width/2-270,240);
    //text("if you want ti=o play click on the play button below ",ngeswidth/2-270,280);
  }
  if (gameState==1){
    if (frameCount%30==0&& timer > 0){
        timer--;
       
    }
    if(timer>0){
      fill("black");
      textSize(20);
      textFont("Herculanum");
      text("first round is  god Hades against giant Alcyoneus",width/2-250,height/4)
    }
  }
}
function selectLevel(){
 
  switch(level){
    case 1: god.addImage(hadesImg);
            break;
    case 2: god.addImage(posiedonImg);
            break;
    case 3: god.addImage(zeusImg);
            break;

  }
}

function control(){

}