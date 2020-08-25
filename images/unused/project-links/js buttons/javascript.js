document.getElementById("button1").addEventListener("click", function(){

    document.getElementById("box").style.height = "250px";

});

document.getElementById("button2").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "blue";

});

// The fadeout/fadein code below adapted from a post by Juan Mendes on Stack Overflow. Link here:
https://stackoverflow.com/questions/29017379/how-to-make-fadeout-effect-with-pure-javascript

function fadeOutEffect() {
    var fadeTarget = document.getElementById("box");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 20);
}

document.getElementById("button3").addEventListener('click', fadeOutEffect);

function fadeInEffect() {
    var fadeTarget = document.getElementById("box");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 0.1;
        }
        if (fadeTarget.style.opacity < 1) {
            fadeTarget.style.opacity += 1;
            fadeTarget.style.height = "150px"
            fadeTarget.style.backgroundColor = "orange";
        } else {
            clearInterval(fadeEffect);
        }
    }, 20);
}

document.getElementById("button4").addEventListener('click', fadeInEffect);