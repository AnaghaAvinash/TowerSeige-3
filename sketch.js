
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,ground1,ground2;
var pox1,pox2,pox3,pox4,pox5,pox6,pox7;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,
	box11,box12,box13,box14,box15,box16;
var gox1,gox2,gox3,gox4,gox5,gox6,gox7,gox8,gox9,gox10,gox11;
var pux1,pux2,grox,sling,poly;	
var score = 0,bg;


function setup() {

	createCanvas(900, 500);

    engine = Engine.create();
    world = engine.world;
    
    getTime();
    bg=color("black");
    
   

	ground  = new Ground(450,495,1000,15);
	ground1 = new Ground(370,400,250,10);
	ground2 = new Ground(700,250,200,10);

	box1 = new box(290,380);
	box2 = new box(310,380);
	box3 = new box(340,380);
	box4 = new box(370,380);
	box5 = new box(400,380);
	box6 = new box(430,380);
	box7 = new box(460,380);
	box8 = new box(480,380);
	
	box9  = new box(615,230);
	box10 = new box(645,230);
	box11 = new box(675,230);
	box12 = new box(705,230);
	box13 = new box(735,230);
	box14 = new box(755,230);
	box15 = new box(765,230);
	box16 = new box(770,230);

	pox1 = new box(310,330);
	pox2 = new box(340,330);
	pox3 = new box(370,330);
	pox4 = new box(390,330);
	pox5 = new box(410,330);
	pox6 = new box(40,330);
	pox7 = new box(702,110);

	gox1 = new box(350,300);
	gox2 = new box(375,300);
	gox3 = new box(395,300);
	gox4 = new box(375,260);

	gox5  = new box(645,190);
	gox6  = new box(675,190);
	gox7  = new box(695,190);
	gox8  = new box(715,190);
	gox9  = new box(745,190);
	gox10 = new box(775,190);
	
    pux1 = new box(360,260);
	pux2 = new box(380,260);

	grox1 = new box(370,220);

	grox2 = new box(710,150);
	grox3 = new box(695,150);

	poly = new Poly(300,200);
	sling = new Sling(poly.body,{x:150,y:200});
	

    Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(bg);

  ground.display();
  ground1.display();
  ground2.display();

  box1.display("#87CEEA");
  box2.display("#87CEEA");
  box3.display("#87CEEA");
  box4.display("#87CEEA");
  box5.display("#87CEEA");
  box6.display("#87CEEA");
  box7.display("#87CEEA");

  
  box10.display("#87CEEA");
  box11.display("#87CEEA");
  box12.display("#87CEEA");
  box13.display("#87CEEA");
  box14.display("#87CEEA");


  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  
  pox1.display("#FFC0CB");
  pox2.display("#FFC0CB");
  pox3.display("#FFC0CB");
  pox4.display("#FFC0CB");
  pox5.display("#FFC0CB");
 

  pox1.score();
  pox2.score();
  pox3.score();
  pox4.score();
  pox5.score();
  pox6.score();
  pox7.score();

  gox1.display("#3FE0D0");
  gox2.display("#3FE0D0");
  gox3.display("#3FE0D0");
  gox4.display(150);

 
  gox6.display("#3FE0D0");
  gox7.display("#3FE0D0");
  gox8.display("#3FE0D0");
 // gox9.display("#3FE0D0");

  gox1.score();
  gox2.score();
  gox4.score();
  gox5.score();
  gox6.score();
  gox7.score();
  gox8.score();
  gox9.score();
 
  poly.display();
  poly.score();

  grox3.display("#FFC0CB");

  sling.display("#87CEEA");

  fill("yellow");
  noStroke();
  textSize(20);
  text("Drag the Hexagonal Stone and Release it to launch towards the blocks , press SPACE to replay",30,30);
  text("SCORE:"+score,30,70);

 
  
  
  drawSprites();


}
function mouseDragged(){
    Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode = 32){
    sling.attach(this.poly);
    }
    
}

async function getTime(){
    var time=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var data=await time.json();
    console.log(data);
    var hour=data.datetime.slice(11,13);
    if(hour>=6&&hour<=18)
    {
      bg=color(200);
      
    }
    else{
       bg=color("black");
       
    }
}

