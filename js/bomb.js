class Bomb extends Entity {
  constructor(x, y, thrower, explCallback, power, piercing){
    super(x, y)
    this.getElement().classList.add("bombe");
    this.exploded = false;
    this.thrower = thrower;
    this.power = power;
    this.piercing = piercing;
    this.explCallback = explCallback;
    var that = this;
    setTimeout(function(){that.explode();}, 3000);
  }
  explode = function(){
    if (this.exploded) return;
    this.exploded = true;
    new Fire(this.getX(), this.getY(), this.thrower);
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
    walls[this.getX()][this.getY()] = null;
    this.explCallback();
  }
  explodeCheck = function(nx, ny)
  {
      if (nx < 0) return true;
      if (ny < 0) return true;
      if (nx > size) return true;
      if (ny > size) return true;
      let found = false;
      if (walls[nx][ny] instanceof Bomb) walls[nx][ny].explode();
      if (walls[nx][ny] instanceof Fire) {
        walls[nx][ny].remove();
        walls[nx][ny] = null;
        walls[nx][ny] = new Fire(nx, ny, this.thrower);
      }
      if (walls[nx][ny] instanceof Wall) {
          if(walls[nx][ny].isBreakable())
            {
              found = !this.piercing;
              let event = new WallBreakEvent(walls[nx][ny], this);
              document.dispatchEvent(event);
              if(event.defaultPrevented) return true;
              if (Math.floor(Math.random() * 100) >= 60) {
                powerupList.push(new PowerUp(walls[nx][ny].getX(), walls[nx][ny].getY(), randomPowerUp()));
              }
              walls[nx][ny].remove();
              walls[nx][ny] = null;
          }
          else {
             return true;
           }
        }
      walls[nx][ny] = new Fire(nx, ny, this.thrower);
      return found;
  }
  getThrower(){
    return this.thrower;
  }
}
