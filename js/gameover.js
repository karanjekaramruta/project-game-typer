class Gameover {
  render(score) {
    var gameOverDiv = document.createElement("div");
    var gameoverHtml = `<h1>GAME OVER!</h1>
        <h2><span style="font-size: 25px;">&#127942;</span>You bursted ${score} bubble(s) <span style="font-size: 25px;">&#127942;</span></h2>
        <p>Click <span class="key"> ENTER </span> to play again !</p>
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
