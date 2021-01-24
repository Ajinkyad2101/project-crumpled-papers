
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball;
var ground;



function preload()
{
	
}

function setup() {
	createCanvas(1200, 670);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paperball= new Paper(100,100,20)

	ground=new Box(600,650,1200,10)

	wall1=new Box(1000,640,200,20)
	wall2= new Box(900,600,20,100)
	wall3= new Box(1100,600,20,100)
	
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)

  wall1.display();
  wall2.display();
  wall3.display();  
 
  paperball.display();
  ground.display();

 
  drawSprites();

  
}

function keyPressed(){

	if (keyCode===UP_ARROW){

		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:25,y:-33})

	}

}



