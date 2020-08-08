
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var ground;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(320,300,400,50);

	bobObject1 = new Bob(220,500,50);
	bobObject2 = new Bob(270,500,50);
	bobObject3 = new Bob(320,500,50);
	bobObject4 = new Bob(370,500,50);
	bobObject5 = new Bob(420,500,50);

	rope1 = new Rope(bobObject1.body, ground.body, -100, 0);
	rope2 = new Rope(bobObject2.body, ground.body, -50, 0);
	rope3 = new Rope(bobObject3.body, ground.body, 0, 0);
	rope4 = new Rope(bobObject4.body, ground.body, 50, 0);
	rope5 = new Rope(bobObject5.body, ground.body, 100, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  ground.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  keyPressed();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-80,y:80});
  
	}
}