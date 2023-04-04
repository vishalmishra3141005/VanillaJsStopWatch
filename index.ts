
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

let currIndex = 1;

let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");
let lapButton = document.getElementById("lap");


let lapContainer = document.getElementById("lap-container");
let cid: number;

startButton!.addEventListener("click", function(e) {
    startButton!.style.display = "none";
    stopButton!.style.display = "inline";
    cid = setInterval(handleTime, 1000);
});

stopButton?.addEventListener("click", function(e) {
    clearInterval(cid);
    stopButton!.style.display = "none";
    startButton!.style.display = "inline";
});

resetButton?.addEventListener("click", function(e) {
    clearInterval(cid);
    startButton!.style.display = "inline";
    stopButton!.style.display = "none"
    hour!.innerText = "00";
    minute!.innerText = "00";
    second!.innerText = "00";

    while (lapContainer?.firstChild) {
        lapContainer.removeChild(lapContainer?.lastChild as Node);
    }
    currIndex = 1;
});

lapButton?.addEventListener("click", function(e) {
    let newElement = document.createElement("div");
    newElement.setAttribute("class", "lap");
    
    let currSecond = second!.innerText;
    let currMinute = minute!.innerText;
    let currHour = hour!.innerText;

    newElement.innerHTML = `<span>${currIndex}</span><span> ${currHour}:${currMinute}:${currSecond}</span>`;
    lapContainer?.appendChild(newElement);
    currIndex++;
});

function handleTime() {
    let currSecond = parseInt(second!.innerText);
    let currMinute = parseInt(minute!.innerText);
    let currHour = parseInt(hour!.innerHTML);

    currSecond += 1;
    if (currSecond == 60) {
        currMinute += 1;
    }
    
    if (currMinute == 60) {
        currHour += 1;
    }

    currSecond %= 60;
    currMinute %= 60;

    second!.innerText = currSecond.toString();
    minute!.innerText = currMinute.toString();
    hour!.innerText = currHour.toString();
}