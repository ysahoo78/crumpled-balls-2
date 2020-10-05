
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paper, side1, side2, bottom, dustbinIMG;

function preload()
{
	dustbinIMG=loadImage("dustbingreen.png")
	
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//paper = new Paper();

	//Create the Bodies Here.

	/*groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	side1Sprite = createSprite(325, 610, 20, 100);
	side1Sprite.shapeColor = "red";

	side2Sprite = createSprite(475, 610, 20, 100);
	side2Sprite.shapeColor = "red";

	bottomSprite = createSprite(400, 650, 150, 20);
	bottomSprite.shapeColor = "red";
*/
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.50, isStatic:true});
	
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 675, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	side1 = Bodies.rectangle(825, 625, 20, 100,{isStatic: true});
	World.add(world, side1);

	side2 = Bodies.rectangle(1025, 625, 20, 100,{isStatic: true});
	World.add(world, side2);

	bottom = Bodies.rectangle(800, 540, 150, 20, {isStatic: true});
	World.add(world, bottom);



	 paper = new Paper(200,200,50);
	 

	Engine.run(engine);
  
}


function draw() {
  
  background(255);
  paper.display();
  rectMode(CENTER);
  rect(side1.position.x, side1.position.y, 20, 100);
  rect(side2.position.x, side2.position.y, 20,100);
  image(dustbinIMG, bottom.position.x, bottom.position.y, 250, 125);
  rect(ground.position.x, ground.position.y, 1200, 20);

 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 85, y: -85})
	}	
}



