var size = 19;
var box = document.getElementsByClassName("box")[0]
for(var wx = 1; wx < size; wx++)
{
  for(var wy = 1; wy < size; wy++)
  {
    if(wx % 2 == 1 && wy % 2 == 1)
    {
        var newwall = document.createElement("div"), ws = newwall.style;

        newwall.classList.add("mur");
        ws.left = String(wx * 40)+'px';
        ws.top = String(wy * 40)+'px';


        box.appendChild(newwall);
    }
  }
}
var token = document.getElementById('token'),
    s = token.style; // Un petit raccourci
var x = 0;
var y = 0;


document.onkeydown = function(event){
    var nx = x, ny = y;
    var event = event || window.event,
        keyCode = event.keyCode;

    // On détecte l'événement puis selon la fleche, on ajoute le nombres de pixels désiré (ici 3) aux valeurs globales de position, x et y.
    switch(keyCode){
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
    }

   // On vérifie si les valeurs sont supérieures ou égales à 0 et inférieures et égal à 760
   if(nx % 2 == 1 && ny % 2 == 1)
    {
      return;
    }
    x = nx, y = ny;

    if (x < 0) x = 0; // Si elles sont inférieures à 0
    if (y < 0) y = 0;
    if (x > (size - 1)) x = (size - 1);// Si elles sont supérieures à 40
    if (y > (size - 1)) y = (size - 1);


    // Et enfin on applique les modifications :
    s.left = String(x * 40)+'px';
    s.top = String(y * 40)+'px';

}
