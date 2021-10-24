//Grab Data Need to append
var scoreList = document.getElementById('scoreList');
//From local storage   
var initial = localStorage.getItem("intitial");
var score = localStorage.getItem("score");
//For Navigation Btns 
var goBackBtnEL = document.getElementById('goBack');
var clearHBtnEL = document.getElementById('clearHistory');

goBackBtnEL.addEventListener("click" , function(){
    location.href = "index.html"; 
})
