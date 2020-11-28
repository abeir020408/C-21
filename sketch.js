var gameObject1, gameObject2, gameObject3,gameObject4,movingRect;

function setup() {
  createCanvas(1200,800);
  gameObject1 = createSprite(200, 100, 50, 80);
  gameObject1.shapeColor = "green";
  gameObject1.debug = true;

  gameObject2=createSprite(300,100,50,80);
  gameObject2.shapeColor="green";
  gameObject2.debug=true;

  gameObject3=createSprite(400,100,50,80)
    gameObject3.shapeColor="green";
    gameObject3.debug=true;

    gameObject4=createSprite(500,100,50,80);
    gameObject4.shapeColor="green";
    gameObject4.debug=true;

movingRect  = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  
}

function draw() {
  background(0,0,0);  
movingRect.x=mouseX;
movingRect.y=mouseY;

if(isTouching(movingRect,gameObject1)){
  movingRect.shapeColor= "red";
  gameObject1.shapeColor= "red";
}
else{
  movingRect.shapeColor= "white";
  gameObject1.shapeColor="white";
}
 
if(isTouching(movingRect,gameObject2)){
  movingRect.shapeColor="purple";
  gameObject2.shapeColor="purple";
}

else{
  movingRect.shapeColor="white";
  gameObject2.shapeColor="white";
}

if(isTouching(movingRect,gameObject3)){
  movingRect.shapeColor="yellow";
  gameObject3.shapeColor="yellow";
}

else{
  movingRect.shapeColor="white";
  gameObject3.shapeColor="white";
}

if(isTouching(movingRect,gameObject4)){
  movingRect.shapeColor="pink";
  gameObject4.shapeColor="pink";
}

else{
  movingRect.shapeColor="white";
  gameObject4.shapeColor="white";
}






  drawSprites();
}

function isTouching(object1,object2) {
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object2.width/2 
  && object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object2.height/2){
  return true;
}
else {
  return false;
}
}