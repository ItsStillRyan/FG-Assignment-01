//Functions
function numberGen(maxNum){
    let x = Math.floor((Math.random() * maxNum) + 1);
    return x
}

function placementGen(){
    let x = numberGen(4)
    let queryClass = ".buttonNum"+ x 
    return queryClass
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

        //equation changer
        let eqNum1 = document.querySelector('#eqNum1').innerHTML = numberGen(10)
        let eqNum2 = document.querySelector('#eqNum2').innerHTML = numberGen(10)
    
        let finalAns = eqNum1 + eqNum2
        let placement = placementGen()
        document.querySelector(placement).innerHTML = finalAns

        //highscore
       let x = document.querySelector('.button-option').value
       console.log(x)
        
    })
}
