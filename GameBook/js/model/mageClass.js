var MageClass = function(){
	this.hp = 8;
	this.ap = 4;
	this.crit = .15;
	this.speed = 6;
	this.damage = 30;
	this.dodge = 20;


	this.fireball = function(){
		return this.damage;
	}
	this.iceBlast = function(){
		return this.damage;
	}

	//defensive buff skill. 
	//pool AP skill.
	// MASSIVE damage AP spender. Massive damage.

	this.selectAction = (ap){
		var choice = prompt("Do you want to cast: \n Fireball \n Ice Blast \n You currently have " + ap + " AP.").toUpperCase();
		if(choice === "FIREBALL"){
			return {
				damage: this.fireball(),
				ap: 4
			};
		}else if(choice === "ICE BLAST"){
			return {
				damage: this.fireball(),
				ap: 4
			};
		}	
	}
}