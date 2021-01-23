let course = ["C#", "Java", "Javascript", "HTML", "Python", "C++", "PHP"];
let colors = ["orange", "yellowgreen", "cyan", "wheat", "green", "yellow",
    "blue", "red", "pink"
];

let offsets = document.getElementById("anim").getBoundingClientRect();
let animTop = offsets.top + offsets.top * 30 / 100;
let animLeft = offsets.left;
let animRight = offsets.right;
let animBottom = offsets.bottom - offsets.bottom * 39 / 100;

function randText() {
    return course[Math.floor(Math.random() * course.length)];
}

function randColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

/*function moveRight(time, otherText) {
    let text = document.getElementById("animRight");
    text.innerHTML = otherText;
    text.style.top = "25%";
    fadeIn(text);
    let start = Date.now();
    let timer = setInterval(function() {
        let interval = Date.now() - start;
        let textOffset = text.getBoundingClientRect();
        if (textOffset.left < animLeft)
            text.style.right = interval / 5 - "px";
        else
            text.style.right = interval / 5 + 'px';

        if (interval > time) {
            clearInterval(timer);
            fadeOut(text);
        }

    }, 20);
}

function moveBottom(time, otherText) {
    let text = document.getElementById("animBottom");
    text.innerHTML = otherText;
    fadeIn(text);
    let start = Date.now();
    let timer = setInterval(function() {
        let interval = Date.now() - start;
        let textOffset = text.getBoundingClientRect();
        if (textOffset.bottom < animBottom)
            text.style.top = interval / 5 + 'px';
        else
            text.style.top = interval / 5 - 'px';

        if (interval > time) {
            clearInterval(timer);
            fadeOut(text);
        }

    }, 20);
}

function moveTop(time, otherText) {
    let text = document.getElementById("animTop");
    text.innerHTML = otherText;
    fadeIn(text);
    let start = Date.now();
    let timer = setInterval(function() {
        let interval = Date.now() - start;
        let textOffset = text.getBoundingClientRect();
        if (textOffset.top < animTop)
            text.style.bottom = interval / 5 - 'px';
        else
            text.style.bottom = interval / 5 + 'px';

        if (interval > time) {
            clearInterval(timer);
            fadeOut(text);
        }

    }, 20);
}

function moveLeft(time, otherText) {
    let text = document.getElementById("animLeft");
    text.innerHTML = otherText;
    text.style.top = "25%";
    fadeIn(text);
    let start = Date.now();
    let timer = setInterval(function() {
        let interval = Date.now() - start;
        let textOffset = text.getBoundingClientRect();
        if (textOffset.right > animRight)
            text.style.left = interval / 5 - 'px';
        else
            text.style.left = interval / 5 + 'px';

        if (interval > time) {
            clearInterval(timer);
            fadeOut(text);
        }

    }, 20);
}*/

function textFade(time, otherText, otherColor) {
    let text = document.getElementById("animRight");
    text.innerHTML = otherText;
    text.style.color = otherColor;
    text.style.top = "17%";
    if (text.innerHTML.length < 4)
        text.style.left = "35%";
    else if (text.innerHTML.length < 5)
        text.style.left = "30%";
    else if (text.innerHTML.length < 7)
        text.style.left = "25%";
    else
        text.style.left = "15%";

    fadeIn(text);

    let start = Date.now();
    let timer = setInterval(function() {
        let interval = Date.now() - start;

        if (interval > time) {
            clearInterval(timer);
            fadeOut(text);
        }

    }, 20);
}

function fadeOut(element) {
    var op = 1; // initial opacity
    var timer = setInterval(function() {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function fadeIn(element) {
    var op = 0.1; // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function() {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 50);
}


function start() {
    textFade(2000, randText(), randColor());
    setInterval(() => {
        textFade(2000, randText(), randColor());
    }, 4000);
}