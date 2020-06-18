class Fire extends Entity {
  constructor(x, y) {
    super(x, y);
    this.getElement().classList.add("feu");
    if (this.getX() == player.getX() && this.getY() == player.getY()) {
      player.remove();
      new GameOver();
    }

    var that = this;
    setTimeout(function(){that.remove();}, 100);
  }
}
