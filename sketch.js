
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin, binImg;


function preload()
{
	
	binImg = loadImage("dustbingreen.png");	
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Ground(400,680,800,20);
	side1 = new Dustbin(565,590,2,132);
	side2 = new Dustbin(610,660,100,20);
	side3 = new Dustbin(650,590,2,132);
	
	bin = createSprite(610,595);
	bin.addImage(binImg);
	bin.scale = 0.45;
	
	paper = new Paper();


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);

  

  ground.display();
  paper.display();
  side1.display();
  side2.display();
  side3.display();

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:195,y:-195});
	}
}


