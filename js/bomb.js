class Bomb extends Entity {
  constructor(x, y, explCallback, power = 3){
    super(x, y)
    this.getElement().classList.add("bombe");
    this.power = power;
    this.explCallback = explCallback;
    var that = this;
    setTimeout(function(){that.explode();}, 3000);
  }
  explode = function(){
    new Fire(this.getX(), this.getY());
    for (var i = 1; i <= this.power; i++) {
      var nx = this.getX() - i;
      var ny = this.getY();
      if(this.explodeCheck(nx, ny)) break;
    }
    for (var i = 1; i <= this.power; i++) {
      var nx = this.getX() + i;
      var ny = this.getY();
      if(this.explodeCheck(nx, ny)) break;
    }
    for (var i = 1; i <= this.power; i++) {
      var nx = this.getX();
      var ny = this.getY() - i;
      if(this.explodeCheck(nx, ny)) break;
    }
    for (var i = 1; i <= this.power; i++) {
      var nx = this.getX();
      var ny = this.getY() + i;
      if(this.explodeCheck(nx, ny)) break;
    }
    this.remove();
    this.explCallback();
  }
  explodeCheck = function(nx, ny)
  {
      if (nx < 0) return true;
      if (ny < 0) return true;
      if (nx > size) return true;
      if (ny > size) return true;
      var found = false;
      for (var o = 0; o < walls.length; o++) {
        if (nx == walls[o].getX() && ny == walls[o].getY()){
          found = true;
          if(walls[o].isBreakable())
          {
              walls[o].remove();
              walls.splice(o, 1);
          }
          else {
             return true;
           }
        }
      }
      new Fire(nx, ny);
      if (found) return true;
      return false;
  }
}
