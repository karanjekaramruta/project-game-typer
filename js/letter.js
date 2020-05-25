class Letter {
    letter = null;

    constructor() {
        this.letter = this.renderLetter(generateRandomLetter());
    }

    renderLetter(letter) {
        var paragraph = document.createElement("p");
        paragraph.setAttribute("id", letter);
        paragraph.setAttribute("class", "letter");
        paragraph.innerText = letter;

        var randomNum = randomNumber(1, 10);

        if (randomNum <= 5) {
            paragraph.style.left = "-50px";
            paragraph.style.top = `${Math.round(
        Math.random() * window.innerHeight
      )}px`;
        } else {
            paragraph.style.left = "1727px";
            paragraph.style.top = `${Math.round(
        Math.random() * window.innerHeight
      )}px`;
        }

        document.getElementById("letter-container").appendChild(paragraph);

        return paragraph;
    }

    getCircleDetails() {
        var circle = document.getElementById("round");
        return `${circle.offsetLeft}:${circle.offsetTop}`;
    }

    move(letter) {
        randomNumber(1, 10) <= 5 ?
            this.getLettersFromLeft(letter) :
            this.getLettersFromRight(letter);
    }

    getLettersFromLeft(letter) {
        var letterX = letter.offsetLeft;
        var letterY = letter.offsetTop;

        var circleXY = this.getCircleDetails().split(":");

        var dx = Number(circleXY[0]) - letterX;
        var dy = Number(circleXY[1]) - letterY;

        var dh = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));

        letter.style.left = `${letterX + (3 * dx) / dh}px`;
        letter.style.top = `${letterY + (1 * dy) / dh}px`;
    }

    getLettersFromRight(letter) {
        var letterX = letter.offsetLeft;
        var letterY = letter.offsetTop;

        var circleXY = this.getCircleDetails().split(":");

        var dx = Number(circleXY[0]) - letterX;
        var dy = Number(circleXY[1]) - letterY;

        var dh = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));

        //for right
        letter.style.left = `${letterX + (3 * dx) / dh}px`;
        letter.style.top = `${letterY + (1 * dy) / dh}px`;
    }

    checkForCollision(letterElement) {
        let circle1 = {
            x: letterElement.offsetLeft,
            y: letterElement.offsetTop,
            radius: letterElement.offsetWidth / 2,
        };

        var circle = document.getElementById("round");

        let circle2 = {
            x: circle.offsetLeft,
            y: circle.offsetTop,
            radius: circle.offsetWidth / 2,
        };

        let distanceX = circle2.x - circle1.x;
        let distanceY = circle2.y - circle1.y;

        let sumOfRadii = circle1.radius + circle2.radius;

        if (
            Math.pow(distanceX, 2) + Math.pow(distanceY, 2) <=
            Math.pow(sumOfRadii, 2)
        )
            return true;
    }
}