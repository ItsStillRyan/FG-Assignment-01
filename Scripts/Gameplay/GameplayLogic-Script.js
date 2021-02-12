//MAIN TIMER
let startcount = 60;
var pausedBool = false

counter = setInterval(function(){
    if (!pausedBool) {
        if (startcount <= 0) {
            clearInterval(counter)
            document.querySelector("#countdown p").innerHTML = "0"
        } else {
            document.querySelector("#countdown p").innerHTML = startcount
        }
        startcount--;
        localStorage.setItem("timerCountdown", startcount)
    }

}, 1000)





//stopping the clock
document.querySelector("#pauseBtn").addEventListener('click', function () {
    //collecting last known time + clearing current timeouts
    localStorage.setItem("timerStop", startcount)
    clearTimeout(primaryTimer)
    clearTimeout(secondaryTimer)
    pausedBool = true;

})

//starting the clock
document.querySelector("#resumeBTN").addEventListener('click', function () {
    let newtime = parseInt(localStorage.getItem("timerStop"))
    localStorage.setItem("timerCountdown", newtime)
    window.setTimeout(timesUpScreen, (newtime * 1000))
    window.setTimeout(timesUpScreen, ((newtime * 1000) + 3000))
    pausedBool = false;
})


