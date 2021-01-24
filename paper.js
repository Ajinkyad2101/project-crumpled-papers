class Paper{

constructor(x,y,radius){

  var  option={

    
    restitution:0.8,
    friction:0.1,
    density:0.4,


    }


    this.body= Bodies.circle(x,y,radius,option)
    this.body.radius=radius
    World.add(world, this.body);

}

display(){

    push()
    rotate(this.body.angle)
    translate(this.body.position.x,this.body.position.y)

    ellipse(0,0,40)
pop()

}

}