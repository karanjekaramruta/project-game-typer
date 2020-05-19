function calculateAngle(letter){

    var letterX = letter.getBoundingClientRect().x;
    var letterY = letter.getBoundingClientRect().y;

    var circle = document.getElementById('round');
    var circleX = circle.getBoundingClientRect().x;
    var circleY = circle.getBoundingClientRect().y;

    var dx = circleX - letterX;
    var dy = circleY - letterY;

    var angle = Math.atan2(dy,dx);

    return angle;
}

function move(letter, angle){

    letter.style.left = `${letter.offsetLeft + 20 * Math.cos(Math.abs(angle))}px`;
    letter.style.top = `${letter.offsetTop + 20 * Math.sin(Math.abs(angle))}px`;

    // letter.style.left = `${letter.offsetLeft + randomNumber(1,100) * Math.cos(Math.abs(angle))}px`;
    // letter.style.top = `${letter.offsetTop + randomNumber(1,20) * Math.sin(Math.abs(angle))}px`;
}


//generate random smallcase letter (a-z)
function generateRandomLetter(){
    return String.fromCharCode(randomNumber(97,122));
}

// Function to generate random number  
function randomNumber(min, max) {  
    return Math.random() * (max - min) + min; 
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
        paragraph.style.left = "-10px";
        paragraph.style.top = `${Math.round(Math.random() * window.innerHeight)}px`;
        this.alphabetArray.push(alphabet);
        
        var letterContainer = document.getElementById('letter-container');
        letterContainer.appendChild(paragraph);

    },1000)

    //select all letters attached to letter-container and start moving towards center;
    setInterval(()=>{
        var letterDiv = document.getElementById('letter-container');
        var letters = letterDiv.querySelectorAll('p');
    
        letters.forEach(letter =>{
            var angle = calculateAngle(letter);
            //console.log(angle);
            letter.style.display="block";
            move(letter,angle);            
        })
    },1000)

    setInterval(() => {
        this.alphabetArray.forEach((alphabet)=>{
            if(checkForCollision(alphabet)){
                alert("Game Over!!");
            };
        })
    }, 1000);
});

setTimeout(() => {
    document.addEventListener('keydown', event=>{
        console.log(event.key);
        console.log(this.alphabetArray);

        if(this.alphabetArray.includes(event.key)){
            console.log('exists');
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
    paragraph.style.left = `${x}-5px`;
    paragraph.style.top = `${y}-5px`;
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

