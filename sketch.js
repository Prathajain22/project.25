
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var a,b,c,p,g;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	a=new Bin (700,650,PI/2)
	b=new Bin (700,650,PI/2)
	c=new Bin (700,650,PI/2)
	p=new Papers (200,650,40)
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	
	Engine.run(engine);
  
}


function draw() {
  background(0);
  a.display();
  b.display();
  c.display();
  p.display(); 


  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
   Matter.Body.applyForce(paperObject.body,paperObject.body,position,{x:85,y:85}); 
	   
	 }
   }

