'use strict';

const gameObjects = ['rock', 'paper', 'scissors'];

function computerPlay () {
  const computerPick = gameObjects[Math.floor(Math.random() * gameObjects.length)];
  return computerPick;
}

// const playerInput = prompt(`Let's play Rock, Paper and Scissors! \n Please type in one of the following: \n (1) Rock \n (2) Paper \n (3) Scissors`).toLowerCase();

function playRound(playerSelection, computerSelection) {
//  What to do to play one round? 

// compare player selection to computer selection 

if (playerSelection === gameObjects[0] && computerSelection === gameObjects[2]) {
    return(`You selected: ${playerSelection} \n Computer selected: ${computerSelection} \n You have won! Rock beats Scissors!`)
} else if (playerSelection === gameObjects[1] && computerSelection === gameObjects[0]) {
    return(`You selected: ${playerSelection} \n Computer selected: ${computerSelection} \n You have won! Paper beats Rock!`) }
else if (playerSelection === gameObjects[2] && computerSelection === gameObjects[1]) {
    return(`You selected: ${playerSelection} \n Computer selected: ${computerSelection} \n You have won! Scissors beat Paper!`)
} else if (computerSelection === gameObjects[0] && playerSelection === gameObjects[2]) {
    return(`You selected: ${playerSelection} \n Computer selected: ${computerSelection} \n You lost! Rock beats Scissors!`)
} else if (computerSelection === gameObjects[1] && playerSelection === gameObjects[0]) {
    return(`You selected: ${playerSelection} \n Computer selected: ${computerSelection} \n You lost! Paper beats Rock!`) }
else if (computerSelection === gameObjects[2] && playerSelection === gameObjects[1]) {
    return(`You selected: ${playerSelection} \n Computer selected: ${computerSelection} \n You lost! Scissors beat Paper!`)
} else {
    return(`You selected: ${playerSelection} \n Computer selected: ${computerSelection} \n It's a tie!`)
}
}

function game() {
    let playerScore=0;
    let computerScore=0;
    for (let i=0; i <=4; i++) {
        const playerGameInput = prompt(`Let's play Rock, Paper and Scissors! \n Please type in one of the following: \n (1) Rock \n (2) Paper \n (3) Scissors`).toLowerCase();
        console.log(playRound(playerGameInput, computerPlay()));

        if (playRound(playerGameInput, computerPlay()).includes('You have won!')) {
        playerScore += 1;
        } else if (playRound(playerGameInput, computerPlay()).includes('You lost!')) {
        computerScore += 1;
        }
    }

    if (playerScore > computerScore) {
        return(`You are the winner with score: ${playerScore}!`)
    } else if (playerScore < computerScore) {
        return(`Oops! Computer won with score: ${computerScore}!`)
    }
    else 
    {
        return(`It's a tie!!! You scored: ${playerScore} while computer scored ${computerScore}`)
    }
}

console.log(game());