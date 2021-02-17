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
    let eqNum1 = parseInt(randomBetween(15, 30))
    let eqNum2 = parseInt(randomBetween(1, 15))
    document.querySelector('#eqNum1').innerHTML = eqNum1
    document.querySelector('#eqNum2').innerHTML = eqNum2
    //getting the final and correct answer
    let finalAns = eqNum1 - eqNum2
    //getting the random placement
    let placement = placementGen()
    //outputting the answer with a random placement
    document.querySelector(placement.queryClass).innerHTML = finalAns

    //showing what the random placement 1
    let x = placement.scoreCount
    localStorage.setItem("currentPlacement", x)
    return {
        'scoreCount': x,
        'finalAns': finalAns

    }

}

function highscoreClock() {

    //replacing highscore in database
    window.setTimeout(function () {
        let finalAdd = localStorage.getItem('subtractionHighscore')
        document.querySelector('.scoreSubtraction').innerHTML = finalAdd
    }, 67000)
}

//creting an option array
let scoreArray = []
localStorage.setItem("subtractionHighscore", 1)
//Option stones // making querySelectorAll work
let x = document.querySelectorAll('.button-option').length
for (let i = 0; i < x; i++) {
    document.querySelectorAll('.clickStartBtn, .button-option')[i].addEventListener('click', function () {

        //Wrong answer generators + outputting them into the stones
        document.querySelector('.buttonNum1').innerHTML = numberGen(numberGen(30))
        document.querySelector('.buttonNum2').innerHTML = parseInt(randomBetween(6, 31)) - numberGen(5)
        document.querySelector('.buttonNum3').innerHTML = numberGen(numberGen(30))
        document.querySelector('.buttonNum4').innerHTML = parseInt(randomBetween(8, 31)) - numberGen(7)


        //buttonclicks to store value of button position
        document.querySelector('.btnTrig1').addEventListener('click', function () {
            localStorage.setItem("btnTrig", "1");
        })
        document.querySelector('.btnTrig2').addEventListener('click', function () {
            localStorage.setItem("btnTrig", "2");
        })
        document.querySelector('.btnTrig3').addEventListener('click', function () {
            localStorage.setItem("btnTrig", "3");
        })
        document.querySelector('.btnTrig4').addEventListener('click', function () {
            localStorage.setItem("btnTrig", "4");
        })

        //creating an array to store the random placements of correct answer
        y = equationGen()
        scoreArray.unshift(y.scoreCount)
        console.log(scoreArray)
        localStorage.setItem("lastPlacement", scoreArray[2])

        let answerValue = localStorage.getItem("lastPlacement")
        let triggerValue = localStorage.getItem("btnTrig")

        //cutoff for array
        if (scoreArray.length > 5) {
            scoreArray.pop()
        }


        if (triggerValue == answerValue) {
            let scoreIncrement = parseInt(localStorage.getItem("subtractionHighscore"))
            localStorage.setItem("subtractionHighscore", ++scoreIncrement)
        }
    })
}


