class GameOver extends Entity {
  constructor(score) {
    super(0, 0);
    this.score = score;
    this.getElement().classList.add("gameOver");
    this.getElement().innerHTML = "<h1>Game Over</h1><button type=\"button\" onclick=\"document.location.reload(true);\">Retry ?</button><p>Score: <span id=\"score\">" + this.score + "</span></p>";
  }
}
