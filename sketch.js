const bodies=Matter.Bodies;
const World=Matter.World;
const Engine=Matter.Engine;

var engine,world;

var particles=[]
var plinkos=[]
var divisions=[]

var divisionHeight=300;

function setup() {
  createCanvas(480,800);

 engine=Engine.create();
 world=engine.world

 for(var k=0;k<=width;k=k+80){
   divisions.push(new Divisions(k,height-divisionHeight,10,divisionHeight))
 }
 for(var j=40;j<width;j=j+50){
   plinkos.push(new Plinko(j,75,10))
 }
 for(var j=15;j<width-10;j=j+50){
    plinkos.push(new Plinko(j,175,10))
 }

  createSprite(400, 200, 50, 50);
}

function draw() {
  background("pink");
  Engine.update(engine);
  
  for(var j=0;j<plinkos.length;j++){
     plinkos[j].display()
  }
  for(var k=0;k<divisions.length;k++){
    divisions[k].display()
 }

if(frameCount%60===0){
  particles.push(new Particles(random(width/2-10,widt/2+10),10,10))
}

for(var i=0;i<particles.length;i++){
  particles[i].display()
}

  drawSprites();
}