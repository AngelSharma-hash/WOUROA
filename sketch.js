var sword;
var swordi;
var enemy, enemyi;
var enemyGroup;

function preload(){
  swordi = loadImage("downloadahsa.jfif");
  enemyi = loadImage("87d61840d4366909b372a0065879f2b4.jpg");

}

function setup() {
  createCanvas(800,800);
  
  sword = createSprite(200,200,20,20);
  sword.addImage(swordi);
  sword.scale=0.3;

  enemyGroup = new Group;
  
}

function draw() {
  background(255,255,255); 
  
  spawnEnemy();

  if(keyDown(UP_ARROW)){
    sword.y-=10;

}

if(keyDown(DOWN_ARROW)){
    sword.y+=10;

}

if(enemyGroup.isTouching(sword)){
  enemyGroup[0].destroy();
}

  drawSprites();

}

function spawnEnemy(){
 
  if(frameCount%100===0){
    var enemy = createSprite(600,random(50,600),20,20);
    enemy.addImage(enemyi);
    enemy.scale=0.2;
    enemy.velocityX=-10;
    enemy.lifetime=70;

    enemyGroup.add(enemy);
   
  }
  
}

