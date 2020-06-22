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
class PowerUpPickUp extends Event {
  constructor(powerUp, cause) {
    super("powerUp", {"cancelable": true});
    var that = this;
    this.cause = cause;
    this.powerUp = powerUp;
  }
  getWall(){
    return this.powerUp;
  }
  getCause(){
    return this.cause;
  }
}
class EnemiesDieEvent extends Event {
  constructor(enemy, cause) {
    super("enemyDie", {"cancelable": true});
    var that = this;
    this.cause = cause;
    this.enemy = enemy;
  }
  getEnemy(){
    return this.enemy;
  }
  getCause(){
    return this.cause;
  }
}
