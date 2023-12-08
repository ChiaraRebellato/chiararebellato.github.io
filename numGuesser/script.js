let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() { 
    return Math.floor(Math.random()*10);
 };

 const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDifference = Math.abs(targetGuess - humanGuess)
    const computerDifference = Math.abs(targetGuess - computerGuess)
    return humanDifference <= computerDifference;
  }

  function updateScore(winner) { 
    if(winner==="human"){
        humanScore += 1;
    } else{
        computerScore += 1;
    }
   }

   function advanceRound() { 
    currentRoundNumber += 1;
    }