//Functions
function numberGen(maxNum){
    let x = Math.floor((Math.random() * maxNum) + 1);
    return x
}

function placementGen(){
    let x = numberGen(4)
    let queryClass = '.buttonNum'+ x
    console.log(queryClass)
}


//MAIN TIMER
let startcount = 60;
let counter = setInterval(function(){
    if(startcount <= 0){
        clearInterval(counter)
        document.querySelector("#countdown p").innerHTML = "0"
    } else {
        document.querySelector("#countdown p").innerHTML = startcount
    }
    startcount--;
    
}, 1000);



//Option stones
let x = document.querySelectorAll('.button-option').length
for (let i = 0; i < x; i++){
    document.querySelectorAll('.button-option')[i].addEventListener('click', function(){
        //numbers in button changer
        document.querySelector('.buttonNum1').innerHTML = numberGen(20)
        document.querySelector('.buttonNum2').innerHTML = numberGen(20)
        document.querySelector('.buttonNum3').innerHTML = numberGen(20)
        document.querySelector('.buttonNum4').innerHTML = numberGen(20)

        //equation changer
        let eqNum1 = document.querySelector('#eqNum1').innerHTML = numberGen(10)
        let eqNum2 = document.querySelector('#eqNum2').innerHTML = numberGen(10)
        console.log(eqNum1,eqNum2)
        let finalAns = eqNum1 + eqNum2
        console.log(finalAns)
        // document.getElementsByClassName(placementGen()).innerHTML = finalAns
    })
}

