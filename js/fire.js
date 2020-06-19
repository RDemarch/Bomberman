class Fire extends Entity {
  constructor(x, y) {
    super(x, y);
    this.getElement().classList.add("feu");
    if (this.getX() == player.getX() && this.getY() == player.getY()) {
      gameOver();
    }
    for (var i = 0; i < enemies.length; i++)
      if (x == enemies[i].getX() && y == enemies[i].getY())
      {
        enemies[i].die();
        enemies.splice(i, 1);
        if (enemies.length == 0) {
          victoryF();
        }
      }

    var that = this;
    setTimeout(function(){that.remove();}, 100);
  }
}
