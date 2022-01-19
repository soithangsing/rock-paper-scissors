'use strict';

const weapons = ['rock', 'paper', 'scissor'];

let playerScore = 0, computerScore = 0;

const playButton = document.querySelector('.play-button');
const reloadButton = document.querySelector('.reload');

function randomPick () {
    const randomPick = weapons[Math.floor(Math.random() * weapons.length)];
    return randomPick;
  }

function playRound (playerSelection, computerSelection) {

   if(playerSelection === computerSelection) {
       return `Computer picked the same sooo It's a tie man!`;
   } else if (playerSelection === 'rock' && computerSelection === 'paper') {
       return `You selected: ${playerSelection} \n Computer selected: ${computerSelection} \n Computer wins! Paper beats rock!`;
   } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
       return `You selected: ${playerSelection} \n Computer selected: ${computerSelection} \n You win! Rock beats scissor!`;
   }

   if(playerSelection === 'paper' && computerSelection === 'rock') {
       return `You selected: ${playerSelection} \n Computer selected: ${computerSelection} \n You win! Paper beats rock!`;
   } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
       return `You selected: ${playerSelection} \n Computer selected: ${computerSelection} \n Computer wins! Scissor beats paper!`;
   }

   if(playerSelection === 'scissor' && computerSelection === 'rock') {
       return `You selected: ${playerSelection} \n Computer selected: ${computerSelection} \n Computer wins! Rock beats scissor!`;
   } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
       return `You selected: ${playerSelection} \n Computer selected: ${computerSelection} \n You win! Scissor beats paper!`;
   }
}

function game() {
    console.log(`----- 🛡🗡 THE BATTLE BEGINS 🛡🗡 -----`);

    for (let i =0; i < 5; i++) {
        const playerPick = prompt('Greetings Challenger! 😤 \n Please choose your weapon \n (1) ✊ Rock ✊ \n (2) ✋ Paper ✋\n (3) ✌️ Scissor ✌️ \n And please type it with the correct spelling below! (Case doesn\'t matter)').toLowerCase();

        const gameRun = playRound(playerPick, randomPick());

        console.log(gameRun);

        if (gameRun.includes('You win!')) {
            playerScore++;
        } else if (gameRun.includes('Computer wins!')) {
            computerScore++;
        }
        
    }
    if (playerScore > computerScore && playerScore <= 5) {
        return `----- 🛡🗡🔥  THE BATTLE HAS ENDED 🔥🛡🗡 -----\n You have achieved victory over artificial intelligence! Congratulations! 🥳 \n Your Score ${playerScore} to Computer Score ${computerScore} \n Please press RELOAD to play again!`
    } else if (computerScore > playerScore && computerScore <= 5) {
        return `----- 🛡🗡🔥  THE BATTLE HAS ENDED 🔥🛡🗡 -----\n Oh No! The computer reigns supreme over their human overlords! You Lose! 😟 \n Your Score ${playerScore} to Computer Score ${computerScore} \n Please press RELOAD to play again!`
    } else {
        return `----- 🛡🗡🔥  THE BATTLE HAS ENDED 🔥🛡🗡 -----\n It is a DRAW between two great minds! 🤯 \n Your Score ${playerScore} to Computer Score ${computerScore} \n Please press RELOAD to play again!`
    }
}


function executePlay () {
    // const playerPick = prompt('Greetings Challenger! 😤 \n Please choose your weapon \n (1) ✊ Rock ✊ \n (2) ✋ Paper ✋\n (3) ✌️ Scissor ✌️ \n And please type it with the correct spelling below! (Case doesn\'t matter)').toLowerCase();
    // console.log(playerPick)
    return console.log(game());
}

function reloadPage () {
    location.reload()
}

playButton.addEventListener('click', executePlay)
reloadButton.addEventListener('click', reloadPage)