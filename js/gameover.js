class Gameover{

    render(score){

        var gameOverDiv = document.createElement('div');
        var gameoverHtml = `<h1>Game Over!</h1>
        <h2>Your score is: ${score}</h2>
        <p>Click <span> ENTER </span>  <br> to play again !</p>
        `
        gameOverDiv.innerHTML = gameoverHtml;
        gameOverDiv.setAttribute('id', 'gameover');
        gameOverDiv.style.display = "flex";

        document.body.appendChild(gameOverDiv);
    }

    removeAllLetters(){
        var containerDiv = document.getElementById("letter-container");
        containerDiv.querySelectorAll('p').forEach(n => n.remove());
    }

    // remove(){
    //     var gameoverDiv = document.getElementById('gameover');
    //     document.body.removeChild(gameoverDiv);
    // }
}
