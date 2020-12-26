var dustbinleft,dustbinright,dustbincentre;
var ball;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	var canvas = createCanvas(800, 650);

	engine = Engine.create();
	world = engine.world;

	//dustbinCentre = new Dustbin(width/1.2, height-100, 200, 20);
	//dustbinLeft = new Dustbin(width/1.2 - 90, height-150,20,100);
	//dustbinRight = new Dustbin(width/1.2 + 90, height-150,20,100);

	//ball = new Ball(width/4,height-25,1);

	//ground = new Ground(width/2.height,1200,120);

	//Create the Bodies Here.

	Engine.run(engine);
  
}

function draw() {
  	rectMode(CENTER);
	background(0);

	//dustbinCentre.display();
	//dustbinLeft.display();
	//dustbinRight.display();

	//ball.display();
	
	//ground.display();

	drawSprites();
}