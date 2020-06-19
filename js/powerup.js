class PowerUp extends Entity {
  constructor(x, y, powerUp){
    super(x, y);
    this.getElement().classList.add(this.powerup.class);
    this.powerup = powerUp;
  }
  walkOn = function(player) {
    this.powerup.execute(player);

  }
}

class EnumPowerUp
{
  constructor(class, execute) {
    this.class = class;
    this.execute = execute;
  }
}
Object.defineProperty(PowerUp, 'BOMBUP', {
  value: new PowerUp("bombUb", function(player) {
    player.maxBomb++;
  }),
  writable: false,
});
