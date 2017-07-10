var ClericClass = function(){
	this.hp = 15;
	this.ap = 2;
	this.crit = .15;
	this.speed = 7;
	this.damage = 8;
	this.dodge = 20;

	this.smite = function(){
		return this.damage;
	}

	this.holyFlames = function(){
		returh this.damage * 1.5;
	}

	//Heal skill.
	//damage buffing skill

	this.selectAction = function(ap){
		var choice = prompt("Do you want to cast: \n Smite(1AP) \n Holy Flames(2AP)\n You currently have " + ap + " AP.").toUpperCase();
		if(choice === "SMITE"){
			return{
				damage: this.smite(),
				ap: 1
			};
		}else if(choice === "HOLY FLAMES"){
			return{
				damage: this.holyFlames(),
				ap: 2
			};
		}else{
			alert("Please make a valid selection.");
		}
	}
}