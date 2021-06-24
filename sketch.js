const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var box1, pig1;
var backgroundImg,platform,slingshot;
var gameState="onSling"
var score=0;
function preload() {
    backgroundImg = loadImage("sprites/bg.png");

    gettime();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    

    slingshot=new SlingShot(bird.body,{x:200,y:50});
    

   

    

}

function draw(){
    if (backgroundImg)
    background(backgroundImg);

    

    noStroke()
    textSize(32);
    fill ("white")
    text("score:"+ score,1000,50);



    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    slingshot.display();
    pig1.score();
    pig3.score();
    
}

function mouseDragged(){
    if (gameState!=="launch"){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}}

function mouseReleased(){
    gameState="launch"
    slingshot.fly()
}
function keyPressed(){
    if (keyCode===32){
     //   slingshot.attach(bird.body)
    }
}
async function gettime(){
    var api= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var apiJSON=await api.json();
    console.log(apiJSON);
   var datetime=apiJSON.datetime;
   console.log(datetime);
  var time = datetime.slice (11,13);
  console.log(time);
if (time>=06&&time<=19){
    bg="sprites/bg.png"
}else{
    bg="sprites/bg2.jpg"
}
backgroundImg=loadImage(bg);

}

