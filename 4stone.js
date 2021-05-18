  class stone {
    constructor(x,y) {
      var options = {
          restitution:0.8,
          friction:0.9,
          density:12
      }
      this.body = Bodies.rectangle(x,y,50,50,options);
      this.width = 10;
      this.height = 10;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      strokeWeight(2)
      stroke("white")
      fill("black");
      ellipse(pos.x, pos.y, this.width, this.height);
    }
  };