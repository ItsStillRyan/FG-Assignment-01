let startcount = 60;
let counter = setInterval(function(){
    if(startcount <= 0){
        clearInterval(counter)
        document.querySelector("#countdown p").innerHTML = "TIMES UP!"
    } else {
        document.querySelector("#countdown p").innerHTML = startcount
    }
    startcount--;
    
}, 1000);