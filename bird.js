class Bird {
    constructor(){
var b1 = {
    restitution: 0.5,
    friction: 1,
    density: 1.5
}
this.body = Bodies.rectangle(200,200,70,70,b1);
World.add(world,this.body)
    }
    display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("red");
        rect(0, 0, 70,70);
        pop();    
    }
}