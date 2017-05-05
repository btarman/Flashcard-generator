var fs = require('fs');
var inquirer = require("inquirer");
var count = 0

function inquire(name, message) {
	return inquirer.prompt({
		name: name,
		message: message
	})
}

fs.readFile('flashcard.json', function(err, flashcardData) {
	if(err) {
		console.log(err);
	} else {
		study(JSON.parse(flashcardData));
	}

});
console.log("Press any key to move to next action");

function study(flashcardData) {
	if (count < flashcardData.length) {
		inquire("front", flashcardData[count].front)
			.then(function(answer) {
				inquire("back", flashcardData[count].back)
					.then(function(answer) {
						count++
						study(flashcardData);
					})
			
			});

	}	
}
	
