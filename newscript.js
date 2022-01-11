'use strict';

const weapons = ['rock', 'paper', 'scissor'];

let playerScore = 0, computerScore = 0;

const playButton = document.querySelector('.play-button');

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

function game() {}


function executePlay () {
    const playerPick = prompt('Greetings Challenger! 😤 \n Please choose your weapon \n (1) ✊ Rock ✊ \n (2) ✋ Paper ✋\n (3) ✌️ Scissor ✌️ \n And please type it with the correct spelling below! (Case doesn\'t matter)').toLowerCase();
    console.log(playerPick)
    return console.log(playRound(playerPick, randomPick()));
}

playButton.addEventListener('click', executePlay)