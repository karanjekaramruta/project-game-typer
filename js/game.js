class Game {
    constructor() {
        this.gameOver = new Gameover();
        this.scoreCard = new Scorecard(0);
        this.letters = [];
        this.lettersTracker = [];
        this.gameState = false;
        this.intervals = [];
    }

    start() {
        this.intervals.push(
            setInterval(() => {
                this.renderLetters();
            }, 1000),

            setInterval(() => {
                this.moveLetters();
            }, 10),

            setInterval(() => {
                this.checkCollision();
            }, 1000)
        );

        setTimeout(() => {
            this.validateKey();
        }, 1000);
    }

    renderLetters() {
        var letter = new Letter();
        this.letters.push(letter);
        this.lettersTracker.push(letter.letter.innerText);
    }

    moveLetters() {
        this.letters.forEach((letter) => {
            letter.move(letter.letter);
        });
    }

    validateKey() {
        document.addEventListener("keydown", (event) => {
            if (game.lettersTracker.includes(event.key)) {
                this.scoreCard.score++;
                this.scoreCard.update();
                animateKey(event.key);
            }
        });
    }

    stop() {
        this.intervals.forEach((interval) => {
            clearInterval(interval);
        });

        this.gameOver.render(this.scoreCard.score);
        this.gameOver.removeAllLetters();
        this.gameOver.hideScoreCard();
        this.scoreCard = null;
        this.game = null;
        this.reload();
    }

    reload() {
        document.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                window.location.reload(true);
            }
        });
    }

    checkCollision() {
        this.letters.forEach((letter) => {
            if (letter.checkForCollision(letter.letter)) {
                this.stop();
            }
        });
    }
}

let game = new Game();

document.getElementById("start").onclick = () => {
    game.scoreCard.render();
    document.getElementById("intro").style.display = "none";
    game.start();
};