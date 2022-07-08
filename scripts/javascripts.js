console.log(game());

//Create afunction playRound to play rps with computer
function playRound(playerSelection,computerSelection){
    //Declare outcome string
    let outcome;
    console.log(computerSelection)
    console.log(playerSelection)
    //compare what user and computer selected
    if(playerSelection==='rock'&&computerSelection==='paper'){
        console.log('You loose! Paper beats Rock');
        return 'comp';
    } else if(playerSelection==='rock'&&computerSelection==='scissor'){
        console.log('You win! Rock beats Scissor'); 
        return 'you';
    }
    else if(playerSelection==='paper'&&computerSelection==='scissor'){
        console.log('You loose! Scissor beat Paper');
        return 'comp'; 
    }
    else if(playerSelection==='paper'&&computerSelection==='rock'){
        console.log('You win! Paper beats Rock'); 
        return 'you';
    }
    else if(playerSelection==='scissor'&&computerSelection==='rock'){
        console.log('You loose! Rock beats Scissor'); 
        return 'comp';
    }
    else if(playerSelection==='scissor'&&computerSelection==='paper'){
        console.log('You win! Scissor beats Paper'); 
        return 'you';
    } else{
        console.log('DRAW');
        return 'draw';
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

//a function game that will play 5 rounds of rps
function game(){

    //Variables for the player scores
    let yourScore = 0;
    let compScore = 0;
    let computerSelection;
    let playerSelection;
    let outcome;
    //loop through playRound five times
    //for(i = 1; i <=5; i++){
        //Get the computer selection
    computerSelection = computerPlay();
        //let user choose rps
    playerSelection = prompt('Enter rock or paper or scissor').toLowerCase();
    outcome = playRound(playerSelection,computerSelection);
        //update score depending of outcome
    if(outcome === 'you'){
        yourScore += 1;
    } else if(outcome === 'comp'){
        compScore += 1;
    }        
    //}
    
    //return the winner of the 5 rounds
    if(yourScore > compScore){
        return 'YOU ARE THE WINNER';
    } else if(compScore > yourScore){
        return 'You looose :('
    } else{
        return 'draaaw...'
    }
}



