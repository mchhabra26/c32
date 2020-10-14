const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;
var ground1,ground2;
var circle,slingshot;

//fourth row 
var block1,block2,block3,block4,block5,block6,block7;

//third row
var block8,block9,block10,block11,block12;

//second row
var block13,block14,block15;

//first row
var block16;

var score = 0;

//last row
var block17,block18,block19,block20,block21;

//second row
var block22,block23,block24;

//first row
var block25;

var backgroundImg

var bg = "bg.png";

function preload(){
  getBackgroundImg();
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(330,390,260,10); 
  ground2 = new Ground(570,230,200,10);

  //fourth row
  block1 = new Block(240,365,30,40);
  block2 = new Block(270,365,30,40);
  block3 = new Block(300,365,30,40); 
  block4 = new Block(330,365,30,40);
  block5 = new Block(360,365,30,40);
  block6 = new Block(390,365,30,40);
  block7 = new Block(420,365,30,40);

  //third row
  block8 = new Block(270,325,30,40);
  block9 = new Block(300,325,30,40); 
  block10 = new Block(330,325,30,40);
  block11 = new Block(360,325,30,40);
  block12 = new Block(390,325,30,40);

  //second row
  block13 = new Block(300,285,30,40);
  block14 = new Block(330,285,30,40);
  block15 = new Block(360,285,30,40);

  //first row
  block16 = new Block(330,245,30,40);

  //last row
  block17 = new Block(510,205,30,40); 
  block18 = new Block(540,205,30,40);
  block19 = new Block(570,205,30,40);
  block20 = new Block(600,205,30,40);
  block21 = new Block(630,205,30,40);

  //second row
  block22 = new Block(540,165,30,40);
  block23 = new Block(570,165,30,40);
  block24 = new Block(600,165,30,40); 

  //first row
  block25 = new Block(570,125,30,40);

  circle = new Circle(100,220);

  //slingshot = new SlingShot(bird.body,{x:200, y:50});
  console.log("Circle body  "+circle.body)
  slingshot = new SlingShot(circle.body,{x:100, y:220});

  text("Score: "+score,750,40)

}

function draw() {

  if(backgroundImg){
    background(backgroundImg);
    } 
    
  Engine.update(engine);
  textSize(20)
  text("Score: "+score,650,40)

  ground1.display();
  ground2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();
  block15.display();

  block16.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();
  block24.display();

  block25.display();

  circle.display();

  slingshot.display();


  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();

  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();

  block13.score();
  block14.score();
  block15.score();

  block16.score();

  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();

  block22.score();
  block23.score();
  block24.score();

  block25.score();

  drawSprites();
}

function mouseDragged(){
       Matter.Body.setPosition(circle.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   slingshot.fly();
}


async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
  var responseJSON = await response.json();
  var dateTime = responseJSON.datetime;
  var hour = dateTime.slice(11,13);

  if(hour>=07 && hour<=18){
    bg = "bg.png"
}
else{
   bg = "bg2.png"
}
backgroundImg = loadImage(bg);
console.log(backgroundImg); 

}


