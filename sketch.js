var br;
var man;
var pest;
var pesticide;

var background, man1, pest1, poison;

function preload(){

br = loadImage("images/house.jpg");
man = loadImage("images/man.png");
pest = loadImage("images/pest.png");
pesticide = loadImage("images/pesticide.png");

}

function setup(){
createCanvas(windowWidth,windowHeight);
background = createSprite(windowWidth/2,windowHeight/2,50,50);
background.addImage(br);
man1 = createSprite(windowWidth-20,windowHeight-20,50,50);
man1.addImage(man);
pest1 = createSprite(windowWidth+20,windowHeight+20,50,50);
pest1.addImage(pest);
poison = createSprite(200,200,50,50);
poison.addImage(pesticide);


}

function draw(){
background(0)


if(keyDown("UP_ARROW")){
    man1.y=man1.y-2;
}
if(keyDown("DOWN_ARROW")){
    man1.y=man1.y+2;
}
if(keyDown("RIGHT_ARROW")){
    man1.x=man1.x+2;
}
if(keyDown("LEFT_ARROW")){
    man1.x=man1.x-2;
}
drawSprites()
}






















