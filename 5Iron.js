  class iron {
    constructor(x,y) {
      var options = {
          restitution:0.8,
          friction:3,
          density:30
      }
      this.body = Bodies.rectangle(x,y,200,15,options);
      this.width = 200;
      this.height =25;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      strokeWeight(2)
      stroke("white")
      fill("black");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };