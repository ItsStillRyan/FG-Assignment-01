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




