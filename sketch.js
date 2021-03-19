var d1, d2, d3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);

    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    d1= new DUSTbin(550,390,150,10);
    ground= new Ground(400,height,800,10);

	paper= new Paper(200,10,40);

	Engine.run(engine);
  
}


function draw() {
  background("white");
  Engine.update(engine);
  d1.display();

  paper.display();
  ground.display();
 
}

function keyPressed(){
   if(keyCode === UP_ARROW){
	   Matter.Body.applyForce(paper.bodies, paper.bodies.position,{
		   x:40,
		   y:-40
	   });
   }
}


