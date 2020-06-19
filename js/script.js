const size = 18;
const box = document.getElementById("box");
var player = new Player(0, 0);
var gameover = false;
var victory = false;
var walls = [];


gameOver = function(){
  if(gameover) return;
  gameover = true;
  victory = true;
  player.die();
  new GameOver();
}

victoryF = function(){
  if(victory) return;
  victory = true;
  new Victory();
}

for (var wx = 1; wx < size; wx++) {
  for (var wy = 1; wy < size; wy++) {
    if (wx % 2 == 1 && wy % 2 == 1) {
      walls.push(new Wall(wx, wy, false));
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
    else if (rx == 1 && ry == 0)  r = 0;
    else if (rx == 0 && ry == 1)  r = 0;
    else if (rx == size && ry == 0)  r = 0;
    else if (rx == (size - 1) && ry == 0)  r = 0;
    else if (rx == size && ry == 1)  r = 0;
    else if (rx == 0 && ry == size )  r = 0;
    else if (rx == 1 && ry == size )  r = 0;
    else if (rx == 0 && ry == (size - 1) )  r = 0;
    else if (rx == size && ry == size) r = 0;
    else if (rx == (size - 1) && ry == size) r = 0;
    else if (rx == size && ry == (size - 1)) r = 0;

  var found = false;
  for (var i = 0; i < walls.length; i++) {
    if (rx == walls[i].getX() && ry == walls[i].getY()){
      found = true;
      break;
    }
  }
  if (found) continue;

  walls.push(new Wall(rx, ry));

  compteur++

}

var enemies = [];
var count = 0;
while(count < 5)
{
	var rex = Math.round(Math.random() * (size - 5)) + 5;
	var rey = Math.round(Math.random() * (size - 5)) + 5;

	var found = false;
	for (var o = 0; o < walls.length; o++){
	if (rex == walls[o].getX() && rey == walls[o].getY()){
			found = true;
			break;
		}
	}
	if(found) continue;

	found = false;
	for (var p = 0; p < enemies.length; p++){
	if (rex == enemies[p].getX() && rey == enemies[p].getY()){
		found = true;
		break;
		}
	}
	if(found) continue;

	enemies.push(new Enemy(rex, rey));
	count++;
}
