let settingsscreen = "url('../../Images/Menu/Settings-BG.jpg')"
let menuscreen = "url('../../Images/Menu/main-BG.jpg')"
function screenChange(BG) {
    document.body.style.backgroundImage = BG
}
function displayToggle(screen1, screen2) {
    document.querySelector(screen1).style.cssText = `display: none;`
    document.querySelector(screen2).style.cssText = `display: block`
}

//Main Menu
//Play button
document.querySelector('#playBTN').addEventListener('click', function () {
    displayToggle('.main-menu-screen', '.math-op-screen')
    imageMapResize();
})


//settings transitions 
document.querySelector('#settingsBTN').addEventListener('click', function () {
    displayToggle('.main-menu-screen', '.settings-screen')
    screenChange(settingsscreen)
})

document.querySelector('#back-Btn').addEventListener('click', function () {
    displayToggle('.settings-screen', '.main-menu-screen')
    screenChange(menuscreen)
})

//highscore transitions
document.querySelector('#highscoreBTN').addEventListener('click', function () {
    document.location.href = '../HTML/Highscore.html'
})

//language clicks
document.querySelector(".frenchBtn").addEventListener('click', async function () {
    localStorage.setItem("languageSelected", "FR")
    let response = await axios.get('/JSON/French.json')
    console.log(response.data.main_menu.play_button)

    let titleFR = document.querySelector("#titlemain")
    let playFR = document.querySelector("#playmain")
    let OperationsFR = document.querySelector(".math-op")
 // let settingsFR = document.querySelector("#titlemain") 
    let backFR = document.querySelector("#backBtn")

    if (selectedLanguage == "FR") {
        titleFR.src = response.data.main_menu.title
        playFR.src = response.data.main_menu.play_button
        OperationsFR.src = response.data.main_menu.operations_select
        backFR.src = response.data.gameplay.pause_page.back
    } else if (selectedLanguage == "EN"){
        titleFR.src = response.data.main_menu.title
        playFR.src = response.data.main_menu.play_button
        OperationsFR.src = response.data.main_menu.operations_select
        backFR.src = response.data.gameplay.pause_page.back
    }




})
document.querySelector(".englishBtn").addEventListener('click', function () {
    localStorage.setItem("languageSelected", "EN")
})


let selectedLanguage = localStorage.getItem("languageSelected")

async function getData() {

}
getData()






//french swap start

// document.querySelector('.englishBtn').addEventListener('click', async function(){
//     let response = await axios.get('/JSON/French.json')
//     console.log(response.data[0].main_menu.title)
// })

//getting and calling database
//things to change in main page:
//title, play button, operations select, settings board, back

// if (languageChange = true){


// }


