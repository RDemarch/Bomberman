var token = document.getElementById('token'),
    s = token.style, // Un petit raccourci
    i = token.offsetLeft, // On récupère la position absolue initiale.
    j = token.offsetTop;
document.onkeydown = function(event){
    var event = event || window.event,
        keyCode = event.keyCode;

    // On détecte l'événement puis selon la fleche, on ajoute le nombres de pixels désiré (ici 3) aux valeurs globales de position, i et j.
    switch(keyCode){
    case 90:
        j = j - 10;
        break;

    case 65:
        j = j - 10;
        i = i - 10;
        break;

    case 69:
        j = j - 10;
        i = i + 10;
        break;
    case 67:
        j = j + 10;
        i = i + 10;
        break;
    case 87:
        j = j + 10;
        i = i - 10;
        break;

    case 83:
        j = j + 10;
        break;

    case 81:
        i = i - 10;
        break;

    case 68:
        i = i + 10;
        break;
    }

   // On vérifie si les valeurs sont supérieures ou égales à 0 et inférieures et égal à 760


    if (i < 0) i = 0; // Si elles sont inférieures à 0
    if (j < 0) j = 0;
    if (i > 760) i = 760;// Si elles sont supérieures à 760
    if (j > 760) j = 760;


    // Et enfin on applique les modifications :
    s.left = String(i)+'px';
    s.top = String(j)+'px';

}
