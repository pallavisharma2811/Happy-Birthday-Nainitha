//class is blueprint
//until object is created there's no use of blueprint

// class Name{}
class Balloon{
    constructor(x, y, r, image){
        //initialize properties
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = image;
        var options = {isStatic: false}
        this.body = Matter.Bodies.circle(x, y, r, options);//soul
        World.add(world, this.body)
    }

    showBalloon(){
        // image, x, y, w, h
        image (this.image, this.body.position.x, this.body.position.y, this.r+25, this.r+50 ) //appearance
    }

}