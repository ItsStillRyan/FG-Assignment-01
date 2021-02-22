function languageSwap(response) {
	let selectedLanguage = localStorage.getItem("languageSelected")
	let hsboard = document.querySelector('#hsBoard')
	let back = document.querySelector('#backbtn')
	if (selectedLanguage == "FR") {
		hsboard.src = response.data.FR.HS_board
		back.src = response.data.FR.HS_back
	} else if (selectedLanguage == "EN") {
		hsboard.src = response.data.EN.HS_board
		back.src = response.data.EN.HS_back
	}
}
document.querySelector('#backBtn').addEventListener('click', function() {
	document.location.href = '../index.html'
})

function highscoreReplace(operator, score) {
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

async function pageReturn() {
	let response = await axios.get('../JSON/French.json')
	console.log("Database Active. Returning Test Value:", response.data.EN.title)
	languageSwap(response)
}
pageReturn()