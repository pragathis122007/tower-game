const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand;
var polygon,polygon_image;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15;
var block16;
var slingshot1;

function preload(){
 polygon_image = loadImage("polygon.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    background("black");
    engine = Engine.create();
    world = engine.world;

    polygon = Bodies.circle(50,200,20);
    imageMode(CENTER)
    image(polygon_image,polygon.position.x,polygon.position.y,40,40);
    World.add(world,polygon);


   slingshot1 = new SlingShot(this.polygon,{x:100,y:200});

    ground = new Ground(600,350,1200,20);
    stand = new Ground(600,330,600,20);

    block1 = new Box(600,305,30,30);
    block2 = new Box(570,305,30,30);
    block3 = new Box(540,305,30,30);
    block4 = new Box(510,305,30,30);
    block5 = new Box(630,305,30,30);
    block6 = new Box(660,305,30,30);
    block7 = new Box(690,305,30,30);

    block8 = new Box(600,275,30,30);
    block9 = new Box(570,275,30,30);
    block10 = new Box(540,275,30,30);
    block11 = new Box(630,275,30,30);
    block12 = new Box(660,275,30,30);

    block13 = new Box(600,245,30,30);
    block14 = new Box(570,245,30,30);
    block15 = new Box(630,245,30,30);

    block16 = new Box(600,215,30,30);
}

function draw(){
    Engine.update(engine);
    ground.display();
    stand.display();
    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    block13.display();
    block14.display();
    block15.display();

    block16.display();

    slingshot1.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot1.fly();
}