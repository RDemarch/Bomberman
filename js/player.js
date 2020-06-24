class Player extends Entity {
  constructor(x, y){
    super(x, y);
    this.getElement().id = "token";
    this.getElement().classList.add("still")
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
    // On détecte l'événement puis selon la fleche, on ajoute le nombres de pixels désiré (ici 3) aux valeurs globales de position, x et y.
    if (instant >= this.time + 50) {
    switch (keyCode) {
      case 90:
      ny = ny - 1;
      if (this.getElement().classList.contains("up")) {
        this.getElement().classList.replace("up", "up2")
      }
      else if (this.getElement().classList.contains("bottom")) {
        this.getElement().classList.replace("bottom", "up2")
      }
      else if (this.getElement().classList.contains("bottom2")) {
        this.getElement().classList.replace("bottom2", "up2")
      }
      else if (this.getElement().classList.contains("left")) {
        this.getElement().classList.replace("left", "up2")
      }
      else if (this.getElement().classList.contains("left2")) {
        this.getElement().classList.replace("left2", "up2")
      }
      else if (this.getElement().classList.contains("right")) {
        this.getElement().classList.replace("right", "up2")
      }
      else if (this.getElement().classList.contains("right2")) {
        this.getElement().classList.replace("right2", "up2")
      }
      else if (this.getElement().classList.contains("still")) {
        this.getElement().classList.replace("still", "up2")
      }
      else if(this.getElement().classList.contains("up2")) {
        this.getElement().classList.replace("up2", "up")
      }
      else {
        this.getElement().classList.add("up")
      }
      break;

      case 83:
      ny = ny + 1;
      if (this.getElement().classList.contains("up")) {
        this.getElement().classList.replace("up", "bottom2")
      }
      else if (this.getElement().classList.contains("bottom")) {
        this.getElement().classList.replace("bottom", "bottom2")
      }
      else if (this.getElement().classList.contains("bottom2")) {
        this.getElement().classList.replace("bottom2", "bottom")
      }
      else if (this.getElement().classList.contains("left")) {
        this.getElement().classList.replace("left", "bottom2")
      }
      else if (this.getElement().classList.contains("left2")) {
        this.getElement().classList.replace("left2", "bottom2")
      }
      else if (this.getElement().classList.contains("right")) {
        this.getElement().classList.replace("right", "bottom2")
      }
      else if (this.getElement().classList.contains("right2")) {
        this.getElement().classList.replace("right2", "bottom2")
      }
      else if (this.getElement().classList.contains("still")) {
        this.getElement().classList.replace("still", "bottom2")
      }
      else if(this.getElement().classList.contains("up2")) {
        this.getElement().classList.replace("up2", "bottom2")
      }
      else {
        this.getElement().classList.add("bottom")
      }
      break;

      case 81:
      nx = nx - 1;
      if (this.getElement().classList.contains("up")) {
        this.getElement().classList.replace("up", "left2")
      }
      else if (this.getElement().classList.contains("bottom")) {
        this.getElement().classList.replace("bottom", "left2")
      }
      else if (this.getElement().classList.contains("bottom2")) {
        this.getElement().classList.replace("bottom2", "left2")
      }
      else if (this.getElement().classList.contains("left")) {
        this.getElement().classList.replace("left", "left2")
      }
      else if (this.getElement().classList.contains("left2")) {
        this.getElement().classList.replace("left2", "left")
      }
      else if (this.getElement().classList.contains("right")) {
        this.getElement().classList.replace("right", "left2")
      }
      else if (this.getElement().classList.contains("right2")) {
        this.getElement().classList.replace("right2", "left2")
      }
      else if (this.getElement().classList.contains("still")) {
        this.getElement().classList.replace("still", "left2")
      }
      else if(this.getElement().classList.contains("up2")) {
        this.getElement().classList.replace("up2", "left2")
      }
      else {
        this.getElement().classList.add("left")
      }
      break;

      case 68:
      nx = nx + 1;
      if (this.getElement().classList.contains("up")) {
        this.getElement().classList.replace("up", "right2")
      }
      else if (this.getElement().classList.contains("bottom")) {
        this.getElement().classList.replace("bottom", "right2")
      }
      else if (this.getElement().classList.contains("bottom2")) {
        this.getElement().classList.replace("bottom2", "right2")
      }
      else if (this.getElement().classList.contains("left")) {
        this.getElement().classList.replace("left", "right2")
      }
      else if (this.getElement().classList.contains("left2")) {
        this.getElement().classList.replace("left2", "right2")
      }
      else if (this.getElement().classList.contains("right")) {
        this.getElement().classList.replace("right", "right2")
      }
      else if (this.getElement().classList.contains("right2")) {
        this.getElement().classList.replace("right2", "right")
      }
      else if (this.getElement().classList.contains("still")) {
        this.getElement().classList.replace("still", "right2")
      }
      else if(this.getElement().classList.contains("up2")) {
        this.getElement().classList.replace("up2", "right2")
      }
      else {
        this.getElement().classList.add("right")
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

    if (walls[nx][ny] != null) return;

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
