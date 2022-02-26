const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;

var bal1, bal2, bal3;
var bal1Img, bal2Img, bal3Img;

function preload() {
 
  bal1Img = loadImage("./assets/bal1.png");
  bal2Img = loadImage("./assets/bal2.png")
  bal3Img = loadImage("./assets/bal3.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

 options={
 isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);

 bal1 =  new Balloon(200, 50, 60, bal1Img) 
 bal2 =  new Balloon(500, 50, 60, bal2Img) 
 bal3 =  new Balloon(700, 50, 60, bal3Img) 
}

function draw() {
  background("plum");
  Engine.update(engine);

  strokeWeight(10)
  stroke("cyan")
  textSize(40)
  text ("Happy Birthday Nainitha Rao !!!", width/4, height/2)
  console.log(bal1)

  bal1.showBalloon()
  bal2.showBalloon()
  bal3.showBalloon()
 
 rect(ground.position.x, ground.position.y,width*2,1);
  
   
}
