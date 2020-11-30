const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var division = [];    

var ground,division1,division2,division3,division4,division5,division6,division7;

var divisionHeight = 300;

var score = 0;

var plinko1,plinko2,plinko3,plinko4,plinko5,plinko6,plinko7,plinko8,plinko9,plinko10;
var plinko11,plinko12,plinko13,plinko14,plinko15,plinko16,plinko17,plinko18,plinko19;
var plinko20,plinko21,plinko22,plinko23,plinko24,plinko25,plinko26,plinko27,plinko28;
var plinko29,plinko30,plinko31,plinko32,plinko33,plinko34,plinko35,plinko36,plinko37;
var plinko38,plinko39,plinko40,plinko41,plinko42,plinko43,plinko44,plinko45;

function preload() {
  
}
function setup() {
canvas = createCanvas(450, 800);
 
  background(220);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,795,480,10);
  
  Engine.run(engine);

  for(var k = 0; k<=width; k = k + 80){
    division.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
  }

  for (var j=35; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for (var j=15; j<=width; j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  for (var j=35; j<=width; j=j+50){
    plinkos.push(new Plinko(j,275));
  }

  for (var j=15; j<=width; j=j+50){
    plinkos.push(new Plinko(j,375));
  }
}



function draw() {
  background(0); 
  
  Engine.update(engine);


  /*plinko1 = new Plinko(15,40,18);
  plinko2 = new Plinko(55,40,18);
  plinko3 = new Plinko(95,40,18);
  plinko4 = new Plinko(135,40,18);
  plinko5 = new Plinko(175,40,18);
  plinko6 = new Plinko(215,40,18);
  plinko7 = new Plinko(35,100,18);
  plinko8 = new Plinko(75,100,18);
  plinko9 = new Plinko(115,100,18);
  plinko10 = new Plinko(155,100,18);
  plinko11 = new Plinko(195,100,18);
  plinko12 = new Plinko(15,160,18);
  plinko13 = new Plinko(55,160,18);
  plinko14 = new Plinko(95,160,18);
  plinko15 = new Plinko(135,160,18);
  plinko16 = new Plinko(175,160,18);
  plinko17 = new Plinko(215,160,18);
  plinko18 = new Plinko(35,220,18);
  plinko19 = new Plinko(75,220,18);
  plinko20 = new Plinko(115,220,18);
  plinko21 = new Plinko(155,220,18);
  plinko22 = new Plinko(195,220,18);
  plinko23 = new Plinko(225,160,18);
  plinko24 = new Plinko(275,160,18);
  plinko25 = new Plinko(325,160,18);
  plinko26 = new Plinko(375,160,18);
  plinko27 = new Plinko(425,160,18);
  plinko28 = new Plinko(10,320,18);
  plinko29 = new Plinko(50,320,18);
  plinko30 = new Plinko(90,320,18);
  plinko31 = new Plinko(130,320,18);
  plinko32 = new Plinko(170,320,18);
  plinko33 = new Plinko(210,320,18);
  plinko34 = new Plinko(250,320,18);
  plinko35 = new Plinko(290,320,18);
  plinko36 = new Plinko(330,320,18);
  plinko37 = new Plinko(25,360,18);
  plinko38 = new Plinko(75,360,18);
  plinko39 = new Plinko(125,360,18);
  plinko40 = new Plinko(175,360,18);
  plinko41 = new Plinko(225,360,18);
  plinko42 = new Plinko(275,360,18);
  plinko43 = new Plinko(325,360,18);
  plinko44 = new Plinko(375,360,18);
  plinko45 = new Plinko(425,360,18);*/

 

  division1 = new Division(0,400,10,800);
  division2 = new Division(450,400,10,800);
  //division3 = new Division(152.5,655,5,230);
  //division4 = new Division(227.5,655,5,230);
  //division5 = new Division(302.5,655,5,230);
  //division6 = new Division(380,655,5,230);
  //division7 = new Division(447,370,5,800);

  ground.display();
 
  if(frameCount%30===0){
    particles.push(new Particle(random(width/2-100, width/2+100), 10,10));
  }

  for(var j=0; j<particles.length; j++){
    particles[j].display();
  }


  for(var k=0; k<division.length;k++){
    division[k].display();
  }

  division1.display();
  division2.display();

  for(var i=0; i<plinkos.length; i++){
    plinkos[i].display();
  }

  drawSprites();

}

