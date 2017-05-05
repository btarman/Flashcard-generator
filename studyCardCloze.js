var fs = require('fs');
var inquirer = require("inquirer");
var count = 0

function inquire(name, message) {
	return inquirer.prompt({
		name: name,
		message: message
	})
};

fs.readFile('clozeCard.json', function(err, clozeCardData) {
	if(err) {
		console.log(err);
	} else {
		study(JSON.parse(clozeCardData));
	}

});

function study(clozeCardData) {
	if (count < clozeCardData.length) {
		inquire("partial", clozeCardData[count].partial)
			.then(function(answer) {
				inquire("cloze", clozeCardData[count].cloze)
					.then(function(answer) {
						inquire("full", clozeCardData[count].full)
							.then(function(answer) {
								count++
								study(clozeCardData);
							})
					})
			})
	}
}