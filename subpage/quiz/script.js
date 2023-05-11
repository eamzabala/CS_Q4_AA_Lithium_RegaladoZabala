const catcha = document.querySelector("#catcha");
const questions = document.querySelectorAll(".question *");
const choices = document.querySelectorAll(".choice *");
const next = document.querySelector("#next");
const back = document.querySelector("#back");

let currentQuestion = 0;

document.body.onload = function() {
    // Get current question.
    
    // Load current questions.
    questions[currentQuestion].style.display = "block";
    choices[currentQuestion].style.display = "block";

    updateColor();
}

back.onclick = function() {
    if(currentQuestion > 0) {
        questions[currentQuestion].style.display = "none";
        choices[currentQuestion].style.display = "none"; 

        questions[currentQuestion - 1].style.display = "block";
        choices[currentQuestion - 1].style.display = "block";

        currentQuestion--;
        updateColor();
    }
}

next.onclick = function() {
    if(currentQuestion < 14) {
        questions[currentQuestion].style.display = "none";
        choices[currentQuestion].style.display = "none"; 

        questions[currentQuestion + 1].style.display = "block";
        choices[currentQuestion + 1].style.display = "block";

        currentQuestion++;
        updateColor();
    } else if(confirm("Are you sure you would like to submit?")) {
        catcha.submit();
        open("../results/results.html", "_self");
    }
}

function updateColor() {
    next.innerHTML = "next";
    next.style.backgroundColor = "steelblue";
    back.style.backgroundColor = "steelblue";

    if(currentQuestion >= 14) {
        next.innerHTML = "end quiz";
        next.style.backgroundColor = "blue";
    }

    if(currentQuestion <= 0) {
        back.style.backgroundColor = "lightsteelblue";
    }
}