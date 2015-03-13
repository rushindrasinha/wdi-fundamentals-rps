/* This code has been written by Dr Rushindra Sinha ||RS||
For the WDI - Fundamentals assignment by General Assembly.
March - June Cohort (Santa Monica, CA) */


'use strict';
// This first function is to get the users input ||RS||
function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}

// This function is to generate a random pick for the computer based on a 33.33% chance or R , P or S ||RS||
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// This function gets and returns the players move ||RS||
function getPlayerMove(move) {
    if (move === true) {

    }
    else {
        move = getInput();
    }

    return move;
}

// This function gets and returns the computers move ||RS||
function getComputerMove(move) {
    if (move === true) {

    }
    else {
        move = randomPlay();
    }
    return move;
}

// This function tracks and compares both player and computer input to return the winner ||RS||
function getWinner(playerMove,computerMove) {
    var win;

    if ((playerMove === 'rock' && computerMove === 'paper')
        || (playerMove === 'paper' && computerMove === 'scissors')
        || (playerMove === 'scissors' && computerMove === 'rock')) {
        win = 'computer';
    }
    else if ((playerMove === 'rock' && computerMove === 'scissors')
            || (playerMove === 'paper' && computerMove === 'rock')
            || (playerMove === 'scissors' && computerMove === 'paper')) {
    win = 'player';
    }
    else if (playerMove === computerMove) {
        win = 'tie';
    }

    console.log("You chose " + playerMove + " and your opponent chose " + computerMove + " so clearly the winner is ");
    return win;
}

// This function allows the game to continue till either player or computer have won 5 times ||RS||
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var result;

    while (playerWins < 5 && computerWins < 5) {
        result = getWinner(getPlayerMove(), getComputerMove());

    if (result === 'player') {
        playerWins++;
        console.log('You!');
    }
    else if (result === 'computer') {
        computerWins++;
        console.log('Computer!');
    }
    else {
        console.log('tie!');
    }

    console.log("The score is currently " + playerWins + " to " + computerWins + "\n");

    }

    return [playerWins, computerWins];
}

playToFive();