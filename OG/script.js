//CREATING VARIABLES
var timerH1EL = document.getElementById("time");
var containerDivEL = document.getElementById("containerID");
var startDivEL = document.getElementById("startID");
var startTitleH1EL = document.getElementById("startTitle");
var startTextP1EL = document.getElementById("startText");
var startBtnEL = document.getElementById("startBtn");
var questionP1EL = document.getElementById("questionID");
var allBtnDivEL = document.getElementById("allBtn");
var answersBtnEL = document.getElementsByClassName("optionsBtns");
var a1BtnEL = document.getElementById("a1Btn");
var a2BtnEL = document.getElementById("a2Btn");
var a3BtnEL = document.getElementById("a3Btn");
var a4BtnEL = document.getElementById("a4Btn");
var ansValP1EL = document.getElementById("answerVID");
var finalDivEL = document.getElementById("final");
var finalScoreP1EL = document.getElementById("finalScore");
var enterIntDivEL = document.getElementById("enterInt");
var initialINPEL = document.getElementById("initialID");
var submitIntBtnEL = document.getElementById("sumbitInt");

var questionNum = 0;

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
//DEFINING USEFUL FUNCTIOND FUNCTIONS
//TIMER SECTION
var totalTime = 50;
function timeCounter() {
  var timer = setInterval(
    function () {
      if (totalTime >= 1) {
        timerH1EL.textContent = 'Time: ' + totalTime;
        totalTime--;
      }
      else {
        timerH1EL.textContent = 'Time: ' + totalTime;
      }
    },
    1000);
    console.log(timer);
}
//FINAL MESSAGE
function final(){
    //These will allow only the final score message and form to populate
    // questionP1EL.style.display = "none"; 
    // allBtnDivEL.style.display = "none"; 
    // ansValP1EL.style.display = "none"; 

    // finalDivEL.style.display = ""; 
    // var score = totalTime;
    // timerH1EL.style.display = "none"; 

    // finalScoreP1EL.innerHTML = "Your final score is " + score; 
    location.href = "input.html"; 

    // localStorage.setItem("score", score);
    
    // var intInput = document.getElementById("initialID").value;

    // submitIntBtnEL.addEventListener("click", function(){
    //     //event.preventDefault();
    //     var intN = intInput.value;
    //     console.log(intN);
    //     localStorage.setItem("Initial", intN);
    //     
    // })
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
console.log(questionNum);
function qandAFun() {
    if (questionNum <= 4) {
        console.log(questionNum);
        questionP1EL.innerHTML = qandA[questionNum].question;
        console.log(qandA[questionNum].question);

        //a1BtnEL.style.display = "block";

        allBtnDivEL.style.display = "";

        a1BtnEL.innerText = qandA[questionNum].answers[0];
        a2BtnEL.innerText = qandA[questionNum].answers[1];
        a3BtnEL.innerText = qandA[questionNum].answers[2];
        a4BtnEL.innerText = qandA[questionNum].answers[3];

        a1BtnEL.addEventListener("click", function () { answerChecker(0); questionNum++; qandAFun(); });
        a2BtnEL.addEventListener("click", function () { answerChecker(1); questionNum++; qandAFun(); });
        a3BtnEL.addEventListener("click", function () { answerChecker(2); questionNum++; qandAFun(); });
        a4BtnEL.addEventListener("click", function () { answerChecker(3); questionNum++; qandAFun(); });

    }//if  
    else if (questionNum == 5){ final();} 
    else {
        console.log("Done");
        localStorage.setItem("Score", score);
    }//else

}

//DISPLAY FUNCTION
function displayQuiz() {

    allBtnDivEL.style.display = "none";
    finalDivEL.style.display = "none";
    
    startTitleH1EL.innerText = "Coding Quiz Challange";
    startTextP1EL.innerText = "Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds!";
    startBtnEL.innerText = "Start Quiz";
    startBtnEL.addEventListener("click", function () {
        startTextP1EL.remove();
        startTitleH1EL.remove();
        startBtnEL.remove();
        timeCounter();
        qandAFun();
    })//click start and preform this function. 
}
displayQuiz();