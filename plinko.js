class Plinko{
    constructor(x,y,radius){
        var optins = {
            isStatic:true,
        }
        this.body = Bodies.circle(x,y,radius,option)
        this.trajectory = [];
    }
    display(){
        var pos = [this.body.position.x,this.body.position.y];
        this.trajectory.push(pos);

        //for(var i)

    }
}