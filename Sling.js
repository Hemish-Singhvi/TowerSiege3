class Slings{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.014,
            length: 10
        }
        this.pointB = pointB
        this.Slings = Constraint.create(options);
        World.add(world, this.Slings);
    }
    attach(body){
        this.Slings.bodyA = body;
    }
    
    fly(){
        this.Slings.bodyA = null;
    }

    display(){
        if(this.Slings.bodyA){
            var pointA = this.Slings.bodyA.position;
            var pointb = this.pointB;
            push();
            strokeWeight(5);
            stroke("lightBlue");
            line(pointA.x, pointA.y, pointb.x, pointb.y);         
            pop();
        }
    }  
}