//Background Changer
let pausescreen = "url('../../Images/Gameplay/pause-BG.jpg')"
let timesupscreen = "url('../../Images/Gameplay/timesup-BG.jpg')"

function screenChange(BG){
    document.body.style.backgroundImage = BG
}
//Background Changer END

//Settings
document.querySelector('#pauseBtn').addEventListener('click', function()
{
    document.querySelector('.main-gameplay').style.cssText = `display: none;`
    
    document.querySelector('.pause-screen').style.cssText = `display: block`

    pauseBG()
})
//Settings END

//Times up screen
function timesUpScreen(){
    screenChange(timesupscreen)

    document.querySelector('.main-gameplay').style.cssText = `display: none;`

    document.querySelector('.timesup-screen').style.cssText = `display: block`

}

window.setTimeout(timesUpScreen, 3000)


