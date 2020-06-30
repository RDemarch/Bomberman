class Player extends Entity {
  constructor(x, y){
    super(x, y);
    this.getElement().classList.add("token");
    this.getElement().classList.add("bottomStill");
    this.classList = this.getElement().className.split(' ');
    let that = this;
    this.time = Date.now();
    document.onkeydown = function(event){
      that.keyDown(event);
    };
    this.maxBomb = 1, this.placedBomb = 0, this.power = 1, this.piercing = false, this.vulnerable = true;
  }
  dropBomb = function(){
    if(this.dead) return;
    if (this.maxBomb <= this.placedBomb) return;
    if (walls[this.getX()][this.getY()] != null) return;
    var that = this;
    walls[this.getX()][this.getY()] = new Bomb(this.getX(), this.getY(), this, function(){that.placedBomb--;}, this.power, this.piercing);
    this.placedBomb++;
  }
  keyDown = function(event) {
    if(this.dead) return;
    let that = this;
    let nx = this.getX();
    let ny = this.getY();

    var event = event || window.event,
    keyCode = event.keyCode;
    let instant = Date.now();
    let classList = this.getElement().className.split(' ');
    // On détecte l'événement puis selon la fleche, on ajoute le nombres de pixels désiré (ici 3) aux valeurs globales de position, x et y.
    if (instant >= this.time + 50) {
    switch (keyCode) {
      case 90:
      ny = ny - 1;
      if (classList[1] != "up2") {
        this.getElement().classList.replace(classList[1], "up2");
      }
      else {
        this.getElement().classList.replace(classList[1], "up");
      }
      break;

      case 83:
      ny = ny + 1;
      if (classList[1] != "bottom2") {
        this.getElement().classList.replace(classList[1], "bottom2");
      }
      else {
        this.getElement().classList.replace(classList[1], "bottom");
      }
      break;

      case 81:
      nx = nx - 1;
      if (classList[1] != "left2") {
        this.getElement().classList.replace(classList[1], "left2");
      }
      else {
        this.getElement().classList.replace(classList[1], "left");
      }
      break;

      case 68:
      nx = nx + 1;
      if (classList[1] != "right2") {
        this.getElement().classList.replace(classList[1], "right2");
      }
      else {
        this.getElement().classList.replace(classList[1], "right");
      }
      break;

      case 32:
      that.dropBomb();

      default:
      return;
    }
    this.time = Date.now();
  }
    // On vérifie si les valeurs sont supérieures à 0 et inférieures à 18
    // Si elles sont inférieures à 0
    if (nx < 0) return;
    if (ny < 0) return;
    // Si elles sont supérieures à 18
    if (nx > size) return;
    if (ny > size) return;

    if (walls[nx][ny] != null) {
      if (!(walls[nx][ny] instanceof Fire)) return;
      else if (walls[nx][ny] instanceof Fire) {
        if (player.vulnerable) gameOver();
      }
    }

    for (var i = 0; i < enemies.length; i++) {
      if (this.vulnerable) {
        if (nx == enemies[i].getX() && ny == enemies[i].getY())
        {
          gameOver();
          return;
        }
      }
    }
    for (var i = 0; i < powerupList.length; i++) {
      if (nx == powerupList[i].getX() && ny == powerupList[i].getY())
      {
        powerupList[i].walkOn(this);
        powerupList[i].remove();
        powerupList.splice(i, 1);
      }
    }
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
