const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world , engine ;
var ground;

function setup() 
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  box1 = new Box(200,100,50,50);
  box2 = new Box(240,50,50,50);
  ground = new Ground(200,380,400,40);
}

function draw() 
{
  background("lightblue"); 
  Engine.update(engine);
  box1.display();
  ground.display();
  helicopter.display();
}  