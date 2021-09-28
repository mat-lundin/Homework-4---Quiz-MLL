# Homework-4---Quiz

This project is a quiz that asks 5 questions and records the answers. The score at the end will be recorded along with the player's initials. 

## Functionality

Upon loading the page the player sees a Start Quiz button and a Show Scorecard button. 

Show Scorecard will retrive the previous scores from local storage and display them in a grid next to the respective player's initials. These get saved even after the browser is refreshed.

Start Quiz will start the quiz and hide both buttons, replacing them with a question and multiple choices as well as the score for this game.

When an answer is selected the buttons for that question become disabled, and the selected answer is colored appropriately.

When a wrong answer is selected, 10 seconds are deducted from the timer, and the selected answer turns red. The score is unaffected.

When a correct answer is selected, 10 points are added to the score, and the selected answer turns green. The timer is unaffected.

As soon as a question is answered, the next question is displayed.

The game ends when all questions are answered or the time runs out. When the game ends the questions and answers remain, as well as the score. An input box will appear for the user to enter their initials and save that along with the score.

If the player wishes to play again, there appears a RESET button which will bring the player back to the original screen. They will be able to see their score appended to the list of scores if they click on Show Scorecard.

