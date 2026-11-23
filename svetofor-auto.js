var redLamp = document.getElementById("redLamp");
var yellowLamp = document.getElementById("yellowLamp");
var greenLamp = document.getElementById("greenLamp");
var statusText = document.getElementById("signalStatus");
var timerText = document.getElementById("timerText");
var pauseButton = document.getElementById("pauseButton");
var restartButton = document.getElementById("restartButton");

// color:
// 0 - красный
// 1 - красный + жёлтый
// 2 - зелёный
// 3 - мигающий зелёный
// 4 - жёлтый

var color = 0;
var seconds = 5;
var paused = false;

// Показывает текущий сигнал
function showLight() {
    // Выключаем все лампы
    redLamp.classList.remove("on");
    yellowLamp.classList.remove("on");
    greenLamp.classList.remove("on");
    greenLamp.classList.remove("blink");

    if (color == 0) {
        redLamp.classList.add("on");
        statusText.textContent = "Красный — стой!";
    }

    if (color == 1) {
        redLamp.classList.add("on");
        yellowLamp.classList.add("on");
        statusText.textContent = "Жди! Скоро зелёный.";
    }

    if (color == 2) {
        greenLamp.classList.add("on");
        statusText.textContent = "Зелёный — иди!";
    }

    if (color == 3) {
        greenLamp.classList.add("on");
        greenLamp.classList.add("blink");   // включаем мигание
        statusText.textContent = "Мигающий зелёный — заканчивай!";
    }

    if (color == 4) {
        yellowLamp.classList.add("on");
        statusText.textContent = "Жёлтый — приготовься!";
    }

    timerText.textContent = "Осталось " + seconds + " секунд";
}

// Переключает на следующий цвет
function nextColor() {
    color = color + 1;

    if (color == 5) {
        color = 0;
    }

    // Красный и зелёный горят дольше
    if (color == 0 || color == 2) {
        seconds = 5;
    } else {
        seconds = 2;
    }
}

// Каждую секунду уменьшаем таймер
setInterval(function () {
    if (paused == false) {
        seconds = seconds - 1;

        if (seconds == 0) {
            nextColor();
        }

        showLight();
    }
}, 1000);

// Показываем первый сигнал при загрузке
showLight();
