module.exports = function(app) {

	var jsonArr = require('../questions.json');

	var Question = app.models.Questions;

	Question.destroyAll();

	Question.upsert(jsonArr, function (err, object){
    	if(err) {
    		console.log("Error in loading questions");
    	}
	});

	// jsonArr.forEach(function(questionDict){
	// 	Question.create(questionDict, function(err, record) {
	// 		if (err) return console.log(err);
	// 	});
	// });
	console.log("Questions inserted successfully");
};
