class Player extends Entity {
  constructor(x, y){
    super(x, y);
    this.getElement().id = "token";
    var that = this;
    document.onkeydown = function(event){
      that.keyDown(event);
    };
    this.maxBomb = 5, this.placedBomb = 0;

  }
  dropBomb = function(){
    if(this.dead) return;
    if (this.maxBomb <= this.placedBomb) return;
    var that = this;
    new Bomb(this.getX(), this.getY(), function(){that.placedBomb--;});
    this.placedBomb++;
  }
  keyDown = function(event) {
    if(this.dead) return;
    var that = this;
    var nx = this.getX();
    var ny = this.getY();

    var event = event || window.event,
    keyCode = event.keyCode;

    // On détecte l'événement puis selon la fleche, on ajoute le nombres de pixels désiré (ici 3) aux valeurs globales de position, x et y.
    switch (keyCode) {
      case 90:
      ny = ny - 1;
      break;

      case 83:
      ny = ny + 1;
      break;

      case 81:
      nx = nx - 1;
      break;

      case 68:
      nx = nx + 1;
      break;

      case 32:
      that.dropBomb();

      default:
      return;
    }

    for (var i = 0; i < walls.length; i++)
    if (nx == walls[i].getX() && ny == walls[i].getY()) return;

    for (var i = 0; i < enemies.length; i++)
      if (nx == enemies[i].getX() && ny == enemies[i].getY())
      {
        gameOver();
        return;
      }
    // On vérifie si les valeurs sont supérieures à 0 et inférieures à 18
    // Si elles sont inférieures à 0
    if (nx < 0) nx = 0;
    if (ny < 0) ny = 0;
    // Si elles sont supérieures à 18
    if (nx > size) nx = size;
    if (ny > size) ny = size;
    // Et enfin on applique les modifications :
    player.setX(nx);
    player.setY(ny);


  }
  die = function()
	{
		this.remove();
		this.dead = true;
	}

}
