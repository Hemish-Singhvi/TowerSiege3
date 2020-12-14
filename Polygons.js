class polygon {
    constructor(x, y){
        var options = {
            'restitution':0.8,
			'density':0.01
        }
        this.x = x;
        this.y = y;
        this.radius = 17;
        this.body = Bodies.circle(this.x, this.y, this.radius, options);
        World.add(world, this.body);
        this.image = loadImage("polygon.png");
    }
    dislay(){
		rectMode(CENTER);
		push();
        var pos =this.body.position;
        imageMode(CENTER);
		image(this.image, pos.x, pos.y, 50, 50);
		pop();
    }
}