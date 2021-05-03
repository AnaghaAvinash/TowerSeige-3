class Poly {  
    constructor(x, y){
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            'isStatic' : false
        }
        
        this.body = Bodies.circle(x,y,23,options);
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
        
       
        
   }
   display(){
    push();
    var pos = this.body.position;
    translate(pos.x,pos.y);
    imageMode(CENTER);
    fill("white");
    image(this.image,0,0,130,80);
    pop();
   }
   score(){
    if(this.Visiblity<0 && this.Visiblity>-105){
      score++
    }
  }
};