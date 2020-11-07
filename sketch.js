var car, wall;
var speed, weight;

function setup() {
  createCanvas(1000,400);

  car = createSprite(50,200,50,50);
  wall = createSprite(900,200,60,height/2)
  wall.shapeColor = ("brown");

  speed = random(55,90);
  weight = random(400,1500);

  car.velocityX = speed;
}

function draw() {
  background(33,47,60);

  if(abs(car.x-wall.x) <= (car.width/2 + wall.width/2)){
    car.velocityX = 0;
    var deformation = (0.5*weight*speed*speed)/22500;
     if(deformation < 100){
       car.shapeColor = ("yellow");
     }
     if(deformation > 100 && deformation < 180){
       car.shapeColor = ("green");
     }
     if(deformation > 180){
       car.shapeColor = ("blue");
     }
  }
  stroke(50,229,229);
  fill(50,229,229);
  textSize(30);
  text("Press ctrl+r to get different colours",500,350);
  drawSprites();


}