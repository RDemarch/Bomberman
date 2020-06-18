class Enemy extends Entity
{
	constructor(x, y)
	{
		super(x, y);
		this.launchMove();
		this.dead = false;
	}
	launchMove = function()
	{
		if(this.dead) return;
		var that = this;
		setTimeout(function() {that.randomMove();}, 1000);
	}
	randomMove = function()
	{
		var fail = 0;
		while (fail < 10)
		{
			fail++;
			
			var nx = this.getX();
			var ny = this.getY();
			
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
			
			var found = false;
			for (var i = 0; i < randomWalls.length; i++)
				if (nx == randomWalls[i].getX() && ny == randomWalls[i].getY())
				{
					found = true;
					break;
				}
			if(found) continue;
			
			var found = false;
			for (var i = 0; i < enemies.length; i++)
				if (nx == enemies[i].getX() && ny == enemies[i].getY())
				{
					found = true;
					break;
				}
			if(found) continue;
			
			if (nx == player.getX() && ny == player.getY())continue;


			if (nx % 2 == 1 && ny % 2 == 1) continue;
			
			if (nx < 0) continue;
			if (ny < 0) continue;
			
			if (nx > size) continue;
			if (ny > size) continue;
			
			this.setX(nx);
			this.setX(yx);
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

var enemies = [];
var count = 0;
while(count < 5)
{
	//Tes condition rx ry
	
	var found = false;
	for (var i = 0; i < randomWalls.length; i++)
		if (rx == randomWalls[i].getX() && ry == randomWalls[i].getY())
		{
			found = true;
			break;
		}
	if(found) continue;
	
	enemies.push(new Enemy(rx, ry));
}