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

//replacing highscore in database
window.setTimeout(function(){
    let finalSub = localStorage.getItem('subtractionHighscore')
    let finalMul = localStorage.getItem('multiplicationsHighscore')
    let finalDiv = localStorage.getItem('divisionHighscore')
    let finalAdd = localStorage.getItem('additionHighscore')

    document.querySelector('#scoreSubtraction').innerHTML = finalSub
    document.querySelector('#scoreMultiply').innerHTML = finalMul
    document.querySelector('#scoreDivision').innerHTML = finalDiv
    document.querySelector('#scoreAddition').innerHTML = finalAdd

}, 3)
