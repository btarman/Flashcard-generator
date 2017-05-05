var inquirer = require("inquirer");

inquirer.prompt(
	{
		name: "start",
		message: "Enter 1 to make new flashcards. Enter 2 to review flashcards"

	}

).then(function(answer) {
	var startKey = Number(answer.start)
	if(startKey === 1) {
		require('./BasicCard');
	} else if (startKey === 2) {
		require('./StudyCard')
	}
})
