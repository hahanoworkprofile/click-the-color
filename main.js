//elements
const scoretext = document.getElementById("score")
const cmd = document.getElementById("cmdtexto")
const redBox = document.getElementById("red-box")
const greenBox = document.getElementById("green-box")
const blueBox = document.getElementById("blue-box")
//variables
var score = 0
//main
console.log("js enabled ")
scoretext.innerHTML = score;
cmd.innerHTML = randomizeColor();

function play() {
    scoretext.innerHTML = score;
    cmd.innerHTML = randomizeColor();
    cmd.style.color = randomizeColor();
}

function randomizeColor() { 
    var rnum = Math.floor(Math.random(1,3)*3)
    if (rnum==1) {
        return "Red";
    }
    if (rnum==2) {
        return "Green";
    }
    else  {
        return "Blue";
    }
    return rnum;
}

redBox.addEventListener("click", function(){
     if (cmd.innerHTML =="Red") {
         score=   score+1;
         play();
     }
     else {
         score= score-1;
         play();
     }
});

greenBox.addEventListener("click", function(){
    if (cmd.innerHTML =="Green") {
        score=    score+1;
        play();
    }
    else {
        score= score-1;
        play();
    }
});

blueBox.addEventListener("click", function(){
    if (cmd.innerHTML =="Blue") {
        score=  score+1;
        play();
    }
    else {
       score= score-1;
       play();
    }
});
