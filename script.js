var startButton = document.getElementById('start');
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
console.log("check")
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
	
  function showQuestions(questions, quizContainer){
    // store the output
    var output = [];
    var answers;
	
    for(var i=0; i<questions.length; i++){
      
      answers = [];
	
      for(letter in questions[i].answers){
		
        //html radio button
        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>'
        );
      }

      // add this question and its answers to the output
      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    };
	
    // combine output list into one string of html
    quizContainer.innerHTML = output.join('');
	}
}
  

  function showResults(questions, quizContainer, resultsContainer){
    
    var answerContainers = quizContainer.querySelectorAll('.answers');
    
    // track answers
    var userAnswer = '';
    var numCorrect = 0;
    
    for(var i=0; i<questions.length; i++){

      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      
      if(userAnswer===questions[i].correctAnswer)
	  {
		
        // add to the number of correct answers
        numCorrect++;
        
        // answers green
        answerContainers[i].style.color = 'lightgreen';
		element.addEventListener('click', function(){
			console.log('Correct!')})
      }
      // wrong answer red
      else{
        answerContainers[i].style.color = 'red';
		element.addEventListener('click', function(){
			console.log('Wrong')})
	  }
	}

	

    // correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
  

  // show questions
  showQuestions(questions, quizContainer);

  // show results
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);

	submitButton.addEventListener('click', function(){
		console.log('Clicked!')
	})
  }
}


