const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var l1,l2,l3,ground, ball33
var options={
	isstatic:false,
	restitution:0.3,
	friciction:0.5,
	density:1.2
}





function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  ground=createSprite(750,600,2000,10)
  l1=createSprite(740,540,10,100)
  l1.shapeColor="red"
  l2=createSprite(690,590,100,10)
  l2.shapeColor="red"
  l3=createSprite(640,540,10,100)
  l3.shapeColor="red"
  
  ball33= new ball(640,540);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball33.display()
  
  

  drawSprites();
 
}
function keypressed(){
  if(keycode===UP_ARROW){
    Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,Y:85})
  }
}



