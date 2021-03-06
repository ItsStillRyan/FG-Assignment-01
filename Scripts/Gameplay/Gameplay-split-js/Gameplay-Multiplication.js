//Functions
//Number Generators
function numberGen(maxNum) {
	let x = Math.floor((Math.random() * maxNum) + 1);
	return x
}

function randomBetween(min, max) {
	return Math.random() * (max - min) + min;
}
//Number Generators End
function place() {
	let y = numberGen(4)
	return y
}

function placementGen() {
	let placeM = place()
	let queryClass = ".buttonNum" + placeM
	let buttonClass = ".btnTrig" + placeM
	let scoreCount = placeM
	return {
		'queryClass': queryClass,
		'buttonClass': buttonClass,
		'scoreCount': scoreCount
	}
}

function equationGen() {
	//generating the question, left and right numbers
	let eqNum1 = parseInt(randomBetween(1, 12))
	let eqNum2 = parseInt(randomBetween(1, 12))
	document.querySelector('#eqNum1').innerHTML = eqNum1
	document.querySelector('#eqNum2').innerHTML = eqNum2
	//getting the final and correct answer
	let finalAns = eqNum1 * eqNum2
	return {
		'scoreCount': x,
		'finalAns': finalAns
	}
}

function highscoreClock() {
	//replacing highscore in database
	window.setTimeout(function() {
		let finalAdd = localStorage.getItem('multiplicationsHighscore')
		document.querySelector('.scoreMultiply').innerHTML = finalAdd
	}, 65000)
}
//creting an option array
let scoreArray = []
localStorage.setItem("multiplicationsHighscore", 1)
//Option stones
let x = document.querySelectorAll('.button-option').length
document.querySelector('.clickStartBtn').addEventListener('click', function() {
	for (let i = 0; i < x; i++) {
		document.querySelectorAll('.button-option')[i].addEventListener('click', function() {
			//numbers in button changer
			//numbergen + numbergen to shuffle number twice and prevent repeating numbers
			y = equationGen()
			document.querySelector('.buttonNum1').innerHTML = parseInt(y.finalAns + (randomBetween(5, 13)))
			document.querySelector('.buttonNum2').innerHTML = parseInt(y.finalAns + (randomBetween(numberGen(4), numberGen(12))))
			document.querySelector('.buttonNum3').innerHTML = parseInt(y.finalAns + (randomBetween(2, 5)))
			document.querySelector('.buttonNum4').innerHTML = parseInt(y.finalAns + (randomBetween(numberGen(20), numberGen(47))))
			//buttonclicks to store value of button position
			document.querySelector('.btnTrig1').addEventListener('click', function() {
				localStorage.setItem("btnTrig", "1");
			})
			document.querySelector('.btnTrig2').addEventListener('click', function() {
				localStorage.setItem("btnTrig", "2");
			})
			document.querySelector('.btnTrig3').addEventListener('click', function() {
				localStorage.setItem("btnTrig", "3");
			})
			document.querySelector('.btnTrig4').addEventListener('click', function() {
				localStorage.setItem("btnTrig", "4");
			})
			//creating an array to store the random placements of correct answer
			//getting the random placement
			let placement = placementGen()
			//outputting the answer with a random placement
			document.querySelector(placement.queryClass).innerHTML = y.finalAns
			let x = placement.scoreCount
			localStorage.setItem("currentPlacement", x)
			localStorage.setItem("answer", y.finalAns)
			scoreArray.unshift(x)
			localStorage.setItem("lastPlacement", scoreArray[2])
			let answerValue = localStorage.getItem("lastPlacement")
			let triggerValue = localStorage.getItem("btnTrig")
			//cutoff for array
			if (scoreArray.length > 5) {
				scoreArray.pop()
			}
			let plusOne1 = document.querySelector('#plusOne1')
			if (triggerValue == answerValue) {
				let scoreIncrement = parseInt(localStorage.getItem("multiplicationsHighscore"))
				localStorage.setItem("multiplicationsHighscore", ++scoreIncrement)
				console.log(scoreIncrement)
				//+1 animations
				plusOne1.classList.add("PO-morsel");
				plusOne1.classList.remove("PO-morsel");
				void plusOne1.offsetWidth;
				plusOne1.classList.add("PO-morsel");
			}
			plusOne1.classList.add("PO-morsel");
			//geoff image goal changer
			let plus = localStorage.getItem("multiplicationsHighscore")
			console.log("scoreup", plus)
			let addSprite = document.querySelector('#geoff-sprite-img')
			let buttonsTop = document.querySelector('.choicesBTN')
			if (plus > 0 && plus < 15) {
				addSprite.src = "../../Images/Gameplay/geoff-small.png"
			} else if (plus > 16) {
				console.log("is this working?")
				addSprite.src = "../../Images/Gameplay/geoff-medium.png"
				addSprite.style.width = "22vh"
				buttonsTop.style.marginTop = "0px"
			}
		}, false)
	}
})