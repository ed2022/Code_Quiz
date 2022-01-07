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
//MAIN-CONTAINER
var containerDIVEL = document.getElementById("container");
//THREE MAIN ELEMENTS 
var startBL = document.getElementById("startID");
var quizBL  = document.getElementById("qandaDISID");
    var questionEL = document.getElementById("questionID");
    var answerULEL = document.getElementById("answersID");
        var a1BtnEL = document.getElementById("a1Btn");
        var a2BtnEL = document.getElementById("a2Btn");
        var a3BtnEL = document.getElementById("a3Btn");
        var a4BtnEL = document.getElementById("a4Btn");
var finalBL = document.getElementById("finalID"); 
//STARTER BUTTON
var startBTNEL = document.getElementById("startBtn");


function start(){
    containerDIVEL.removeChild(quizBL);
    containerDIVEL.removeChild(finalBL);
    startBTNEL.addEventListener("click", function(){
        containerDIVEL.removeChild(startBL);
        containerDIVEL.appendChild(quizBL);
        quiz();
    })
}
start(); 

var i = 0;
function quiz(){
    console.log("i = " + i);

    questionEL.append(qandA[i].question); console.log(qandA[i].question);
    a1BtnEL.append(qandA[i].answers[0]); console.log(qandA[i].answers[0]);
    a2BtnEL.append(qandA[i].answers[1]); console.log(qandA[i].answers[1]);
    a3BtnEL.append(qandA[i].answers[2]); console.log(qandA[i].answers[2]);
    a4BtnEL.append(qandA[i].answers[3]); console.log(qandA[i].answers[3]);

    answerULEL.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("WORKING BUTTONS");
        if (i <= qandA.length) {
            questionEL.innerHTML = "";
            a1BtnEL.innerHTML = "";
            a2BtnEL.innerHTML = "";
            a3BtnEL.innerHTML = "";
            a4BtnEL.innerHTML = "";
            i++;
        }
        else { final(); }
    })

}
    
    



function final(){
    containerDIVEL.removeAttribute(quizBL);
    console.log("FINAL REACHED")
}