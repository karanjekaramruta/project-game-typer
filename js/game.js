class Game{

    letters = [];
    
    letterContainerDiv = document.getElementById('letter-container');

    lettersTracker = [];

    start(){

        setInterval(() => {
            var letter = new Letter();
            this.letters.push(letter);
            this.lettersTracker.push(letter.letter);
        }, 1000);

        setInterval(() => {
            
            this.letters.forEach((alphabet)=>{
                var paragraph = document.querySelector(`#${alphabet.letter}`);
                alphabet.move(paragraph);
            })
        }, 1000);

    }

    // checkForCollision(letter){

    //     var l = letter.letter;
    //     var letterElement = document.querySelector(`#${l}`);
        
    //     let circle1 = {
    //         x: letterElement.getBoundingClientRect().x,
    //         y: letterElement.getBoundingClientRect().y,
    //         radius:letterElement.offsetWidth / 2
    //     }
        
    //     var circle = document.getElementById('round');
    
    //     let circle2 = {
    //         x:circle.getBoundingClientRect().x,
    //         y:circle.getBoundingClientRect().y,
    //         radius:circle.offsetWidth / 2
    //     }
    
    //     let distanceX = circle2.x - circle1.x;
    //     let distanceY = circle2.y - circle1.y;
    
    //     let sumOfRadii = circle1.radius + circle2.radius;
    
    //     if(Math.pow(distanceX,2) + Math.pow(distanceY,2) <= Math.pow(sumOfRadii,2)) return true;
    
    // }


}

let game = new Game();

document.getElementById('start').onclick = () => {
    game.start();
};

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

function animateKey(letter){

    var letterDiv = document.getElementById('letter-container');
    var paragraph = document.querySelector(`#${letter}`);

    var x = paragraph.offsetLeft;
    var y = paragraph.offsetTop;

    paragraph.style.transition = "all 0.5s linear 0s";
    paragraph.style.left = `${x-5}px`;
    paragraph.style.top = `${y-5}px`;
    paragraph.style.fontSize = `2em`;
    paragraph.style.opacity = 0;

    letterDiv.removeChild(paragraph);
}

// document.addEventListener('keydown', event=>{
//     console.log(this.game.letters);
// })