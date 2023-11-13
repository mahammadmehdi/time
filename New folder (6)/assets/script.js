const start = document.querySelector(".start")
const reset = document.querySelector(".reset")
const stop1 = document.querySelector(".stop")
const timer = document.querySelector(".time")



 

let totalSeconds = 0
let intervalId;
let isTimer =false;

function pad(num) {
    if (num<10) {
        return "0" +num
    }else{
        return num
    }
}



function updateCounter() {
    totalSeconds++
    let hours = Math.floor(totalSeconds/3600)
    let minutes = Math.floor((totalSeconds%3600)/60)
    let seconds = Math.floor(totalSeconds%60)

    let formattiming = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
    timer.textContent=formattiming
}

start.addEventListener("click",function(){
    if(isTimer){
        return;
    }
    intervalId = setInterval(updateCounter,100);
    isTimer=true;
})
reset.addEventListener("click",function(){
    totalSeconds=0;
    counter.textContent="00:00:00";
    clearInterval(intervalId);
    isTimer=false;
})

stop1.addEventListener("click",function(){

    clearInterval(intervalId);
    isTimer=false;
})
