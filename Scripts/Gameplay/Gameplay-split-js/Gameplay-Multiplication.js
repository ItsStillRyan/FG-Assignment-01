//Functions
//Number Generators
function numberGen(maxNum){
    let x = Math.floor((Math.random() * maxNum) + 1);
    return x
}
function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}
//Number Generators End


function placementGen() {
    let x = numberGen(4)
    let queryClass = ".buttonNum" + x
    return queryClass
}



//Option stones
let x = document.querySelectorAll('.button-option').length
for (let i = 0; i < x; i++) {
    document.querySelectorAll('.button-option')[i].addEventListener('click', function () {
        //numbers in button changer
        //numbergen + numbergen to shuffle number twice and prevent repeating numbers
        
        document.querySelector('.buttonNum1').innerHTML = numberGen(7) * numberGen(3)
        document.querySelector('.buttonNum2').innerHTML = numberGen(7) * numberGen(4)
        document.querySelector('.buttonNum3').innerHTML = numberGen(7) * numberGen(2)
        document.querySelector('.buttonNum4').innerHTML = numberGen(7) * numberGen(3)

        //equation changer
        let eqNum1 = document.querySelector('#eqNum1').innerHTML = numberGen(6)
        let eqNum2 = document.querySelector('#eqNum2').innerHTML = numberGen(5)

        let finalAns = eqNum1 * eqNum2
        let placement = placementGen()
        document.querySelector(placement).innerHTML = finalAns

        //highscore
        //    let x = document.querySelector('.button-option').value
    })
}
