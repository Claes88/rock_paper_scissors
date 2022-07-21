//Elements that will be changed in the rps 
const divYou = document.querySelector("#yourscore");
const divComp = document.querySelector("#compscore");
const hYou = document.createElement('h2');
const hComp = document.createElement('h2');

const div = document.querySelector('#outcome'); 
div.style.color = '#232B2B';
const p = document.createElement('p');

let yourScore = 0;
let compScore = 0;

displayScore(yourScore,compScore);

//function to update the score based on selection
function playRound(playerSelection,computerSelection){
    
    let outcome;
    console.log(computerSelection)
    console.log(playerSelection)
    //compare what user and computer selected
    if(playerSelection==='rock'&&computerSelection==='paper'){
        displayOutcome('  +1 to Computer! Paper beats Rock');
        compScore += 1; 
    } else if(playerSelection==='rock'&&computerSelection==='scissor'){
        displayOutcome('  +1 to you! Rock beats Scissor');
        yourScore += 1;
    }
    else if(playerSelection==='paper'&&computerSelection==='scissor'){
        displayOutcome('  +1 to Computer! Scissor beat Paper');
        compScore += 1;
    } 
    else if(playerSelection==='paper'&&computerSelection==='rock'){
        displayOutcome('  +1 to you!! Paper beats Rock'); 
        yourScore += 1;
    }
    else if(playerSelection==='scissor'&&computerSelection==='rock'){
        displayOutcome('  +1 to Computer! Rock beats Scissor');         
        compScore += 1;
    }
    else if(playerSelection==='scissor'&&computerSelection==='paper'){
        displayOutcome('  +1 to you!! Scissor beats Paper'); 
        yourScore += 1;
    } else{
       yourScore = yourScore;
    }

    //display score
    if(yourScore === 5){
        displayOutcome("You are the winner!!!");
    } else if (compScore === 5){
        displayOutcome("You loose, computer wins!!!");
    } 
    
    displayScore(yourScore,compScore);
     
}

//displays the outcome of the round or potential winner
function displayOutcome(text){
    p.textContent = text;
    div.append(p);
}

//displays current score
function displayScore(yourScore, compScore){
    hYou.textContent = yourScore;
    hComp.textContent = compScore;
    divYou.append(hYou);
    divComp.append(hComp);
}

//A function to decide computer outcome
function computerPlay(){
    //Generate a random number, only three different outcomes
    let number = Math.floor(Math.random()*3);
    //decide rock/paper/scissor based on number
    if(number === 0){
        return 'rock';
    } else if(number === 1){
        return 'paper';
    } else{
        return 'scissor';
    }
}

function eventOutcome(ev){
    console.log(ev);
}

//eventlistener for the buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', event => {
        playRound(button.id,computerPlay());
    });  
});

