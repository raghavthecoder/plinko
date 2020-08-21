class Plinko{
    constructor(x,y,radius){
        var options={
          isStatic:true
        }
        this.body=Bodies.rectangle(x,y,radius,options);
        this.radius=radius;
        this.color=(255);
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        ellipseMode(RADIUS);
        fill ("white");
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}