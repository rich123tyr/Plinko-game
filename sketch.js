const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var division = [];    

var ground,division1,division2,division3,division4,division5,division6,division7;

var divisionHeight = 300;

var score = 0;

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('I Am a Rider_320(PaglaSongs).mp3');
}
function setup() {
  let cnv = createCanvas(450, 800);
  cnv.mousePressed(canvasPressed);
  background(220);
  text('tap here to play', 10, 20);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,785,480,30);


  
  Engine.run(engine);
}



function draw() {
  background(0); 
  
  Engine.update(engine);

  ground.display();


  drawSprites();
}

function mousePressed(){
  if(song.isPlaying){
    song.stop();
    background(200);
  } else{
    song.play();
    background(100);
  }
}

function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  mySound.play();
}