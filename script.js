const sLogin = document.querySelector(".cLoginMenu");
const sLoginBlock = document.querySelector("#cBlocker");
const bLogin = document.querySelector("#login");
const bStart = document.querySelector("#start");

// Open login screen.
bLogin.onclick = function() {
    sLogin.style.display = "block";
}

// Close login screen.
sLoginBlock.onclick = function() {
    sLogin.style.display = "none";
}

// Start quiz.
bStart.onclick = function() {
    open("subpage/quiz/index.html", "_self");
}