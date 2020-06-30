class Enemy extends Entity
{
	constructor(x, y)
	{
		super(x, y);
		this.getElement().classList.add("enemies");
		this.getElement().classList.add("bottomStill");
		this.classList = this.getElement().className.split(' ');
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
			let classList = this.getElement().className.split(' ');

			if (this.move) {
				switch (Math.floor(Math.random() * 4))
				{
					case 0:
					nx--;
					if (classList[1] != "left2") {
		        this.getElement().classList.replace(classList[1], "left2");
		      }
		      else {
		        this.getElement().classList.replace(classList[1], "left");
		      }
					break;

					case 1:
					nx++;
					if (classList[1] != "right2") {
		        this.getElement().classList.replace(classList[1], "right2");
		      }
		      else {
		        this.getElement().classList.replace(classList[1], "right");
		      }
					break;

					case 2:
					ny--;
					if (classList[1] != "up2") {
		        this.getElement().classList.replace(classList[1], "up2");
		      }
		      else {
		        this.getElement().classList.replace(classList[1], "up");
		      }
					break;

					case 3:
					ny++;
					if (classList[1] != "bottom2") {
		        this.getElement().classList.replace(classList[1], "bottom2");
		      }
		      else {
		        this.getElement().classList.replace(classList[1], "bottom");
		      }
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
					let event = new EnemiesDieEvent(enemies[i], this);
	        document.dispatchEvent(event);
	        if(event.defaultPrevented) continue;
	        this.die();
	        enemies.splice(i, 1);
	        if (enemies.length == 0) {
	          victoryF();
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
