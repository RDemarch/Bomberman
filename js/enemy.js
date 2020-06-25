class Enemy extends Entity
{
	constructor(x, y)
	{
		super(x, y);
		this.getElement().classList.add("enemies");
		this.launchMove();
		this.dead = false, this.move = true;
	}
	launchMove = function()
	{
		if(this.dead) return;
		var that = this;
		setTimeout(function() {that.randomMove();}, 1000);
	}
	randomMove = function()
	{
		if(this.dead) return;
		var fail = 0;
		while (fail < 10)
		{
			fail++;

			var nx = this.getX();
			var ny = this.getY();

			if (this.move) {
				switch (Math.floor(Math.random() * 4))
				{
					case 0:
					nx--;
					break;
					case 1:
					nx++;
					break;
					case 2:
					ny--;
					break;
					case 3:
					ny++;
					break;
					default:
					continue;
				}
			}
			if (nx < 0) continue;
			if (ny < 0) continue;

			if (nx > size) continue;
			if (ny > size) continue;
			if (walls[nx][ny] != null) {
	    	if (!(walls[nx][ny] instanceof Fire)) continue;
	    	else if (walls[nx][ny] instanceof Fire) {
					if (player.vulnerable) gameOver();
					else {
						continue;
					}
				}
	    }

			var found = false;
			for (var i = 0; i < enemies.length; i++)
				if (nx == enemies[i].getX() && ny == enemies[i].getY())
				{
					found = true;
					break;
				}
			if(found) continue;

				if (player.vulnerable) {
					if (nx == player.getX() && ny == player.getY()) {
						gameOver();
					}
				}

			this.setX(nx);
			this.setY(ny);
			break;
		}

		this.launchMove();
	}
	die = function()
	{
		this.remove();
		this.dead = true;
	}
}
