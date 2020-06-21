class Victory extends Entity {
  constructor() {
    super(0, 0);
    this.getElement().classList.add("victory");
    this.getElement().innerHTML = "<h1>Victory !!</h1><button type=\"button\" onclick=\"document.location.reload(true);\">Retry ?</button><p>Score: <span id=\"score\">0</span></p>";
    document.getElementById("score").innerText = this.score;
  }
}
