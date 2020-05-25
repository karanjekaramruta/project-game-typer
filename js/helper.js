//generate random smallcase letter (a-z)
function generateRandomLetter() {

    var randomNum = randomNumber(0, 5);
    return randomNum <= 2 ? String.fromCharCode(randomNumber(65, 90)) : String.fromCharCode((randomNumber(97, 122)));

}

// Function to generate random number
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function animateKey(letter) {
    var letterDiv = document.getElementById("letter-container");
    var paragraph = document.querySelector(`#${letter}`);

    var x = paragraph.offsetLeft;
    var y = paragraph.offsetTop;

    paragraph.style.transition = "all 0.5s linear 0s";
    paragraph.style.left = `${x - 5}px`;
    paragraph.style.top = `${y - 5}px`;
    paragraph.style.fontSize = "2em";
    paragraph.style.opacity = 0;

    letterDiv.removeChild(paragraph);
}