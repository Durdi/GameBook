var WarriorClass = function(){
	this.hp = 20;
	this.ap = 2;
	this.crit = .15;
	this.speed = 3;
	this.damage = 35;
	this.dodge = 20;

	this.bash = function(){
		return this.damage;

	}
	this.sheildBash = function(){
		return this.damage * 1.5;
	}

//Debuffing skills to implement later
	// this.stun = function(){
	// }
	// this.shout = function(){
		// damage debuff skill
	// }


	this.selectAction = function(ap){
		var choice = prompt("Do you want to: \n Slam(1AP)\n Sheild Bash(2AP)\n You currently have " + ap + " AP").toUpperCase();
		if(choice === "SLAM"){
			return{
				damage: this.bash(),
				ap: 1
			};
		}else if(choice === "SHEILD BASH"){
			return{
				damage: this.sheildBash(),
				ap: 2
			};
		}else{
			alert("You didn't pick a valid action");
		}

	}
}