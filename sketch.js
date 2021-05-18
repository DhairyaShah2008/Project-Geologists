const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
    
function setup(){
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    
    hammer=new Hammer(600,300)

    rubber=new Rubber(1100,50,100)
    
    

    plane=new Plane(600,490,1200,10)

    stone1=new stone(200,100)
    stone2=new stone(230,100)
    stone3=new stone(260,100)
    stone4=new stone(290,100)
    stone5=new stone(320,100)
    stone6=new stone(350,100)
    stone7=new stone(380,100)
    stone8=new stone(410,100)
    stone9=new stone(440,100)
   stone10=new stone(460,100)

    iron1=new iron(800,300)
    
}

function draw(){
    background("pink");
    Engine.update(engine);

    

stone1.display()
stone2.display()
stone3.display()
stone4.display()
stone5.display()
stone6.display()
stone7.display()
stone8.display()
stone9.display()
stone10.display()

hammer.display()

rubber.display()

plane.display()

iron1.display()

}