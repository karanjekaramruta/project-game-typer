class Scorecard {
  constructor(score) {
    this.score = 0;
  }

  render() {
    var scorecardHtml = `<p>Your Score: <span> ${this.score}</span> </p>`;

    var scorecardDiv = document.createElement("div");
    scorecardDiv.innerHTML = scorecardHtml;
    scorecardDiv.setAttribute("id", "scorecard");

    document.body.appendChild(scorecardDiv);
  }

  update() {
    var spanElement = document.querySelector("#scorecard span");
    spanElement.innerHTML = this.score;
  }
}
