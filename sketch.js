var cat,cat1,cat2,cat3
var catImg,cat1Img,cat2Img,cat3Img
var garden,gardenImg
var mouse,mouse1,mouse2,mouse3,mouse4
var  mouseImg,mouse1Img,mouse2Img,mouse3Img,mouse4Img



function preload() {

    gardenImg=loadImage("images/garden.png")
    catImg=loadImage("images/cat1.png")
    cat2Img=loadAnimation("images/cat2.png","images/cat3.png")
    mouseImg=loadImage("images/mouse1.png")
    cat3Img=loadImage("images/cat4.png")
    mouse2Img=loadImage("images/mouse4.png")
    mouse1Img=loadAnimation("images/mouse2.png","images/mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    garden=createSprite(500,400)
    garden.addImage(gardenImg)
    garden.scale=1.20

   cat=createSprite(850,650)
   cat.addImage(catImg)
   cat.scale=0.2

   mouse=createSprite(150,650)
   mouse.addImage(mouseImg)
   mouse.scale=0.15


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width <+ mouse.width )/2) {
 cat.addAnimation("theLastImg",cat3Img) 
 cat.changeAnimation("theLastImg") 
  cat.velocityX=0
  cat.x=500
  cat.y=650

  mouse.addAnimation("theLastImg",mouse2Img) 
  mouse.changeAnimation("theLastImg")




    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
 cat.velocityX = -5
  cat.addAnimation("catRunning",cat2Img)
 cat.changeAnimation("catRunning")

 mouse.addAnimation("mouseRunning",mouse1Img)
 mouse.changeAnimation("mouseRunning")
 }

}
