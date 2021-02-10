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

function placementGen(){
    let x = numberGen(4)
    let queryClass = ".buttonNum"+ x 
    return queryClass
}

function equationGenDivision(){
    let a = parseInt(randomBetween(10,20))
    let b = parseInt(randomBetween(1,10))
    while(a % b != 0){
        a = parseInt(randomBetween(10,20))
        b = parseInt(randomBetween(1,10))
    }
    return{
        'Num1': a,
        'Num2': b
    }
}

//Option stones
let x = document.querySelectorAll('.button-option').length
for (let i = 0; i < x; i++){
    document.querySelectorAll('.button-option')[i].addEventListener('click', function(){
        //numbers in button changer
        //numbergen + numbergen to shuffle number twice and prevent repeating numbers
        document.querySelector('.buttonNum1').innerHTML = numberGen(20) + numberGen(5)
        document.querySelector('.buttonNum2').innerHTML = numberGen(20) - numberGen(5)
        document.querySelector('.buttonNum3').innerHTML = numberGen(20) + numberGen(5)
        document.querySelector('.buttonNum4').innerHTML = numberGen(20) - numberGen(5)

        let eqValues = equationGenDivision()
        //equation changer
        console.log(eqValues)
        let eqNum1 = document.querySelector('#eqNum1').innerHTML = eqValues.Num1
        let eqNum2 = document.querySelector('#eqNum2').innerHTML = eqValues.Num2
    
        let finalAns = eqNum1 / eqNum2
        let placement = placementGen()
        document.querySelector(placement).innerHTML = finalAns
    })
}


