class Circle extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("hex.png");
    this.trajectory =[];
  }

}