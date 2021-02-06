let settingsscreen = "url('../../Images/Menu/Settings-BG.jpg')"
function screenChange(BG){
    document.body.style.backgroundImage = BG
}
function displayToggle(screen1,screen2){
    document.querySelector(screen1).style.cssText = `display: none;`
    document.querySelector(screen2).style.cssText = `display: block`
}

//Main Menu
//Play button
document.querySelector('#playBTN').addEventListener('click', function () {
    displayToggle('.main-menu-screen', '.math-op-screen')
    imageMapResize();
})


//settings button
document.querySelector('#settingsBTN').addEventListener('click', function(){
    displayToggle('.main-menu-screen', '.settings-screen')
    screenChange(settingsscreen)
})



