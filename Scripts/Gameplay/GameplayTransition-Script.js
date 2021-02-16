//Background Changer
var gameplayscreen = "url('../../Images/Gameplay/gameplay-BG.jpg')"
var pausescreen = "url('../../Images/Gameplay/pause-BG.jpg')"
var timesupscreen = "url('../../Images/Gameplay/timesup-BG.jpg')"
var gameoverscreen = "url('../../Images/Menu/main-BG.jpg')"
let settingsscreen = "url('../../Images/Menu/Settings-BG.jpg')"

function screenChange(BG){
    document.body.style.backgroundImage = BG
}
function pageRefresh(){
    window.location.reload();
} 
function displayToggle(screen1,screen2){
    document.querySelector(screen1).style.cssText = `display: none;`
    document.querySelector(screen2).style.cssText = `display: block`
}
function pauseBG(){
    screenChange(pausescreen)
    displayToggle('.main-gameplay','.pause-screen')
}
function unpauseBG(){
    screenChange(gameplayscreen)
    displayToggle('.pause-screen','.main-gameplay')
}
function timesUpScreen(){
    screenChange(timesupscreen)
    displayToggle('.main-gameplay','.timesup-screen')
}
function gameoverScreen(){
    screenChange(gameoverscreen)
    displayToggle('.timesup-screen','.gameover-screen')
}

document.querySelector('#pauseBtn').addEventListener('click', function()
{
    pauseBG()
})

//Times up screen
var primaryTimer = window.setTimeout(timesUpScreen, 65000)
//Times Up screen END

//Final Score
var secondaryTimer = window.setTimeout(gameoverScreen, 68000)
//Final Score END


//gameover buttons transitions
document.querySelector('#replayBTN').addEventListener('click', function(){
    pageRefresh()
})

document.querySelector('#highscoreBTN').addEventListener('click', function(){
    document.location.href = '../Highscore.html'
})

document.querySelector('#mainmenuBTN').addEventListener('click',function(){
    document.location.href = '../../Index.html'
})

//Pause transitions
document.querySelector('#quitBTN').addEventListener('click', function(){
    document.location.href = '../../Index.html'
})

document.querySelector('#resumeBTN').addEventListener('click', function(){
    unpauseBG()
})

//Pause Settings
document.querySelector('#settingsBtn').addEventListener('click', function(){
    displayToggle('.pause-screen', '.settings-screen')
    screenChange(settingsscreen)
})

document.querySelector('#back-Btn').addEventListener('click',function(){
    displayToggle('.settings-screen','.pause-screen')
    screenChange(pausescreen)
})