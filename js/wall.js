class Wall extends Entity {
  constructor(x, y, breakable = true) {
    super(x, y);
    this.breakable = breakable;
    this.getElement().classList.add(breakable ? "murCassable" : "mur");
  }
  isBreakable = function(){
    return this.breakable;
  }

}
