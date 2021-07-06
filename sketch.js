var garden,rabbit;
var gardenImg,rabbitImg;
var grassImg,appleImg,leafImg;
var score;

function preload()
{
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  grassImg = loadImage("grass.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  spawnLeaves();
  spawnApples();
  spawnGrass();
  drawSprites();
}
//Function to spawn the leaves
function spawnLeaves() 
{
  if(frameCount%60 === 0)
{
 var leaves = createSprite(Math.round(random(50,90)),30);
 leaves.scale = 0.05;
 leaves.addImage(leafImg);
 leaves.velocityY = 10;
}
}
function spawnApples() 
{
  if(frameCount%60 === 0) 
  {
var apples = createSprite(Math.round(random(140,180)),30);
apples.scale = 0.06;
apples.addImage(appleImg);
apples.velocityY = 11;
  }
}
function spawnApples() 
{
  if(frameCount%60 === 0) 
  {
var apples = createSprite(Math.round(random(140,200)),30);
apples.scale = 0.06;
apples.addImage(appleImg);
apples.velocityY = 11;
  }
}
function spawnGrass() 
{
  if(frameCount%60 === 0) 
  {
var grass = createSprite(Math.round(random(240,300)),30);
grass.scale = 0.07;
grass.addImage(grassImg);
grass.velocityY = 12;
  }
}