// Show score

// Variables
const finalScore = document.querySelector('#final-score');
const form = document.querySelector('.form');
const initials = document.querySelector('#names');
const button = document.querySelector('button');
const score = document.getElementById('score')
const highscores = JSON.parse(localStorage.getItem('highscores')) || []
const MAX_HIGH_SCORES = 2;
let mostRecentScore = localStorage.getItem('mostRecentScore')
finalScore.textContent = mostRecentScore;




// The Score would be gotten from the other page and displayed and would be equal to the corresponding value
//The name would be gotten from the form


button.addEventListener ('click', (e) =>{
    console.log("you clicked me!");
    e.preventDefault();

    const scores = {
        name : initials.value,
        score : mostRecentScore,
    };

    highscores.push(scores);
    highscores.sort((a,b) => b.score - a.score)
    highscores.splice(2);

    localStorage.setItem("highscores", JSON.stringify(highscores));
    window.location.assign("../highscores/highscores.html")
})

