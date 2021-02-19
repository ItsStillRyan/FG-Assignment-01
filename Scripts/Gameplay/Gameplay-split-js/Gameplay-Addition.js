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
    }, 64000)
}

//creting an option array
let scoreArray = []

localStorage.setItem("additionHighscore", 1)



//Option stones
let x = document.querySelectorAll('.button-option').length
document.querySelector('.clickStartBtn').addEventListener('click', function () {
    for (let i = 0; i < x; i++) {
        document.querySelectorAll('.button-option')[i].addEventListener('click', function () {
            y = equationGen()
            //numbers in button changer
            document.querySelector('.buttonNum1').innerHTML = parseInt(y.finalAns + (randomBetween(5, 13)))
            document.querySelector('.buttonNum2').innerHTML = parseInt(y.finalAns + (randomBetween(numberGen(4), numberGen(12))))
            document.querySelector('.buttonNum3').innerHTML = parseInt(y.finalAns + (randomBetween(2, 5)))
            document.querySelector('.buttonNum4').innerHTML = parseInt(y.finalAns + (randomBetween(numberGen(20), numberGen(47))))

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

            //getting the random placement
            let placement = placementGen()
            //outputting the answer with a random placement
            document.querySelector(placement.queryClass).innerHTML = y.finalAns

            //showing what the random placement 1
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


            if (triggerValue == answerValue) {
                let scoreIncrement = parseInt(localStorage.getItem("additionHighscore"))
                localStorage.setItem("additionHighscore", ++scoreIncrement)
                console.log(scoreIncrement)
            }

            //geoff image goal changer
            let plus = localStorage.getItem("additionHighscore")
            console.log("scoreup", plus)

            let addSprite = document.querySelector('#geoff-sprite-img')
            if (plus > 0 && plus < 15) {
                addSprite.src = "../../Images/Gameplay/geoff-small.png"
            } else if (plus > 16) {
                addSprite.src = "../../Images/Gameplay/geoff-medium.png"
                addSprite.style.width = "48%"
            }
        })
    }
})



