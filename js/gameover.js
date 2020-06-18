class GameOver extends Entity {
  constructor() {
    super(0, 0);
    this.getElement().classList.add("gameOver");
    this.getElement().innerHTML = "<h1>Game Over</h1><button type=\"button\" onclick=\"document.location.reload(true);\">Retry ?</button>";
  }
}
