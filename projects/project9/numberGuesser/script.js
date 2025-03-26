let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
 return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, computerGuess, secretTargetNumber) {
  let humanDifference = Math.abs(humanGuess - secretTargetNumber);
  let computerDifference = Math.abs(computerGuess - secretTargetNumber);

  if (humanDifference <=  computerDifference) {
    return true; 
  } else if (humanDifference === computerDifference) {
    return true; 
  } else {
    return false; 
  }
}

function updateScore(winner) {
  if (winner === 'human') {
    humanScore = humanScore + 1; 
  } else if (winner === 'computer') {
    computerScore = computerScore + 1;
  } 
  // No need to return anything here
}

function advanceRound() {
  currentRoundNumber = currentRoundNumber + 1;
}

console.log(advanceRound());
console.log(updateScore());

