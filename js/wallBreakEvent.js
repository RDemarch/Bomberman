class WallBreakEvent extends Event {
  constructor(wall, cause) {
    super("wallBreak", {"cancelable": true});
    var that = this;
    this.cause = cause;
    this.wall = wall;
  }
  getWall(){
    return this.wall;
  }
  getCause(){
    return this.cause;
  }
}
