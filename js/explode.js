var paragraph = document.querySelector('p');

document.addEventListener('keydown', (event)=>{
    console.log(event);
    console.log(event.key);
    paragraph.setAttribute('class','minicircle')

})

// function explode(){
//     var particles = 25;

//     var explosionDiv = document.createElement('div');
//     explosionDiv.setAttribute('class', 'explosion');
// }