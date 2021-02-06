//Main Menu
//Play button
document.querySelector('#playBTN').addEventListener('click', function () {
    //menu page
    document.querySelector('.main-menu-screen').style.cssText = `display: none;`
    //math op screen
    document.querySelector('.math-op-screen').style.cssText =
        `display: block;`

    imageMapResize();
})








