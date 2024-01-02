let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () =>
{
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanG, computerG, targetN)=>
{
  const humanDiff = Math.abs(targetN - humanG);
  const computerDiff = Math.abs(targetN - computerG);
  return humanDiff <= computerDiff;
}

const updateScore = (str) =>
{
  if (str === 'human')
  {
    humanScore++;
  }
  if (str === 'computer')
  {
    computerScore++;
  }
}

const advanceRound = () =>
{
  currentRoundNumber++;
}