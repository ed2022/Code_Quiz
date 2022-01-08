//DEFINING THE qandA
var qandA = [
    {
        question: 'Array in Java can be used to store: ',
        answers: ['1. Number and String', '2. Other Arrays', '3. Booleans', '4. All of the above'],
        correct: '4. All of the above'
    },
    {
        question: 'Commonly used data type DO NOT INCLUDE:',
        answers: ['1. Strings', '2. Booleans', '3. Alerts', '4. Numbers'],
        correct: '3. Alerts'
    },
    {
        question: 'String values must be enclosed within______ when being assigned to a variable.',
        answers: ['1. Commas', '2. Curly Brackets', '3. Quotes', '4. Parentheses'],
        correct: '3. Quotes'
    },
    {
        question: 'The conditions in an if/else statement is enclosed within:',
        answers: ['1. quotes', '2. Curly Brackets', '3. Parentheses', '4. Square Brackets'],
        correct: '3. Parentheses'
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: ['1. Java Script', '2. Terminal/Bash', '3. For Loops', '4. Console.log'],
        correct: '4. Console.log'
    }
]
//CREATING VARIABLES
var timerH1EL = document.getElementById("time"); //header

var containerDIVEL = document.getElementById("containerID");//main body div

var startBL = document.getElementById("startID"); //start div block
var startBTNEL = document.getElementById("startBtn");//start button 
var quizBL  = document.getElementById("qandaDISID");//quiz div
    var questionP1EL = document.getElementById("questionID");
    var answerULEL = document.getElementById("answersID");
        var a1BtnEL = document.getElementById("a1Btn");
        var a2BtnEL = document.getElementById("a2Btn");
        var a3BtnEL = document.getElementById("a3Btn");
        var a4BtnEL = document.getElementById("a4Btn");
var ansValP1EL = document.getElementById("answerVID");
var finalBL = document.getElementById("finalID");
var finalScoreP1EL = document.getElementById("finalScore");
var enterIntDivEL = document.getElementById("enterInt");
var initialINPEL = document.getElementById("initialID");
var submitIntBtnEL = document.getElementById("sumbitInt");

var questionNum = 0; //seeting the questions in global
var totalTime = 50; //setting amount of time 
var timeRemaining = 0; // score catcher 
//DEFINING USEFUL FUNCTIOND FUNCTIONS
//TIMER SECTION
function timeCounter() {
  var timer = setInterval(
    function () {
      if (totalTime >= 10) {
        timerH1EL.textContent = 'Time: ' + totalTime;
        totalTime--;
        timeRemaining = totalTime;
      }
      else {
          console.log("Times Up!");
          final();
          timerH1EL.textContent = 'Time: ' + totalTime;
      }
    },
    1000);
    console.log(timer);
}
//FINAL MESSAGE
function final(){
    containerDIVEL.removeChild(quizBL); //removing quiz
    containerDIVEL.appendChild(finalBL);//adding final message
    // Label
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";

    finalBL.appendChild(createLabel);

    // input
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    finalBL.appendChild(createInput);

    // submit
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    finalBL.appendChild(createSubmit);
    // Event listener to capture initials and local storage for initials and score
    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;
        if (initials === null) {
            console.log("No value entered!");
        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);//setting items for local storage 
            // Travels to final page
            window.location.replace("highscores.html"); //calling on seperate location to call highscore 
        }
    });
}
//PROCESSES CORRECT ANSWER VALIDATION
function answerChecker(x) {
    if (qandA[questionNum].answers[x] === qandA[questionNum].correct) {
        ansValP1EL.innerText = "Correct! 😊";
    }//if statement close
    else {
        ansValP1EL.innerText = "Wrong 😔";
        totalTime = totalTime - 10;
    }//else statement close
}
//PROCESSES QUESTION AND ANSWER FIELDS 
function quiz(){
    //changing the questions and answers 
    if (questionNum <= 4) {
        console.log(questionNum);
        questionP1EL.innerHTML = qandA[questionNum].question;
        console.log(qandA[questionNum].question);

        a1BtnEL.innerText = qandA[questionNum].answers[0];
        a2BtnEL.innerText = qandA[questionNum].answers[1];
        a3BtnEL.innerText = qandA[questionNum].answers[2];
        a4BtnEL.innerText = qandA[questionNum].answers[3];

        a1BtnEL.addEventListener("click", function () { answerChecker(0); questionNum++; quiz(); });
        a2BtnEL.addEventListener("click", function () { answerChecker(1); questionNum++; quiz(); });
        a3BtnEL.addEventListener("click", function () { answerChecker(2); questionNum++; quiz(); });
        a4BtnEL.addEventListener("click", function () { answerChecker(3); questionNum++; quiz(); });

    }//if  
    else if (questionNum == 5){ 
        timeRemaining = totalTime;  
        totalTime =0; 
        final();} 
    else {
        console.log("Done");
        localStorage.setItem("Score", score);
    }//else
}
//DISPLAY FUNCTION
function start(){
    containerDIVEL.removeChild(quizBL); //removing the quiz
    containerDIVEL.removeChild(finalBL);//removing the final message
    //awaiting for button click to start both timer and the quiz
    startBTNEL.addEventListener("click", function(){
        containerDIVEL.removeChild(startBL);
        containerDIVEL.appendChild(quizBL);
        timeCounter();
        quiz();
    })
}
start(); //already calling on this from behind
