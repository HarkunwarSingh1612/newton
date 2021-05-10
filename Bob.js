class Bob{
    constructor(x, y, RADIUS) {
        var options = {
            isStatic:false,
            'friction':0,
            'density':1,
            restitution:1
        }
        this.x=x;
        this.y=y;
        this.radius=RADIUS;
        this.body = Bodies.circle(this.x, this.y, this.radius/2,  options);
           
        
        
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        //var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
       // rotate(angle);
        ellipseMode(CENTER);
        stroke("black");
        strokeWeight(1);
        fill("pink");
        ellipse(0, 0, this.radius, this.radius);
        pop();
      }
    };
