
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(200,400,1200,30);
	paper = new Paper(100,150,20,20);
	bin1 = new DustBin(450,355,10,60);
	bin2 = new DustBin(600,355,10,60);
	bin3 = new DustBin(525,380,140,10);
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  paper.display();
  bin1.display();
  bin2.display();
  bin3.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:12,y:-12});
	}
}



