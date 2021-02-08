//Functions
function numberGen(maxNum){
    let x = Math.floor((Math.random() * maxNum) + 1);
    return x
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

document.querySelector(".button-option1").addEventListener('click', function(){ 
    document.querySelector('.buttonNum1').innerHTML = numberGen(20)
})
document.querySelector(".button-option2").addEventListener('click', function(){ 
    document.querySelector('.buttonNum2').innerHTML = numberGen(20)

})
document.querySelector(".button-option3").addEventListener('click', function(){ 
    document.querySelector('.buttonNum3').innerHTML = numberGen(20)

})
document.querySelector(".button-option4").addEventListener('click', function(){ 
    document.querySelector('.buttonNum4').innerHTML = numberGen(20)

})

