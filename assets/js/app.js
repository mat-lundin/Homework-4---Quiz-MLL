//at least 5 questions
var questions = [
    {
        question: 'What is the best holiday?',
        choices: ['Christmas','Independence Day','Halloween'],
        answer: 'Halloween'
    },
    {
        question: 'What is the best cereal?',
        choices: ['Cheerios', 'Honey Nut Cheerios', 'Reeses Peanut Butter Puffs'],
        answer: 'Reeses Peanut Butter Puffs'
    },
    {
        question: 'What is one plus one?',
        choices: ['Three', 'Two', 'One Hundred Fifty Eight'],
        answer: 'Two'
    },
    {
        question: 'What is the best cereal?',
        choices: ['Cheerios', 'Honey Nut Cheerios', 'Reeses Peanut Butter Puffs'],
        answer: 'Reeses Peanut Butter Puffs'
    },
    {
        question: 'What is the best cereal?',
        choices: ['Cheerios', 'Honey Nut Cheerios', 'Reeses Peanut Butter Puffs'],
        answer: 'Reeses Peanut Butter Puffs'
    }
];


var bodyEl = document.getElementsByTagName('body')[0];
console.log('bodyEl = ' + bodyEl)
var startBtn = document.getElementById('start');
console.log(startBtn)

var questionCount = 0;

var score = 0;

//create element for the timer
var secondsLeft = 60;

// WHEN I click the start button - eventlistener
startBtn.addEventListener('click',function (event){
    console.log('button clicked')
    showQuestion();
    hideStart();
    setTime();
    showScore();

});

//show score
function showScore(){
    var scoreEl = document.createElement('div');
    scoreEl.id = 'score';
    scoreEl.textContent = 'Your score: '+score;
    bodyEl.append(scoreEl);
}

//put question on page - call this in a for each
function showQuestion(){
    if (questionCount < questions.length){
    var boxEl = document.createElement('div');
    var qEl = document.createElement('span');
    boxEl.id = 'box'+questionCount;
    boxEl.className = 'boxes'
    
    //for each on the choices?

    var cVal = questions[questionCount].choices;
    qEl.textContent = questions[questionCount].question;
    qEl.className = 'question';

    boxEl.append(qEl);

    // boxEl.append(choicesEl);
    bodyEl.append(boxEl);
    for (var i=0;i<cVal.length; i++){
        var item = document.createElement('button');
        item.className = 'choice';
        item.textContent = cVal[i];
        item.setAttribute('data-choice',cVal[i])
        boxEl.append(item);
    };
    //click the div and call a handle function
    console.log(boxEl);
    var boxId = '#box' + questionCount.toString();
    var currentBox = document.getElementById('box'+questionCount);
    console.log('boxId = ' + boxId);
    console.log(typeof boxId);
    currentBox.addEventListener('click', handleChoiceClick);
    
    } else{
        endGame();
    }
};


//handle choice click
function handleChoiceClick (event) {
    // console.log('this get attribute in handle = '+this.getAttribute('data-choice'));
    if (event.target.matches('.choice')){
        console.log('target get attribute in handle = ' +event.target.getAttribute('data-choice'));
        answerEval(event.target);
        questionCount ++;
        showQuestion();
    }
    console.log('this is '+this);
    // document.getElementById('box'+questionCount.toString()).removeEventListener('click', handleChoiceClick);
};

//evaluate answer
function answerEval(target) {
    console.log('target = '+ target)
    console.log('target value in answerEval = '+target.value)
    console.log(questions[questionCount].answer)
    if (target.getAttribute('data-choice') === questions[questionCount].answer) {
        target.style.backgroundColor = 'green';
        score = score + 10;
        document.getElementById('score').textContent = 'Your score: '+score;
    } else {
        target.style.backgroundColor = 'red'
        secondsLeft = secondsLeft - 10;
    };
    // target.removeEventListener('click', handleChoiceClick);
};

//hide start button
function hideStart() {
    startBtn.style.display = 'none';
};


//timer
timeEl = document.createElement('div');
timeEl.className = 'timer';
bodyEl.append(timeEl);

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
        secondsLeft--; 
        timeEl.textContent = secondsLeft + " seconds left.";
      
      if(secondsLeft <= 0) {
        // Stops execution of action at set interval
        startBtn.style.display = 'block';
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
//clear and hide timer, add initials prompt, save to local storage
function endGame(){
    console.log('end game');
};
// WHEN the game is over
// THEN I can save my initials and my score - form field to enter initials, save both as separate strings in local storage