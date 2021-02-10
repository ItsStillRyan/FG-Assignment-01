
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
    let eqNum1 = parseInt(randomBetween(15, 30))
    let eqNum2 = parseInt(randomBetween(1, 15))
    document.querySelector('#eqNum1').innerHTML = eqNum1
    document.querySelector('#eqNum2').innerHTML = eqNum2

    let finalAns = eqNum1 - eqNum2
    let placement = placementGen()
    document.querySelector(placement.queryClass).innerHTML = finalAns
    return placement.buttonClass
}

//Option stones
let x = document.querySelectorAll('.button-option').length
for (let i = 0; i < x; i++) {
    document.querySelectorAll('.button-option')[i].addEventListener('click', function () {
        //numbers in button changer
        //numbergen + numbergen to shuffle number twice and prevent repeating numbers
        document.querySelector('.buttonNum1').innerHTML = numberGen(numberGen(30))
        document.querySelector('.buttonNum2').innerHTML = parseInt(randomBetween(6, 31)) - numberGen(5)
        document.querySelector('.buttonNum3').innerHTML = numberGen(numberGen(30))
        document.querySelector('.buttonNum4').innerHTML = parseInt(randomBetween(8, 31)) - numberGen(7)


        //buttonclicks to store value
        document.querySelector('.btnTrig1').addEventListener('click', function () {
            localStorage.setItem("btnTrig", "1");
            equationGen()
        })
        document.querySelector('.btnTrig2').addEventListener('click', function () {
            localStorage.setItem("btnTrig", "2");
            equationGen()
        })
        document.querySelector('.btnTrig3').addEventListener('click', function () {
            localStorage.setItem("btnTrig", "3");
            equationGen()
        })
        document.querySelector('.btnTrig4').addEventListener('click', function () {
            localStorage.setItem("btnTrig", "4");
            equationGen()
        })

        let triggerValue = localStorage.getItem("btnTrig")
        let answerValue = document.querySelector(equationGen()).value

        // console.log("button number",triggerValue)
        // console.log("random placement",answerValue)

        // localStorage.setItem("Highscore",0)
        if (triggerValue == answerValue) {
            let scoreIncrement = parseInt(localStorage.getItem("Highscore"))
            localStorage.setItem("Highscore", ++scoreIncrement)
            console.log(scoreIncrement)
        }

    })
}

