//Create afunction playRound to play rps with computer
const div = document.querySelector('div'); 
div.style.color = 'blue';
const p = document.createElement('p');
let yourScore = 0;
let compScore = 0;
function playRound(playerSelection,computerSelection){
    
    let outcome;
    console.log(computerSelection)
    console.log(playerSelection)
    //compare what user and computer selected
    if(playerSelection==='rock'&&computerSelection==='paper'){
        //displayOutcome('You loose! Paper beats Rock');
        //return 'comp';
        compScore += 1; 
    } else if(playerSelection==='rock'&&computerSelection==='scissor'){
        //displayOutcome('You win! Rock beats Scissor');
        //return 'you';
        yourScore += 1;
    }
    else if(playerSelection==='paper'&&computerSelection==='scissor'){
        //displayOutcome('You loose! Scissor beat Paper');
        //return 'comp'; 
        compScore += 1;
    } 
    else if(playerSelection==='paper'&&computerSelection==='rock'){
        //displayOutcome('You win! Paper beats Rock'); 
        //return 'you';
        yourScore += 1;
    }
    else if(playerSelection==='scissor'&&computerSelection==='rock'){
        //displayOutcome('You loose! Rock beats Scissor');         
        //return 'comp';
        compScore += 1;
    }
    else if(playerSelection==='scissor'&&computerSelection==='paper'){
        //displayOutcome('You win! Scissor beats Paper'); 
        //return 'you';
        yourScore += 1;
    } else{
       //displayOutcome('DRAW'); 
       yourScore = yourScore;
    }

    //display score
    if(yourScore === 5){
        displayOutcome("You are the winner!!!" + ' Your score is: ' + yourScore + ' ComputerScore is: ' + compScore);
    } else if (compScore === 5){
        displayOutcome("You loose, computer wins!!!" + ' Your score is: ' + yourScore + ' ComputerScore is: ' + compScore);
    } else {
        displayOutcome('Your score is: ' + yourScore + ' ComputerScore is: ' + compScore);
    } 
}

function displayOutcome(text){
    p.textContent = text;
    div.append(p);
}

//A function computerPlay to decide computer outcome
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



const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', event => {
        playRound(button.id,computerPlay());
        //game();
    });  
});

