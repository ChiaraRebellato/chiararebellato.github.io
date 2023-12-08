"use strict";

var humanScore = 0;
var computerScore = 0;
var currentRoundNumber = 1; // Write your code below:

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

;

var compareGuesses = function compareGuesses(humanGuess, computerGuess, targetGuess) {
  var humanDifference = Math.abs(targetGuess - humanGuess);
  var computerDifference = Math.abs(targetGuess - computerGuess);
  return humanDifference <= computerDifference;
};

function updateScore(winner) {
  if (winner === "human") {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
}

function advanceRound() {
  currentRoundNumber += 1;
}