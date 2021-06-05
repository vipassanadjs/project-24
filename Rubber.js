class Rubber {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1
      }
      this.body = Bodies.circle(x, y, 30 , options);
      this.width = 30 ;
      this.height = 30 ;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("green")
      fill("lightGreen");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };
  