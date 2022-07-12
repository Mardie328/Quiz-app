const highScoresList = document.getElementById("highscores-list");
const highscores = JSON.parse(localStorage.getItem("highscores")) || [];



highScoresList.innerHTML = highscores
.map(score =>{
    return(`<li class ="high-scores">${score.name} - ${score.score}</li>`);
})
.join("");

function clearHighscores() {
    // highScoresList.style.display = "none"
    highScoresList.delect
}