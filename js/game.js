class Game{

    letters = [];
    
    letterContainerDiv = document.getElementById('letter-container');

    lettersTracker = [];

    start(){

        var intervalId_1 = setInterval(() => {
            var letter = new Letter();
            this.letters.push(letter);
            this.lettersTracker.push(letter.letter.innerText);
        }, 1000);

        var intervalId_2 = setInterval(() => {
            
            this.letters.forEach((letter)=>{
                letter.move(letter.letter);
            })
        }, 10);

        setTimeout(() => {
            document.addEventListener('keydown', event=>{
        
                if(game.lettersTracker.includes(event.key)){
                    animateKey(event.key);
                }
                else{
                    console.log('does not exist');
                }
        
            });
        }, 1000);

        var intervalId_3 = setInterval(() => {
            this.letters.forEach((letter)=>{
                if(letter.checkForCollision(letter.letter)){
                    // stop all intervals
                    clearInterval(intervalId_1);
                    clearInterval(intervalId_2);
                    clearInterval(intervalId_3);
                    var gameOverDiv = document.getElementById('gameover');
                    gameOverDiv.style.display = "flex";
                }
            })
        }, 1000);

    }

}

let game = new Game();

document.getElementById('start').onclick = () => {

    var scoreBoard = document.getElementById("scoreboard");
    scoreBoard.style.display = "flex";
    var introDiv = document.getElementById("intro");
    introDiv.style.display = "none";
    game.start();

};