var Goblin = function(){
	this.hp = 80;
	this.ap = 2;
	this.crit = .35;
	this.speed = 1;
	this.damage = 20;

	this.attack = function(){
		return {
			damage: this.damage,
			ap: 1
		};
	}
}