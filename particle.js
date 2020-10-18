class Particle{
    constructor(x,y,radius){
        var options={
            isStatic : false,
            restitution : 0.5,
            friction : 0.5,
            density : 1.0
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.color = color( random(0,255), random(0,255), random(0,255));
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        circle(0,0,this.radius);
        pop();
    }
}