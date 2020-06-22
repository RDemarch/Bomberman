const size = 18;
const box = document.getElementById("box");
let player = new Player(0, 0);
let gameEnded = false;
let walls = [];
let enumpowerups = [];
let powerupList = [];
let score = 0;

piercingF = function() {
  player.piercing = true;
  setTimeout(function(){player.piercing = false}, 5000);
}

gameOver = function() {
  setTimeout(function(){
    if(gameEnded) return;
    gameEnded = true;
    player.die();
    console.log(score);
    new GameOver(score);
  }, 100);
}
victoryF = function() {
  setTimeout(function(){
    if(gameEnded) return;
    gameEnded = true;
    score += 500;
    console.log(score);
    new Victory(score);
  }, 100);
}


for (let wx = 0; wx <= size; wx++) {
  walls.push([]);
  for (let wy = 0; wy <= size; wy++) {
    walls[wx].push(null);
    if (wx % 2 == 1 && wy % 2 == 1) {
      walls[wx][wy] = new Wall(wx, wy, false);
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

  if (walls[rx][ry] != null) continue;

  walls[rx][ry] = new Wall(rx, ry);

  compteur++

}

let enemies = [];
let count = 0;
while(count < 5)
{
	let rex = Math.round(Math.random() * (size - 5)) + 5;
	let rey = Math.round(Math.random() * (size - 5)) + 5;

 if (walls[rex][rey] != null) continue;

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

enumpowerups.push(new EnumPowerUp("bombUp", function (player) {
    if (player.maxBomb < 5) {
      player.maxBomb++;
      numBomb = player.maxBomb;
      document.getElementById("bombs").innerText = numBomb;
    }
}));

enumpowerups.push(new EnumPowerUp("powerUp", function (player) {
    if (player.power <= (size / 3)) {
      player.power++;
      numPower = player.power;
      document.getElementById("power").innerText = numPower;
  }
}));

enumpowerups.push(new EnumPowerUp("piercingBomb", function(player){piercingF()}
));
