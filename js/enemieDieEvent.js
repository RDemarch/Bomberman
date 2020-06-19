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
