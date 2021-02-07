//Background Changer
let pausescreen = "url('../../Images/Gameplay/pause-BG.jpg')"
let timesupscreen = "url('../../Images/Gameplay/timesup-BG.jpg')"
let gameoverscreen = "url('../../Images/Menu/main-BG.jpg')"

function screenChange(BG){
    document.body.style.backgroundImage = BG
}
//Background Changer END

function displayToggle(screen1,screen2){
    document.querySelector(screen1).style.cssText = `display: none;`
    document.querySelector(screen2).style.cssText = `display: block`
}
function pauseBG(){
    screenChange(pausescreen)
    displayToggle('.main-gameplay','.pause-screen')
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
window.setTimeout(timesUpScreen, 2000)
//Times Up screen END

//Final Score
window.setTimeout(gameoverScreen, 4000)
//Final Score END


//gameover buttons transitions
document.querySelector('#replayBTN').addEventListener('click', function(){
    document.location.href = 'Gameplay.html'
})

document.querySelector('#highscoreBTN').addEventListener('click', function(){
    document.location.href = 'Highscore.html'
})

document.querySelector('#mainmenuBTN').addEventListener('click',function(){
    document.location.href = 'Menu.html'
})