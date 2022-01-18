

//Get the computer selection
let computerSelection = computerPlay();
console.log(computerSelection);
//let user choose rps
let playerSelection = prompt('Enter rock or paper or scissor').toLowerCase();
console.log(playerSelection);

console.log(playRound(playerSelection,computerSelection));

//Create afunction playRound to play rps with computer
function playRound(playerSelection,computerSelection){
    //Declare outcome string
    let outcome;
    console.log(computerSelection)
    //compare what user and computer selected
    if(playerSelection==='rock'&&computerSelection==='paper'){
        return 'You loose! Paper beats Rock';
    } else if(playerSelection==='rock'&&computerSelection==='scissor'){
        return 'You win! Rock beats Scissor'; 
    }
    else if(playerSelection==='paper'&&computerSelection==='scissor'){
        return 'You loose! Scissor beat Paper'; 
    }
    else if(playerSelection==='paper'&&computerSelection==='rock'){
        return 'You win! Paper beats Rock'; 
    }
    else if(playerSelection==='scissor'&&computerSelection==='rock'){
        return 'You loose! Rock beats Scissor'; 
    }
    else if(playerSelection==='scissor'&&computerSelection==='paper'){
        return 'You win! Scissor beats Paper'; 
    } else{
        return 'DRAW';
    }
}

//A function computerPlay to decide computer outcome
function computerPlay(){
    //Declare variable to store rock/paper/scissor as string
    let selection;
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