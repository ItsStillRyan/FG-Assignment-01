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



let x = document.querySelectorAll('.button-option').length

console.log(x)


for (let i = 0; i < x; i++){
    document.querySelectorAll(".button-option")[i].addEventListener('click', function(){
        document.querySelector(".buttonNum1").innerHTML = numberGen(20)
        document.querySelector(".buttonNum2").innerHTML = numberGen(20)
        document.querySelector(".buttonNum3").innerHTML = numberGen(20)
        document.querySelector(".buttonNum4").innerHTML = numberGen(20)
    })
}

