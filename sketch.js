
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var treeObj, stoneObj, groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var world, boy;
var chain;

function preload() {
  boy = loadImage("images/boy.png");
}

function setup() {
  createCanvas(1300, 600);
  engine = Engine.create();
  world = engine.world;

  mango1 = new Mango(950, 150, 30);
  mango2 = new Mango(1000, 180, 30);
  mango3 = new Mango(1050, 130, 30);
  mango4 = new Mango(1100, 140, 30);
  mango5 = new Mango(1130, 180, 30);
  mango6 = new Mango(1170, 210, 30);
  mango7 = new Mango(1250, 180, 30);
  mango8 = new Mango(1220, 140, 30);
  mango9 = new Mango(1150, 130, 30);
  mango10 = new Mango(950, 220, 30)


  treeObj = new tree(1050, 580);
  groundObject = new ground(width / 2, 600, width, 20);
  stoneObj = new Stone(220, 400, 30)
  //chain=new Chain(stoneObj,{x=215,y:320})
  chain = new Chain(stoneObj.body, { x: 220, y: 400 });


  Engine.run(engine);

}

function draw() {




  background(230);
  //Add code for displaying text here!
  image(boy, 200, 340, 200, 300);
  textSize(18)
  text("PRESS SPACE TO GET ANOTHER CHANCE", 20, 20)




  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  stoneObj.display();
  groundObject.display();
  chain.display();


  detectCollision(stoneObj, mango1);
  detectCollision(stoneObj, mango2);
  detectCollision(stoneObj, mango3);
  detectCollision(stoneObj, mango4);
  detectCollision(stoneObj, mango5);
  detectCollision(stoneObj, mango6);
  detectCollision(stoneObj, mango7);
  detectCollision(stoneObj, mango8);
  detectCollision(stoneObj, mango9);
  detectCollision(stoneObj, mango10);












}

function detectCollision(lstone, lmango) {

  var mangoBodyPosition = lmango.body.position
  var stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if (distance <= lmango.r + lstone.r) {
    Matter.Body.setStatic(lmango.body, false)
  }

}



function mouseDragged() {
  Matter.Body.setPosition(stoneObj.body, { x: mouseX, y: mouseY })
}
function mouseReleased() {
  chain.fly()
}
function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, { x: 220, y: 400 })
    chain.attach(stoneObj.body)
  }
}













