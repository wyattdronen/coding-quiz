
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

	
var myQuestions = [
	{
	question: "What javascript function converts data into string data?",
	answers: {
		a: 'JSON.stringify',
		b: 'JSON.data',
		c: '.string'
	},
	correctAnswer: 'a'
	},
	{
	question: "What is an array?",
	answers: {
		a: 'set of multiple data types',
		b: 'grouping of different names',
		c: 'fixed-size collection of elements of the same data type'
	},
	correctAnswer: 'c'
	}
	];
	

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		var output = [];
		var answers;
		
		for(var i=0; i<questions.length; i++){
      
			// list of answers
			answers = [];
		}
			// for each available answer...
			for(letter in questions[i].answers){
	  
			  // html radio button
			  answers.push(
				'<label>'
				  + '<input type="radio" name="question'+i+'" value="'+letter+'">'
				  + letter + ': '
				  + questions[i].answers[letter]
				+ '</label>'
			  );
			
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			  );

			quizContainer.innerHTML = output.join('');
			
		}}
		
		
	function showResults(questions, quizContainer, resultsContainer){
		var answerContainers = quizContainer.querySelectorAll('.answers');
    
		var userAnswer = '';
		var numCorrect = 0;
		
	
		for(var i=0; i<questions.length; i++){
	
		  // find selected answer
		  userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		  
		  // if answer is correct
		  if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
		  }
		  resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
		}
	  
		
		// when user clicks submit, show results
		submitButton.onclick = function(){
		  showResults(questions, quizContainer, resultsContainer);
		}}}
