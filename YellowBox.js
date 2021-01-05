class YellowBox extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
    }
    display(){
      fill(242,217,3);
      super.display();
    }
  };