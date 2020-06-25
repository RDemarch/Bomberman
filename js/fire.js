class Fire extends Entity {
  constructor(x, y, thrower) {
    super(x, y);
    this.thrower = thrower;
    this.getElement().classList.add("feu");
    if (player.vulnerable) {
      if (this.getX() == player.getX() && this.getY() == player.getY()) {
        gameOver();
      }
    }
    for (var i = 0; i < enemies.length; i++)
      if (x == enemies[i].getX() && y == enemies[i].getY())
      {
        let event = new EnemiesDieEvent(enemies[i], this);
        document.dispatchEvent(event);
        if(event.defaultPrevented) continue;
        enemies[i].die();
        enemies.splice(i, 1);
        if (enemies.length == 0) {
          victoryF();
        }
      }

    var that = this;
    setTimeout(function(){that.remove();   walls[that.getX()][that.getY()] = null;}, 100);
  }
  getThrower(){
    return this.thrower;
  }
}
