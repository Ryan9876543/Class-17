class  Box {
  constructor (x,y,w,h,vx,vy) {
    this.x = x;
    this.y = y;
    this.w = w
    this.h = h
    this.vx = vx
    this.vy = vy
  }

  show () {
    rect (this.x,this.y,this.w,this.h)
  }

  setSpeedY(){
    this.y = this.y - this.vy
  }

  setSpeedX() {
    this.x = this.x + this.vx
  }
}

var box1;
var box2;

function setup() {
  createCanvas(600, 400);
  box1 = new Box (100,200,20,20,2,2)
  box2 = new Box (250,100,30,10,4,4)
  
}

function draw() {
  background(220);
  box1.show()
  box1.setSpeedX()
  box1.setSpeedY()
  box2.show()
  box2.setSpeedX()
  box2.setSpeedY()

}

