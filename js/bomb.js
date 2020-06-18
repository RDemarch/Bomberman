class Bomb extends Entity {
  constructor(x, y, explCallback, power = 1){
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
      if (nx % 2 == 1 && ny % 2 == 1) break;
      if (nx < 0) break;
      if (ny < 0) break;
      if (nx > size) break;
      if (ny > size) break;
      new Fire(nx, ny);

      var found = false;
      for (var o = 0; o < randomWalls.length; o++) {
        if (nx == randomWalls[o].getX() && ny == randomWalls[o].getY()){
          found = true;
          randomWalls[o].remove();
          randomWalls.splice(o, 1);
          break;
        }
      }
      if (found) break;
    }
    for (var i = 1; i <= this.power; i++) {
      var nx = this.getX() + i;
      var ny = this.getY();
      if (nx % 2 == 1 && ny % 2 == 1) break;
      if (nx < 0) break;
      if (ny < 0) break;
      if (nx > size) break;
      if (ny > size) break;
      new Fire(nx, ny);
      var found = false;

      for (var o = 0; o < randomWalls.length; o++) {
        if (nx == randomWalls[o].getX() && ny == randomWalls[o].getY()){
          found = true;
          randomWalls[o].remove();
          randomWalls.splice(o, 1);
          break;
        }
      }
      if (found) break;
    }
    for (var i = 1; i <= this.power; i++) {
      var nx = this.getX();
      var ny = this.getY() - i;
      if (nx % 2 == 1 && ny % 2 == 1) break;
      if (nx < 0) break;
      if (ny < 0) break;
      if (nx > size) break;
      if (ny > size) break;
      new Fire(nx, ny);
      var found = false;

      for (var o = 0; o < randomWalls.length; o++) {
        if (nx == randomWalls[o].getX() && ny == randomWalls[o].getY()){
          found = true;
          randomWalls[o].remove();
          randomWalls.splice(o, 1);
          break;
        }
      }
      if (found) break;


    }
    for (var i = 1; i <= this.power; i++) {
      var nx = this.getX();
      var ny = this.getY() + i;
      if (nx % 2 == 1 && ny % 2 == 1) break;
      if (nx < 0) break;
      if (ny < 0) break;
      if (nx > size) break;
      if (ny > size) break;
      new Fire(nx, ny);
      var found = false;

      for (var o = 0; o < randomWalls.length; o++) {
        if (nx == randomWalls[o].getX() && ny == randomWalls[o].getY()){
          found = true;
          randomWalls[o].remove();
          randomWalls.splice(o, 1);
          break;
        }
      }
      if (found) break;

    }
    this.remove();
    this.explCallback();
  }
}
