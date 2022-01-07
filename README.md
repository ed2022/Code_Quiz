You’re going to need a few things
1. A function that starts the quiz. This should hide any elements not part of the quiz and it should show the first question
2. A global variable to keep track of which question you’re showing. Start it at 0 for the index of the first question.
3. A function to display the current question.
4. give each answer element an id like A, B, C, D. Then create an event listener for each of them that runs a function called check answer.
5. checkAnswer() should get the id of the clicked element and compare it to the current question’s correct answer. (you’ll need to change the correctAnswer values in the questions to be A, B, C, D etc to get this to work). Then it increments the global variable that keeps track of the current question by 1 and calls the function to display the next question.
If you get all of that working, it should carry through all of the questions and give you a score at the end. Once you get to that point and you can click through all of the questions, reach back out and we’ll discuss the next part.