//FUNCTIONS 
function pauseMusic(){
    audioSource.pause()
}
function resumeMusic(){
    audioSource.play()
}

function languageSwap(response) {
    let selectedLanguage = localStorage.getItem("languageSelected")

    let resumeFR = document.querySelector('#resumeGP')
    let quitFR = document.querySelector('#quitGP')
    let timesUpFR = document.querySelector('#timesupimg')
    let gameoverFR = document.querySelector('#bannerGO')
    let backFR = document.querySelector('.backBtn')
  

    if (selectedLanguage == "FR") {
        document.querySelector('.startText').innerHTML = "CLIQUEZ N'IMPORTE O POUR COMMENCER!"
        document.querySelector('.startText').style.fontSize = "2.2em"
        resumeFR.src = response.data.FR.resume
        quitFR.src = response.data.FR.quit
        timesUpFR.src = response.data.FR.times_up
        gameoverFR.src = response.data.FR.gameover
        backFR.src = response.data.FR.back
     
    } else if (selectedLanguage == "EN") {
        document.querySelector('.startText').innerHTML = "CLICK ANYWHERE TO START!"
        resumeFR.src = response.data.EN.resume
        quitFR.src = response.data.EN.quit
        timesUpFR.src = response.data.EN.times_up
        gameoverFR.src = response.data.EN.gameover
        backFR.src = response.data.EN.back
    }
}

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
    primaryTimer = window.setTimeout(timesUpScreen, 65000)
    secondaryTimer = window.setTimeout(gameoverScreen, 68000)
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


//translator

async function pageReturn(){
    let response = await axios.get('/JSON/French.json')
    console.log(response.data.EN.title, "is this working?") 
    languageSwap(response)
}pageReturn()


//geoff image goal changer
// let plus = localStorage.getItem("additionHighscore")
// let minus = localStorage.getItem("subtractionHighscore")
// let times = localStorage.getItem("multiplicationsHighscore")
// let divide = localStorage.getItem("divisionHighscore")