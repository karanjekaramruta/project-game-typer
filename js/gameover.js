class Gameover {
    render(score) {
        var gameOverDiv = document.createElement("div");
        var gameoverHtml = `<h1>GAME OVER!</h1>
        <h2>You bursted ${score} bubbles </h2>
        <p>Click <span> ENTER </span> to play again !</p>
        `;
        gameOverDiv.innerHTML = gameoverHtml;
        gameOverDiv.setAttribute("id", "gameover");
        gameOverDiv.style.display = "flex";

        document.body.appendChild(gameOverDiv);
    }

    removeAllLetters() {
        var containerDiv = document.getElementById("letter-container");
        containerDiv.querySelectorAll("p").forEach((n) => n.remove());
    }

    hideScoreCard() {
        var scoreCard = document.getElementById("scorecard");
        scoreCard.style.display = "none";
    }
}