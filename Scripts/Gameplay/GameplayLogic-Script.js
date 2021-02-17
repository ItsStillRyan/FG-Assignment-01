//MAIN TIMER
let startcount = 60;
var pausedBool = true

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



//starting the clock via inital click
document.querySelector(".clickStartBtn").addEventListener('click', function(){
    let newtime = parseInt(localStorage.getItem("timerStop"))
    localStorage.setItem("timerCountdown", newtime)
    window.setTimeout(timesUpScreen, (newtime * 1000))
    window.setTimeout(gameoverScreen, ((newtime * 1000) + 5000))
    pausedBool = false;
    
})


//stopping the clock via pause
document.querySelector("#pauseBtn").addEventListener('click', function () {
    //collecting last known time + clearing current timeouts
    localStorage.setItem("timerStop", startcount)
    clearTimeout(primaryTimer)
    clearTimeout(secondaryTimer)
    pausedBool = true;

})

//starting the clock via pause
document.querySelector("#resumeBTN").addEventListener('click', function () {
    let newtime = parseInt(localStorage.getItem("timerStop"))
    localStorage.setItem("timerCountdown", newtime)
    window.setTimeout(timesUpScreen, (newtime * 1000))
    window.setTimeout(gameoverScreen, ((newtime * 1000) + 5000))
    pausedBool = false;
})


//audio pause 
var audioSource = document.querySelector('#gameplayAudio')

function pauseMusic(){
    audioSource.pause()
}
function resumeMusic(){
    audioSource.play()
}

