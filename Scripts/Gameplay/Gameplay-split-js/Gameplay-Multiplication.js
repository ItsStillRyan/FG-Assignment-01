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

//creting an option array
let scoreArray = []
//Option stones
let x = document.querySelectorAll('.button-option').length
for (let i = 0; i < x; i++) {
    document.querySelectorAll('.button-option')[i].addEventListener('click', function () {
        //numbers in button changer
        //numbergen + numbergen to shuffle number twice and prevent repeating numbers
        
        document.querySelector('.buttonNum1').innerHTML = numberGen(numberGen(120))
        document.querySelector('.buttonNum2').innerHTML = parseInt(randomBetween(1, 90)) + numberGen(5)
        document.querySelector('.buttonNum3').innerHTML = numberGen(numberGen(120))
        document.querySelector('.buttonNum4').innerHTML = parseInt(randomBetween(1, 70)) + numberGen(7)

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

        console.log("button number", triggerValue)
        console.log("random placement", answerValue)

        //cutoff for array
        if(scoreArray.length > 5){
            scoreArray.pop()
        }


        if (triggerValue == answerValue) {
            let scoreIncrement = parseInt(localStorage.getItem("multiplicationsHighscore"))
            localStorage.setItem("multiplicationsHighscore", ++scoreIncrement)
            console.log(scoreIncrement)
        }
    })
}

//replacing highscore in database
window.setTimeout(function(){
    let finalAdd = localStorage.getItem('multiplicationsHighscore')
    document.querySelector('.scoreMultiply').innerHTML = finalAdd
}, 67000)