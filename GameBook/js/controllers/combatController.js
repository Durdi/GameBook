/*
Combat controller. Combat is turn based. Speed determines who goes first then combat flow is one then the other. 
Each character class has a different moveset. For testing purposes I have been using a class with 3AP and an enemy with 1AP.
Each move used by a player is called and returns the Damage of the choice and the AP cost of the choice.
*/

var startCombat = function(character, enemy1){
	alert("combat has started!!")
	var victory = false;
	var defeat = false;
	var initialCharacterAP = character.ap;
	var initialEnemyAP = enemy1.ap;

	//speed check to see if player does not go first.
	var playerTurn = 1;
	if(character.speed < enemy1.speed){
		playerTurn = 0;
	}

	// Actual combat loop.
	while(victory === false && defeat === false){
		console.log("Enemy HP = " + enemy1.hp);
		console.log("Player HP = " + character.hp);
		console.log("Enemy AP = " + enemy1.ap);
		console.log("Player AP = " + character.ap);
		console.log(playerTurn);

		//defeat condition met.
		if(character.hp <= 0){
			alert("game over you died.")
			defeat = true;
		//Victory condition met
		}else if(enemy1.hp <= 0){
			alert("congrats. You win.")
			victory = true;
		//If victory/defeat is not met.
		}else{
			if (playerTurn == 1){
				while(character.ap > 0){
					//expends all AP for player. In this case it is always 3.
					console.log("enter player turn true while");
					//present character with attacks. 
					var dmgAndAp = character.selectAction(character.ap)
					//returned values to let the controller know how much ap was used by the choice
					//and how much dmg the choice does.
					enemy1.hp -= dmgAndAp.damage;
					character.ap -= dmgAndAp.ap;
				}
				//once AP is expended we reset the AP fo the character to what it should be and change the turn flag.
				character.ap = initialCharacterAP;
				playerTurn = 0;

				// Once player turn is switched it runs through the loop and hits here.
			}else if(playerTurn == 0){
				while(enemy1.ap > 0){
					//this loop expends enemy ap. In my tests the enemy passed in always has 1 AP.
					console.log('enter enemy turn while')
					console.log("The goblins attacks you")
					var dmgAndAp = enemy1.attack;
					character.hp -= dmgAndAp.damage;
					enemy1.ap -= dmgAndAp.ap;
				}
				// reset enemy ap and change turns.
				enemy1.ap = initialEnemyAP;
				playerTurn = 1;

			}
		}
	}

}
