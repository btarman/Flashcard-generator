var inquirer = require("inquirer");
var fs = require('fs');
var clozeCardArray = [];
var count = 0;


var ClozeCard = function(cloze, partial) {
	this.cloze = cloze;
	this.partial = '...' + partial;
	this.full = cloze + " " + partial;
}

var clozeCardInfo = function() {
	if (count < 3) {
		inquirer.prompt([{
			name: "cloze",
			message: 'What is the cloze deletion of this card?'
		},
		{
			name: 'partial',
			message: 'What is the partial text of this card?'
		}]).then(function(answers) {
			var newClozeCard = new ClozeCard(answers.cloze, answers.partial, answers.full);
			clozeCardArray.push(newClozeCard);
			count++;
			clozeCardInfo();
		})
	} else {
		fs.writeFile('clozeCard.json', JSON.stringify(clozeCardArray), function(err) {
			if(err) {
					console.log('err');
			}
		})
	}

}
clozeCardInfo();
module.exports = ClozeCard;