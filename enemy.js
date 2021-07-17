class Enemy{
    constructor(x,y){
        this.enemy = createSprite(x,y,20,20);
        this.enemy.addImage("planer",enemyi);
        this.enemy.scale= 0.2;
        this.enemy.velocityX= -10;
        enemyGroup.add(this.enemy);
        this.enemy.lifetime=150;

      
        
    }
}