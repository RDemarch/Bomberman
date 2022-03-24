class Victory extends Entity {
  constructor(score, timeDb) {
    super(0, 0);
    this.score = score;
    this.timeDb = timeDb;
    this.getElement().classList.add("victory");
    this.getElement().innerHTML = "<h1>Victory !!</h1><p>Score: <span id=\"score\">" + this.score + "</span></p><form action=\"/bomberman/Bomberman/post.php\" method=\"post\"><input type=\"hidden\" name=\"score\" value=\"" + this.score + "\"><input type=\"hidden\" name=\"timeDb\" value=\"" + this.timeDb + "\"><input type=\"text\" name=\"pseudo\" value=\"\"><input type=\"submit\" name=\"submit_btn\" value=\"Send Score\"></form><button type=\"button\" onclick=\"document.location.reload(true);\">Retry ?</button>";
  }
}
