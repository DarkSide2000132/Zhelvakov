var redLamp = document.getElementById("redLamp");
var yellowLamp = document.getElementById("yellowLamp");
var greenLamp = document.getElementById("greenLamp");
var statusText = document.getElementById("signalStatus");

function setSignal(color) {
    // Сначала выключаем все лампы
    redLamp.classList.remove("on");
    yellowLamp.classList.remove("on");
    greenLamp.classList.remove("on");
    greenLamp.classList.remove("blink");   // убираем мигание

    // Включаем нужные
    if (color == "red") {
        redLamp.classList.add("on");
        statusText.textContent = "Красный — стой!";
    }

    if (color == "red-yellow") {
        redLamp.classList.add("on");
        yellowLamp.classList.add("on");
        statusText.textContent = "Жди! Скоро зелёный.";
    }

    if (color == "green") {
        greenLamp.classList.add("on");
        statusText.textContent = "Зелёный — иди!";
    }

    if (color == "green-blink") {
        greenLamp.classList.add("on");
        greenLamp.classList.add("blink");   // добавляем мигание
        statusText.textContent = "Мигающий зелёный — заканчивай!";
    }

    if (color == "yellow") {
        yellowLamp.classList.add("on");
        statusText.textContent = "Жёлтый — приготовься!";
    }
}

// При загрузке страницы показываем красный
setSignal("red");
