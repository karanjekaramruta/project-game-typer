class Scorecard{

    constructor(score){
        this.score = 0;
    }


    render(score){
        var scorecardHtml = `<p>Your Score: <span>${score}</span> </p>`;

        var scorecardDiv = document.createElement('div');
        scorecardDiv.innerHTML = scorecardHtml;
        scorecardDiv.setAttribute('id', 'scorecard');

        document.body.appendChild(scorecardDiv);
    }

}