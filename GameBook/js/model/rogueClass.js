var RogueClass = function(){
	this.hp = 100;
	this.ap = 3;
	this.crit = 25;
	this.speed = 9;
	this.damage = 20;
	this.dodge = 25;

	this.backstab = function(){
		return this.damage * 1.75;
	}
	this.attack = function(){
		return this.damage;
	}

	// //TODO interactive moves to be implemented at a later date.
	// this.stealAP = function(){
	// 	return this.damage * .5;
	// }
	// this.smokescreen = function(){
	// 	return this.dodge*2;
	// }
	

	this.selectAction = function(ap){
		var choice = prompt("Do you want to: \n Attack(1AP)\n Backstab(2AP)\n You currently have " + ap + " AP").toUpperCase();
		if(choice === "ATTACK"){
			return {
				damage: this.attack(),
				ap: 1
			};
		}else if(choice === "BACKSTAB"){
			return{ 
				damage: this.backstab(),
				ap: 2
			};
		}else{
			alert("please select a valid action.")
		}
	}

}