// Event initialization 5 events per stage right now.
var stage1 =[];
var stage2 =[];
var stage3 = [];
//This variable controls the length of the game. It can be modified to add stages to the game.
// Game loop should be unaffected.
var gameStages = [stage1, stage2, stage3];

//Events are randomly selected per stage.
for (var i = 0; i<5; i++){
	stage1[i] = Math.floor((Math.random() * 10) + 1);
	stage3[i] = Math.floor((Math.random() * 10) + 1);
	stage2[i] = Math.floor((Math.random() * 10) + 1);
}
// A boss stage is added to the end of each stage.
stage1[5] = 0;
stage2[5] = 0;
stage3[5] = 0;
// Logging the stage numbers for debugging purposes.
console.log(stage1);
console.log(stage2);
console.log(stage3);



// Game Start
alert("Welcome to the gamebook adventure!!");


//Character Creation
var sex = prompt("Please enter your gender.");
var archetype = prompt('Please choose one of the following classes. \n Warrior \n Mage\n Rogue\n Cleric')
var race = prompt("Please choose one of the following races. \nOrc\nHuman\nWood Elf\nDark Elf")

switch (archetype){
	case "Warrior":
	var mainCharacter = new WarriorClass();
	mainCharacter.prototype = new Character(sex,archetype,race);
	break;

	case "Rogue":
	var mainCharacter = new RogueClass();
	mainCharacter.prototype = new Character(sex, archetype, race);
	break;

	case "Mage":
	var mainCharacter = new MageClass();
	mainCharacter.prototype = new Character(sex, archetype,race);
	break;

	case "Cleric":
	var mainCharacter = new ClericClass();
	mainCharacter.prototype = new Character(sex, archetype, race);
	break;

	default:
	console.log("you done broke it son.")
	break;
}

console.log(mainCharacter.damage);
// Stage one events called
var event = new EventA1();
for (var i = 0; i<gameStages.length; i++){
	for (var j = 0; j<gameStages[i].length; j++){
		switch((gameStages[i])[j]){
			case 0:
			if(gameStages[i] === stage1){
				var event = new TheCrone();
			}else if(gameStages[i] === stage2){
				var event = new TheCount();
			}else if(gameStages[i] === stage3){
				var event = new TheKing();
			}
			break;

			case 1:
			if(gameStages[i] === stage1){
				var event = new EventA1();
			}else if(gameStages[i] === stage2){
				var event = new EventB1();
			}else if(gameStages[i] === stage3){
				var event = new EventC1();
			}
			break;

			case 2:
			if(gameStages[i] === stage1){
				var event = new EventA2();
			}else if(gameStages[i] === stage2){
				var event = new EventB2();
			}else if(gameStages[i] === stage3){
				var event = new EventC2();
			}
			break;

			case 3:
			if(gameStages[i] === stage1){
				var event = new EventA3();
			}else if(gameStages[i] === stage2){
				var event = new EventB3();
			}else if(gameStages[i] === stage3){
				var event = new EventC3();
			}
			break;

			case 4:
			if(gameStages[i] === stage1){
				var event = new EventA4();
			}else if(gameStages[i] === stage2){
				var event = new EventB4();
			}else if(gameStages[i] === stage3){
				var event = new EventC4();
			}			break;

			case 5:
			if(gameStages[i] === stage1){
				var event = new EventA5();
			}else if(gameStages[i] === stage2){
				var event = new EventB5();
			}else if(gameStages[i] === stage3){
				var event = new EventC5();
			};
			break;

			case 6:
			if(gameStages[i] === stage1){
				var event = new EventA6();
			}else if(gameStages[i] === stage2){
				var event = new EventB6();
			}else if(gameStages[i] === stage3){
				var event = new EventC6();
			}
			break;

			case 7:
			if(gameStages[i] === stage1){
				var event = new EventA7();
			}else if(gameStages[i] === stage2){
				var event = new EventB7();
			}else if(gameStages[i] === stage3){
				var event = new EventC7();
			}
			break;

			case 8:
			if(gameStages[i] === stage1){
				var event = new EventA8();
			}else if(gameStages[i] === stage2){
				var event = new EventB8();
			}else if(gameStages[i] === stage3){
				var event = new EventC8();
			}
			break;

			case 9:
			if(gameStages[i] === stage1){
				var event = new EventA9();
			}else if(gameStages[i] === stage2){
				var event = new EventB9();
			}else if(gameStages[i] === stage3){
				var event = new EventC9();
			}
			break;

			case 10:
			if(gameStages[i] === stage1){
				var event = new EventA10();
			}else if(gameStages[i] === stage2){
				var event = new EventB10();
			}else if(gameStages[i] === stage3){
				var event = new EventC10();
			}
			break;
		}
	}
}

alert("YOU DID IT!")


