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
