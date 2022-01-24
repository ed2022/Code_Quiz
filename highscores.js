//Grab Data Need to append
var scoreList = document.getElementById('scoreList');
var goBackBtnEL = document.getElementById('goBack');
var clearHBtnEL = document.getElementById('clearHistory');

function displayScore (){
    var data = JSON.parse(localStorage.getItem("allScores"));
    console.log(data);
    if(data != null){
    for (var i = 0; i < data.length; i++) {
        var name = data[i].initials;
        var score = data[i].score; 

        var liEL= document.createElement('li');
        liEL.textContent = (i+1) +". " + name + "   " + score;
        scoreList.append(liEL);     
    }
    }
}
displayScore();

// just takes it back to the previous page
goBackBtnEL.addEventListener("click" , function(){
    location.href = "main.html"; 
})

clearHBtnEL.addEventListener("click", function(){
    localStorage.clear();
    location.reload(); //this lets you reload the page in it's current html page 
})
