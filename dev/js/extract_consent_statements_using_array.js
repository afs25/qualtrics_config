Qualtrics.SurveyEngine.addOnload(function()
{
    /*Place your JavaScript here to run when the page loads*/
});

Qualtrics.SurveyEngine.addOnReady(function()
{
    /*Place your JavaScript here to run when the page is fully displayed*/

});

Qualtrics.SurveyEngine.addOnPageSubmit(function()
{
    /*Place your JavaScript here to run when the page is submitted*/
	var consent_array = new Array();

	let questions = Qualtrics.SurveyEngine.QuestionInfo;
	var question_index;
	for (question_index in questions) {
		let question_data = new Qualtrics.SurveyEngine.QuestionData(question_index);
		let question_info = questions[question_index];
		let choices = question_info.Choices;
		let answers = question_info.Answers;
    	var choice_index;
		for (choice_index in choices) {
			choice_text = choices[choice_index].Text;
			answer_code = question_data.getSelectedAnswerValue(choice_index);
			answer_text = answers[answer_code].Display;
			let statement_dict = new Object();
			statement_dict[choice_text] = answer_text
			consent_array.push(statement_dict);
		}
	}

	Qualtrics.SurveyEngine.setEmbeddedData('consent_statements', JSON.stringify(consent_array));
});