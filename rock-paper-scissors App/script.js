let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');




function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
// console.log(getCompChoice());

function convertionToWords(letter) {
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    return "Scissors";
}

function win(userChoice, compChoice) {
 const tinyUser = "user".fontsize(3);
 const tinyComp = "comp".fontsize(3);
 const userChoice_div = document.getElementById(userChoice);
 userScore++
 userScore_span.innerHTML = userScore;
 compScore_span.innerHTML = compScore;
 result_p.innerHTML = `${convertionToWords(userChoice)}${tinyUser} beats ${convertionToWords(compChoice)}${tinyComp} You WIN!`;
 userChoice_div.classList.add('success');
 setTimeout(() => userChoice_div.classList.remove('success'), 700);

}

function lose(userChoice, compChoice) {
 const tinyUser = "user".fontsize(3);
 const tinyComp = "comp".fontsize(3);
 const userChoice_div = document.getElementById(userChoice);
 compScore++
 userScore_span.innerHTML = userScore;
 compScore_span.innerHTML = compScore;
 result_p.innerHTML = `${convertionToWords(userChoice)}${tinyUser} loses to ${convertionToWords(compChoice)}${tinyComp} You Lost!`;
 userChoice_div.classList.add('danger');
 setTimeout(() => userChoice_div.classList.remove('danger'), 700);
    
}

function draw(userChoice, compChoice) {
 const tinyUser = "user".fontsize(3);
 const tinyComp = "comp".fontsize(3);
 const userChoice_div = document.getElementById(userChoice);
 result_p.innerHTML = `${convertionToWords(userChoice)}${tinyUser} equals ${convertionToWords(compChoice)}${tinyComp} It's a Tie!`;
 userChoice_div.classList.add('draw');
 setTimeout(() => userChoice_div.classList.remove('draw'), 700);  
}


function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
        win(userChoice, compChoice);    
        break;
        case 'rp':
        case 'ps':    
        case 'sr':
        lose(userChoice, compChoice);
        break;
        case 'rr':
        case 'pp':    
        case 'ss':
        draw(userChoice, compChoice);    
        break;
    }
}
// game('q');

function main() {
  rock_div.addEventListener('click',() => game('r'));
  paper_div.addEventListener('click',() => game('p'));
  scissors_div.addEventListener('click',() => game('s'));
}

main();