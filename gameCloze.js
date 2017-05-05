var inquirer = require("inquirer");

inquirer.prompt(
	{
		name: "start",
		message: "Enter 1 to make new clozecards. Enter 2 to review clozecards"

	}
).then(function(answer) {
	var startKey = Number(answer.start);
	if(startKey === 1) {
		require('./ClozeCard');
	} else if (startKey === 2) {
		require('./studyCardCloze')
	}
})