class box {
    constructor(x, y) {
      var options = {
          'restitution':0.5,
          'friction':1
      }

      this.body = Bodies.rectangle(x, y, 30,40, options);
      this.width = 30;
      this.height = 40;
      this.Visiblity = 255;
      World.add(world, this.body);
    }
   
  
display(colour){
  if(this.body.speed < 5){
  var pos =this.body.position;
  push();
  translate(pos.x ,pos.y)
  rotate(this.body.angle)
  rectMode (CENTER);
  strokeWeight(1.5);
  stroke(0);
  fill(colour);
  rect(0,0 ,this.width , this.height)
  pop();
}
else{
  World.remove(world, this.body);
  push();
  //tint(255,this.Visiblity);
  this.Visiblity = this.Visiblity - 5;
  pop() ;
}
 }  
 score(){
  if(this.Visiblity<0 && this.Visiblity>-105){
    score++
   }
 }

};

