class Game{

    letters = [];
    
    letterContainerDiv = document.getElementById('letter-container');

    lettersTracker = [];

    start(){

        setInterval(() => {
            var letter = new Letter();
            this.letters.push(letter);
            this.lettersTracker.push(letter.letter.innerText);
        }, 1000);

        setInterval(() => {
            
            this.letters.forEach((letter)=>{
                letter.move(letter.letter);
            })
        }, 1000);

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

        setInterval(() => {
            this.letters.forEach((letter)=>{
                if(letter.checkForCollision(letter.letter)){
                    alert("game over");
                }
            })
        }, 1000);

    }

}

let game = new Game();

document.getElementById('start').onclick = () => {
    game.start();


};