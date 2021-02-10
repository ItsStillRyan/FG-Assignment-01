//Functions

function numberGen(maxNum) {
    let x = Math.floor((Math.random() * maxNum) + 1);
    return x
}

function place(){
    let y = numberGen(4)
    return y
}
function placementGen() {
    let queryClass = ".buttonNum" + place()
    return queryClass
}

//staging for score counter
function btnTriggerValue() {
    let queryClass = ".btnTrig" + place()
    return queryClass
}

function positionCatch(){
    let btnValue = document.querySelector(".btnTrig2").value
    console.log(btnValue)
    
}


function randomBetween(min, max){
  return Math.random() * (max - min) + min;
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

        //Equation
        let eqNum1 = parseInt(randomBetween(15, 30))
        let eqNum2 = parseInt(randomBetween(1, 15))
        document.querySelector('#eqNum1').innerHTML = eqNum1
        document.querySelector('#eqNum2').innerHTML = eqNum2

        let finalAns = eqNum1 - eqNum2
        let placement = placementGen()
        document.querySelector(placement).innerHTML = finalAns
       
        //trigger value catch
        
    })
}

