var HeliIMG, helicopter, package,packageIMG;
var packageBody,ground
var zombie, zombie2, zombieIMG, zombie2IMG;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	HeliIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	
	zombieIMG = loadImage("zombie.png")
	zombie2IMG = loadImage("Zombie2.png")
	
}


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	zombie = createSprite(10, 600, 10, 10 );
	zombie.addImage(zombieIMG)
	zombie.scale = 0.15;

	zombie = createSprite(690, 600, 10, 10 );
	zombie.addImage(zombieIMG)
	zombie.scale = 0.15;

	helicopter=createSprite(-15, 200, 10,10);
	helicopter.addImage(HeliIMG)
	helicopter.scale=0.6

	package = createSprite(helicopter.position.x, helicopter.position.y, 10,10);
	package.addImage(packageIMG)
	package.scale=0.2
   
	groundSprite=createSprite(width/2, innerHeight -5, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	helicopter = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	World.add(world, helicopter);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(155);
  Engine.update(engine);
    rect(ground.position.x,ground.position.y,700,20);
  
  package.x= packageBody.position.x 
  package.y= packageBody.position.y 
 
 
  drawSprites();
 
}

function Heli ()
{
	if(keyDown("enter"))
 {
	 helicopter.velocityX =2;
 }
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}