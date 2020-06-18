var size = 18;
var box = document.getElementById("box");
var randomWalls = [];

class Entity {
  constructor(x, y) {
    this.element = document.createElement("div");
    this.style = this.element.style;
    box.appendChild(this.element);
    this.setX(x);
    this.setY(y);
  }
  getX = function(){
    return this.x;
  }
  getY = function(){
    return this.y;
  }
  getElement = function(){
    return this.element;
  }
  setX = function(x){
    this.x = x;
    this.style.left = String(x * 40) + 'px';
  }
  setY = function(y){
    this.y = y;
    this.style.top = String(y * 40) + 'px';
  }
  remove = function(){
    this.element.remove();
  }
}

class Wall extends Entity {
  constructor(x, y, breakable = true) {
    super(x, y);
    this.breakable = breakable;
    this.getElement().classList.add(breakable ? "murCassable" : "mur");
  }
  isBreakable = function(){
    return this.breakable;
  }

}
class Bomb extends Entity {
  constructor(x, y, explCallback, power = 1){
    super(x, y)
    this.getElement().classList.add("bombe");
    this.power = power;
    this.explCallback = explCallback;
    setTimeout(this.explode, 3000);
  }
  explode = function(){
    this.remove();
    this.explCallback();
  }
}

class Player extends Entity {
  constructor(x, y){
    super(x, y);
    this.getElement().id = "token";
    document.onkeydown = function(event){
      player.keyDown(event);
    };
    this.maxBomb = 1, this.placedBomb = 0;

  }
  dropBomb = function(x, y){
    if (this.maxBomb == this.placedBomb) return;
      new Bomb(x, y, function(){this.placedBomb--;});
      this.placedBomb++;
  }
  keyDown = function(event) {
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
        player.dropBomb(nx, ny);
      default:
      return;
    }

    for (var i = 0; i < randomWalls.length; i++)
      if (nx == randomWalls[i].getX() && ny == randomWalls[i].getY()) return;


    if (nx % 2 == 1 && ny % 2 == 1) return;
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

}

var player = new Player(0, 0);

for (var wx = 1; wx < size; wx++) {
  for (var wy = 1; wy < size; wy++) {
    if (wx % 2 == 1 && wy % 2 == 1) {
      new Wall(wx, wy, false);
    }
  }
}

var border = document.getElementById('bottom');
var borderSize = size + 2;

for (var i = 0; i <= borderSize; i++) {
  var element = document.createElement("div");
  var style = element.style;
  style.left = String(i * 40) + 'px';
  element.classList.add('border');
  border.appendChild(element);

  element = document.createElement("div");
  style = element.style;
  style.left = String(i * 40) + 'px';
  style.top = String(borderSize * 40) + 'px';
  element.classList.add('border');
  border.appendChild(element);
}
for (var i = 1; i < borderSize; i++) {
  var element = document.createElement("div");
  var style = element.style;
  style.top = String(i * 40) + 'px';
  element.classList.add('border');
  border.appendChild(element);

  element = document.createElement("div");
  style = element.style;
  style.top = String(i * 40) + 'px';
  style.left = String(borderSize * 40) + 'px';
  element.classList.add('border');
  border.appendChild(element);
}


var compteur = 1;

while (compteur < 150) {
  var rx = Math.round(Math.random() * size);
  var ry = Math.round(Math.random() * size);

  if (rx == 0 && ry == 0) continue;
  if (rx == 1 && ry == 0) continue;
  if (rx == 0 && ry == 1) continue;
  if (rx == size && ry == 0) continue;
  if (rx == (size - 1) && ry == 0) continue;
  if (rx == size && ry == 1) continue;
  if (rx == 0 && ry == size ) continue;
  if (rx == 1 && ry == size ) continue;
  if (rx == 0 && ry == (size - 1) ) continue;
  if (rx == size && ry == size) continue;
  if (rx == (size - 1) && ry == size) continue;
  if (rx == size && ry == (size - 1)) continue;
  if (rx % 2 == 1 && ry % 2 == 1) continue;

  var found = false;

  for (var i = 0; i < randomWalls.length; i++) {
    if (rx == randomWalls[i].getX() && ry == randomWalls[i].getY()){
      found = true;
      break;
    }
  }
  if (found) continue;

  randomWalls.push(new Wall(rx, ry));

  compteur++

}
