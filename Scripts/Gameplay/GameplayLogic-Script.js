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
    localStorage.setItem("timerCountdown",startcount)
    
}, 1000);


document.querySelector("#pauseBtn").addEventListener('click', function(){
    localStorage.setItem("timerStop",startcount)
    clearTimeout(primaryTimer)
    clearTimeout(secondaryTimer)
})


