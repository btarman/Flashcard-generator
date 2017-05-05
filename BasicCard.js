var inquirer = require("inquirer");
var fs = require('fs');
var operand1 = process.argv[2];
var operand2 = process.argv[3];
var cardArray = [];
var count = 0;

var BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
}


var newCardInfo = function() {
	if (count < 3) {
		console.log('New Question')
		inquirer.prompt([
		{
			name: "front",
			message: "What is your flashcard question?"
		}, {
			name: "back",
			message: "What is the answer to the question?"
		}
		]).then(function(answers) {
			var newCard = new BasicCard( answers.front, answers.back);
			cardArray.push(newCard);
			count++
			newCardInfo()

		});

	}
	else {
		
		fs.writeFile('flashcard.json', JSON.stringify(cardArray), function(err){
			if(err) {
				console.log('error');
			}
		})
	}
	
};
newCardInfo();




module.exports = BasicCard;