//Gameplay
//Settings
function pauseBG() {
  document.body.style.backgroundImage = "url('../../Images/Gameplay/pause-BG.jpg')";
}


document.querySelector('#pauseBtn').addEventListener('click', function()
{
    document.querySelector('.main-gameplay').style.cssText = `display: none;`
    
    document.querySelector('.pause-screen').style.cssText = `display: block
    `

    pauseBG()
})
