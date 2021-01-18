class Paper{
    constructor(){
        var options ={
            
            'restitution' :0,
            'friction' :0,
            'density' :1.2
            
        }
        this.body = Bodies.circle(100,600,35,options);
        this.image = loadImage("paper.png");
        
        
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        fill("white");
        rotate(angle);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,40,40);
        
        
    }
}
