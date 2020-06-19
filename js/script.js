const size = 18;
const box = document.getElementById("box");
let player = new Player(0, 0);
let gameover = false;
let victory = false;
let walls = [];
let score = 0;

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

for (let wx = 1; wx < size; wx++) {
  for (let wy = 1; wy < size; wy++) {
    if (wx % 2 == 1 && wy % 2 == 1) {
      walls.push(new Wall(wx, wy, false));
    }
  }
}

let border = document.getElementById('bottom');
let borderSize = size + 2;

for (let i = 0; i <= borderSize; i++) {
  let element = document.createElement("div");
  let style = element.style;
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
for (let i = 1; i < borderSize; i++) {
  let element = document.createElement("div");
  let style = element.style;
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


let compteur = 1;

while (compteur < 150) {
  let rx = Math.round(Math.random() * size);
  let ry = Math.round(Math.random() * size);

    if (rx == 0 && ry == 0) continue;
    else if (rx == 1 && ry == 0)  continue;
    else if (rx == 0 && ry == 1)  continue;
    else if (rx == size && ry == 0)  continue;
    else if (rx == (size - 1) && ry == 0)  continue;
    else if (rx == size && ry == 1)  continue;
    else if (rx == 0 && ry == size )  continue;
    else if (rx == 1 && ry == size )  continue;
    else if (rx == 0 && ry == (size - 1) )  continue;
    else if (rx == size && ry == size) continue;
    else if (rx == (size - 1) && ry == size) continue;
    else if (rx == size && ry == (size - 1)) continue;

  let found = false;
  for (let i = 0; i < walls.length; i++) {
    if (rx == walls[i].getX() && ry == walls[i].getY()){
      found = true;
      break;
    }
  }
  if (found) continue;

  walls.push(new Wall(rx, ry));

  compteur++

}

let enemies = [];
let count = 0;
while(count < 5)
{
	let rex = Math.round(Math.random() * (size - 5)) + 5;
	let rey = Math.round(Math.random() * (size - 5)) + 5;

	let found = false;
	for (let o = 0; o < walls.length; o++){
	if (rex == walls[o].getX() && rey == walls[o].getY()){
			found = true;
			break;
		}
	}
	if(found) continue;

	found = false;
	for (let p = 0; p < enemies.length; p++){
	if (rex == enemies[p].getX() && rey == enemies[p].getY()){
		found = true;
		break;
		}
	}
	if(found) continue;

	enemies.push(new Enemy(rex, rey));
	count++;
}
scoreAug = function(value) {
  if (player.dead) return;
  score += value
  document.getElementById("score").innerText = score;
}
document.addEventListener('wallBreak', function (e) {if(e.getCause().getThrower()) scoreAug(10); }, false);
document.addEventListener('enemyDie', function (e) {if(e.getCause().getThrower()) scoreAug(50); }, false);
