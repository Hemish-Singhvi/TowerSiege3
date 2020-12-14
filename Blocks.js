class block {
    constructor(x, y){
        var options = {
            'restitution':0.8,
			'density':0.01
        }
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 40;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        this.Visiblity = 255;
		World.add(world, this.body);
		colors = ["green", "red", "blue", "purple", "orange"];
		color = random(colors);
    }
    scoring(){
        if (this.Visiblity < 0 && this.Visiblity > -105){
            score = score++;
        }
        fill(200);
        textSize(40);
        text("Score = "+score, 750, 40)
    }
    display(){        
        rectMode(CENTER);
        if(this.body.speed > 2.5){
            push();
            World.remove(world,this.body);
            this.Visibility=this.Visibility-5;
            tint(255,this.Visibility);
            var pos=this.body.position;
            
            pop();  
            
        }
        else{
            var pos =this.body.position;
            fill(color);
            rect(pos.x, pos.y, this.width, this.height);
        }
    }
}