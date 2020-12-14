class platform{
    constructor(x, y, width){
        var options = {
            'isStatic':true,
            'restitution':0
        }
        this.x= x;
        this.y = y;
        this.width = width;
        this.height = 10;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        World.add(world, this.body);
    }
    dispay(){
        rectMode(CENTER);
        fill("brown");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}