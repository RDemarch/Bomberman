class PowerUp extends Entity {
    constructor(x, y, powerUp) {
        super(x, y);
        this.powerup = powerUp;
        this.getElement().classList.add(this.powerup.getClass());
    };
    walkOn = function (player) {
        this.powerup.execute(player);
    }
}
class EnumPowerUp {
    constructor(cssclass, execute) {
        this.cssclass = cssclass;
        this.exec = execute;

    };
    getClass = function () {
        return this.cssclass;
    }
    execute = function (player) {
        this.exec(player);
    }
}
