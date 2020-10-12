const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, box1, box2, box3, box4, box5, launcher, box7, box6, box8, stand1, ball;


function setup() {
  createCanvas(800, 400);


  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, 400, width, 20);
  stand1 = new Ground(300, 200, 180, 20);
  box1 = new Box(360, 180, 30, 40);
  box2 = new Box(270, 180, 30, 40);
  box3 = new Box(330, 180, 30, 40);
  box4 = new Box(300, 180, 30, 40);
  box5 = new Box(280, 140, 30, 40);
  box6 = new Box(340, 140, 30, 40);
  box7 = new Box(310, 140, 30, 40);
  box8 = new Box(310, 100, 30, 40);
  ball = new Ball(120, 250, 10);
  launcher = new Launcher(ball.body, {
    x: 100,
    y: 270
  });
  // createSprite(400, 200, 50, 50);
  Engine.run(engine);
}

function draw() {
  background(0);

  ground.display();
  stand1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  ball.display();
  launcher.display();

  // drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, {
    x: mouseX,
    y: mouseY
  });
}


function mouseReleased() {
  launcher.fly();
}

// function keyPressed() {
//   if (keyCode === 32) {
//       slingshot.attach(bird.body);
//       Matter.Body.setPosition(box1.body, {
//           x: 700,
//           y: 320
//       })
//   }
// }