class Plinko{
    constructor(x,y){
        var options = {
            isStatic:true,
        }
        this.body = Bodies.circle(x,y,10,options);
        this.radius = 25;
        World.add(world,this.body);
    }
    display(){
        push();
        var pos = this.body.position;
        translate(pos.x,pos.y);
        fill("white");
        circle(0,0,this.radius);
        pop();
    }
}