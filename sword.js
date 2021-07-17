class Sword{
    constructor(x,y,width,height){
        this.sword = createSprite(x,y,width,height);
        this.sword.addImage("planei",swordi);
        this.sword.scale = 0.3;
         
           
    }

    move(){
        if(keyDown(UP_ARROW)){
            this.sword.y-=10;
            this.y=this.sword.y;

        }

        if(keyDown(DOWN_ARROW)){
            this.sword.y+=10;
            this.y=this.sword.y;

        }

    }

}