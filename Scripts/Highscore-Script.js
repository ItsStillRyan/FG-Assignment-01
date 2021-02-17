document.querySelector('#backBtn').addEventListener('click', function(){
    document.location.href = '../Index.html'
})

function highscoreReplace(operator, score){
    document.querySelector(operator).innerHTML = score
}
let addScore = localStorage.getItem("additionHighscore")
let subScore = localStorage.getItem("subtractionHighscore")
let mulScore = localStorage.getItem("multiplicationsHighscore")
let divScore = localStorage.getItem("divisionHighscore")

highscoreReplace('.additionScore', addScore)
highscoreReplace('.subtractionScore', subScore)
highscoreReplace('.multiplicationScore', mulScore)
highscoreReplace('.divisionScore', divScore)

