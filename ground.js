class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic : true,
            //friction : 0.2
        }
    this.body = Bodies.rectangle(x,y,width,height+5,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(188,66,66);
        rect(pos.x, pos.y, this.width, this.height);
    }
};


