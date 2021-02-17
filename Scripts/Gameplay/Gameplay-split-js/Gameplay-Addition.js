//Functions
function clicktest() {
    console.log("hello")
}

function clicktest1() {
    console.log("hello2")
}


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
    let finalAns = eqNum1 + eqNum2
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

//starting clock on highscore implementations
function highscoreClock() {
    //replacing highscore in database
    window.setTimeout(function () {
        let finalAdd = localStorage.getItem('additionHighscore')
        document.querySelector('.scoreAddition').innerHTML = finalAdd
    }, 65000)
}

//creting an option array
let scoreArray = []

localStorage.setItem("additionHighscore", 1)


//Option stones
let x = document.querySelectorAll('.button-option').length
document.querySelector('.clickStartBtn').addEventListener('click', function () {
    for (let i = 0; i < x; i++) {
        document.querySelectorAll('.button-option')[i].addEventListener('click', function () {
            let wrongNum = []
            //numbers in button changer
            //numbergen + numbergen to shuffle number twice and prevent repeating numbers
            document.querySelector('.buttonNum1').innerHTML = numberGen(numberGen(60))
            wrongNum.push(document.querySelector('.buttonNum1').innerHTML)

            document.querySelector('.buttonNum2').innerHTML = parseInt(randomBetween(6, 60)) - numberGen(5)
            wrongNum.push(document.querySelector('.buttonNum2').innerHTML)

            document.querySelector('.buttonNum3').innerHTML = numberGen(numberGen(60))
            wrongNum.push(document.querySelector('.buttonNum3').innerHTML)

            document.querySelector('.buttonNum4').innerHTML = parseInt(randomBetween(8, 60)) - numberGen(7)
            wrongNum.push(document.querySelector('.buttonNum4').innerHTML)

            console.log(wrongNum)

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
            if (scoreArray.length > 5) {
                scoreArray.pop()
            }


            if (triggerValue == answerValue) {
                let scoreIncrement = parseInt(localStorage.getItem("additionHighscore"))
                localStorage.setItem("additionHighscore", ++scoreIncrement)
                console.log(scoreIncrement)
            }

            //catching duplicates
            //    if (y.finalAns == wrongNum[0]){
            //         document.querySelector('.buttonNum1').innerHTML = numberGen(numberGen(60))
            //    }else if (y.finalAns == wrongNum[1]){
            //         document.querySelector('.buttonNum2').innerHTML = parseInt(randomBetween(6, 60)) - numberGen(5)
            //    }else if(y.finalAns == wrongNum[2]){
            //         document.querySelector('.buttonNum3').innerHTML = numberGen(numberGen(60))
            //    }else if(y.finalAns == wrongNum[3]){
            //         document.querySelector('.buttonNum4').innerHTML = parseInt(randomBetween(8, 60)) - numberGen(7)
            //    }

        })

    }
})



