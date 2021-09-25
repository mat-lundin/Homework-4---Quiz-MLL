//at least 5 questions
var questions = [
    {
        question: 'What is the best holiday?',
        choices: ['Christmas','Independence Day','Halloween'],
        answer: 'Halloween'
    }
];

var startBtn = document.getElementById('start');

//create element for the timer
var secondsLeft = 120;

// WHEN I click the start button - eventlistener
startBtn.addEventListener(function (event){


});


function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to end the game
        endGame();
      }
  
    }, 1000);
  }

// THEN a timer starts and I am presented with a question - start timer loop function, hide start button, create divs for box, question, and each answer (give them attributes to tell Q from A)
// WHEN I answer a question - eventlistener on container div, event.target on each answer
// THEN I am presented with another question - call same function to create the question from the array object, next index
// WHEN I answer a question incorrectly - function to evaluate correct answer and return true/false?
// THEN time is subtracted from the clock - new timer taking current value and starting a few seconds below that?
// WHEN all questions are answered or the timer reaches 0 - condition of timer loop plus another function that evaluates all answers given? 
// THEN the game is over - hide the question boxes and display the start button and score
function endGame(){

};
// WHEN the game is over
// THEN I can save my initials and my score - form field to enter initials, save both as separate strings in local storage