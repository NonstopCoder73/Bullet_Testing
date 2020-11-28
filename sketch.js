var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed = random(55, 90);
  weight = random(400, 1500);
 

  bullet = createSprite(7.5, 200, 35, 15);
  bullet.velocityX = speed;  

  thickness = random(22, 83);
 
  wall = createSprite(1500, 200, thickness, height/2);
 

  



}

function draw() {
  background("black");
  
if(Collider(bullet, wall)){
bullet.velocityX = 0;

var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);  

if(damage > 10){
wall.shapeColor = color(255, 0, 0);
}
if(damage<10){
  wall.shapeColor = color(0, 255, 0);
}

}

 
  drawSprites();
}
function Collider(bullet1, wall1) {
  bulletRightEdge = bullet1.x + bullet1.width;
  wallLeftEdge = wall1.x;

  if(bulletLeftEdge >= wallLeftEdge){
return true;
  }
return false;
}