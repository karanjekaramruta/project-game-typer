

function getLettersFromLeft(letter){

    var letterX = letter.offsetLeft;
    var letterY = letter.offsetTop;

    var circle = document.getElementById('round');
    var circleX = circle.offsetLeft;
    var circleY = circle.offsetTop;

    var dx = circleX - letterX;
    var dy = circleY - letterY;
    var dh = Math.sqrt(Math.pow(dx, 2)+ Math.pow(dy, 2));

    letter.style.left = `${letter.offsetLeft + 60 * dx/dh}px`;
    letter.style.top = `${letter.offsetTop + 20 * dy/dh}px`;

}

function getLettersFromRight(letter){

    var letterX = letter.offsetLeft;
    var letterY = letter.offsetTop;

    var circle = document.getElementById('round');
    var circleX = circle.offsetLeft;
    var circleY = circle.offsetTop;

    var dx = circleX - letterX;
    var dy = circleY - letterY;
    var dh = Math.sqrt(Math.pow(dx, 2)+ Math.pow(dy, 2));

    //for right
    letter.style.left = `${letter.offsetLeft + 90 * dx/dh}px`;
    letter.style.top = `${letter.offsetTop + 40 * dy/dh}px`;
}


var alphabetArray = [];
var startBtn = document.getElementById('start');


startBtn.addEventListener('click', (event)=>{

    //generate random letter
    //Populate array of alphabets
    //create a paragraph element with innerText = alphabet and append to container div

    setInterval(()=>{
        var alphabet = generateRandomLetter();
    
        var paragraph = document.createElement('p');
        paragraph.setAttribute('id',alphabet);
        paragraph.setAttribute('class', 'letter');
        paragraph.innerText = alphabet;

        var randomNum = randomNumber(1,10);

        if (randomNum <= 5) {
        
            //move from left
            paragraph.style.left = "-10px";
            paragraph.style.top = `${Math.round(Math.random() * window.innerHeight)}px`;
        } 
        else{
            
            //move letters from right
            paragraph.style.left = "1727px";
            paragraph.style.top = `${Math.round(Math.random() * window.innerHeight)}px`;
        }


        this.alphabetArray.push(alphabet);
        
        var letterContainer = document.getElementById('letter-container');
        letterContainer.appendChild(paragraph);

    },1000)

    //select all letters attached to letter-container and start moving towards center;
    setInterval(()=>{
        var letterDiv = document.getElementById('letter-container');
        var letters = letterDiv.querySelectorAll('p');
    
        letters.forEach(letter =>{
            letter.style.display="block";
            renderLetter(letter); 
        })
    },1000)

    function renderLetter(letter){

        var randomNum = randomNumber(1,10);

        (randomNum <=5) ? getLettersFromLeft(letter) : getLettersFromRight(letter);             
        
    }

    setInterval(() => {

        for(let i=0;i<this.alphabetArray.length;i++){
            if(checkForCollision(this.alphabetArray[i])){
                alert("game over!");
            }
            window.stop();
        }
    }, 1000);
});

setTimeout(() => {
    document.addEventListener('keydown', event=>{

        if(this.alphabetArray.includes(event.key)){
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

function checkForCollision(letter){

    var letterElement = document.querySelector(`#${letter}`);
    
    let circle1 = {
        x: letterElement.getBoundingClientRect().x,
        y: letterElement.getBoundingClientRect().y,
        radius:letterElement.offsetWidth / 2
    }
    
    var circle = document.getElementById('round');

    let circle2 = {
        x:circle.getBoundingClientRect().x,
        y:circle.getBoundingClientRect().y,
        radius:circle.offsetWidth / 2
    }

    let distanceX = circle2.x - circle1.x;
    let distanceY = circle2.y - circle1.y;

    let sumOfRadii = circle1.radius + circle2.radius;

    if(Math.pow(distanceX,2) + Math.pow(distanceY,2) <= Math.pow(sumOfRadii,2)) return true;

}

