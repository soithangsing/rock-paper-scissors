'use strict';

// Selecting Elements

const playerElem = document.querySelector('.player--0');
const compElem = document.querySelector('.player--1');

const bigScoreBox0 = document.querySelector('.current-0');
const bigScoreBox1 = document.querySelector('.current-1');

const displayPlayerPick = document.querySelector('.player-0-pick');
const displayCompPick = document.querySelector('.player-1-pick');

const scoreBox0 = document.getElementById('current-0');
const scoreBox1 = document.getElementById('current-1');

const playerName = document.querySelector('.name--0');
const botName = document.querySelector('.name--1');

const displayMessage = document.querySelector('.versus');

const btnNew = document.querySelector('.btn--new');
const btnRock = document.querySelector('.btn--rock');
const btnPaper = document.querySelector('.btn--paper');
const btnScissor = document.querySelector('.btn--scissor');

const modal = document.querySelector('.modal');
const modalButton = document.querySelector('.modal-open');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// Selecting Elements

const weapons = ['rock', 'paper', 'scissor'];

let playerScore = 0, computerScore = 0;
let playing = true;

function randomPick () {
    const randomPick = weapons[Math.floor(Math.random() * weapons.length)];
    return randomPick;
  }

function playRound (playerSelection, computerSelection) {

   if(playerSelection === computerSelection) {
       return `You picked: ${playerSelection} <br> Bot picked: ${computerSelection} <br><br> Tie!`;
   } else if (playerSelection === 'rock' && computerSelection === 'paper') {
       return `You picked: ${playerSelection} <br> Bot picked: ${computerSelection} <br><br> Bot wins! Paper beats rock!`;
   } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
       return `You picked: ${playerSelection} <br> Bot picked: ${computerSelection} <br><br> You win! Rock beats scissor!`;
   }

   if(playerSelection === 'paper' && computerSelection === 'rock') {
       return `You picked: ${playerSelection} <br> Bot picked: ${computerSelection} <br><br> You win! Paper beats rock!`;
   } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
       return `You picked: ${playerSelection} <br> Bot picked: ${computerSelection} <br><br> Bot wins! Scissor beats paper!`;
   }

   if(playerSelection === 'scissor' && computerSelection === 'rock') {
       return `You picked: ${playerSelection} <br> Bot picked: ${computerSelection} <br><br> Bot wins! Rock beats scissor!`;
   } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
       return `You picked: ${playerSelection} <br> Bot picked: ${computerSelection} <br><br> You win! Scissor beats paper!`;
   }
}

function game(weapon) {
        const playerPick = weapon;
        const computerPick = randomPick();
        const gameRun = playRound(playerPick, computerPick);

        displayMessage.innerHTML = `${gameRun}`

        if (gameRun.includes('You win!')) {
            playerScore++;
        } else if (gameRun.includes('Bot wins!')) {
            computerScore++;
        }

        scoreBox0.textContent = `${playerScore}`;
        scoreBox1.textContent = `${computerScore}`;

        if (computerPick === 'rock') {
            displayCompPick.src = `images/weapons-0.png`;
        } else if (computerPick === 'paper') {
            displayCompPick.src = `images/weapons-1.png`;
        } else if (computerPick === 'scissor') {
            displayCompPick.src = `images/weapons-2.png`;
        }
        
        if (playerScore > computerScore && playerScore === 5) {
            bigScoreBox0.classList.toggle('current--winner--background');
            playerName.classList.toggle('player--name--winner');
            playing = false;
            displayMessage.innerHTML = `You have achieved victory 🏆 <br> Congratulations! 🥳 <br><br> Your Score ${playerScore} to Bot Score ${computerScore} <br> Please press RELOAD <br> to play again!`
        } else if (computerScore > playerScore && computerScore === 5) {
            bigScoreBox1.classList.toggle('current--winner--background');
            botName.classList.toggle('player--name--winner');
            playing = false;
            displayMessage.innerHTML = `Bot wins! <br> You Lose! 😟 <br><br> Your Score ${playerScore} to Bot Score ${computerScore} <br> Please press RELOAD <br> to play again!`
        }
}


function executePlay1() {
    if (playing) {
        displayPlayerPick.src = `images/weapons-0.png`;
        game('rock');
    }
}

function executePlay2() {
    if (playing) {
        displayPlayerPick.src = `images/weapons-1.png`;
        game('paper');
    }
}

function executePlay3() {
    if (playing) {
        displayPlayerPick.src = `images/weapons-2.png`;
        game('scissor');
    }
}

function newGame() {
    location.reload()
}

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };

  const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

btnRock.addEventListener('click', executePlay1)
btnPaper.addEventListener('click', executePlay2)
btnScissor.addEventListener('click', executePlay3)
btnNew.addEventListener('click', newGame)
modalButton.addEventListener('click', openModal)