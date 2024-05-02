function makeBubble() {
    var clutter = "";

    for (var i = 1; i <= 150; i++) {
        var radomNumber = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${radomNumber}</div>`;
    }

    document.querySelector("#pbottom").innerHTML = clutter;
}

var Timer = 60;
function runTimer() {
    var TimerInt = setInterval(function () {
        if (Timer > 0) {
            Timer--;
            document.querySelector("#Timerval").textContent = Timer;
        }
        else {
            clearInterval(TimerInt);
            document.querySelector("#pbottom").innerHTML = `<h1>Game Over....</h1>`;
        }
    }, 1000);
}

var hitrn = 0;
function GetnewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#Hitval").textContent = hitrn;
}

var score = 0;
function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbottom").addEventListener("click", function (details) {
    var clicknum = Number(details.target.textContent);
    if (clicknum == hitrn) {
        increaseScore();
        makeBubble();
        GetnewHit();
    }
});

makeBubble();
runTimer();
GetnewHit();