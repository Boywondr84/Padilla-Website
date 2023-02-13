// Header animation
var i = 0;
var txt = 'Johnny Padilla';
var speed = 267;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("intro").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload=typeWriter();
