//Grab Data Need to append
var scoreList = document.getElementById('scoreList');
//From local storage   
// var initial = localStorage.getItem("intitial");
// var score = localStorage.getItem("score");
//For Navigation Btns 
var goBackBtnEL = document.getElementById('goBack');
var clearHBtnEL = document.getElementById('clearHistory');

function displayScore (){
    var data = localStorage.getItem(JSON.stringify());
    for (var i = 0; i < data.length; i++) {
        var intitials = data[i][0].val;
        var scores = data[i][1].val;
        var num = i+1;
        scoreList.appendChild(num +". " + intitials + "-" + scores);
        console.log(num);
        console.log(intitials);
        console.log(scores);
    }
}
displayScore();

// just takes it back to the previous page
goBackBtnEL.addEventListener("click" , function(){
    location.href = "index.html"; 
})

clearHBtnEL.addEventListener("click", function(){
    localStorage.clear();
    location.reload(); //this lets you reload the page in it's current html page 
})
