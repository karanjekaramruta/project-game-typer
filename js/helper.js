//generate random smallcase letter (a-z)
function generateRandomLetter(){
    return String.fromCharCode(randomNumber(97,122));
}

// Function to generate random number  
function randomNumber(min, max) {  
    return Math.random() * (max - min) + min; 
}

