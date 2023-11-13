const startBtn = document.querySelector(".start")
const stopBtn = document.querySelector(".Stop")
const continueBtn = document.querySelector(".Continue")
const input = document.querySelector("input")
const timer = document.querySelector(".time")




totalValue=input.value
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
    totalValue--
    let minutes = Math.floor(totalValue/60)
    let seconds = Math.floor(totalValue%60)

    let formattiming = pad(minutes) + ":" + pad(seconds);
    timer.textContent=formattiming;
    
}
startBtn.addEventListener("click",function(){
    
    if(isTimer){
        return;
    }
    let totalValue =parseInt(input.value);

    if(totalValue<=0 && isNaN(totalValue)){
        clearInterval(alert("duzgun eded daxil edin"))
    }
    
    intervalId = setInterval(updateCounter,100);
    isTimer=true;
})




//-----------------------------------------------------------------------------------------------------------------------
