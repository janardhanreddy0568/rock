// Select DOM elements
const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");
const buttons = document.querySelectorAll(".btn");

// Possible choices
const choices = ["Rock", "Paper", "Scissors"];

// Function to get the computer's choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a draw!";
  } else if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Scissors" && computerChoice === "Paper") ||
    (userChoice === "Paper" && computerChoice === "Rock")
  ) {
    return "You Win!";
  } else {
    return "You Lose!";
  }
}

// Add event listeners to buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const userChoice = button.textContent;
    const computerChoice = getComputerChoice();

    // Display choices
    userChoiceDisplay.textContent = userChoice;
    computerChoiceDisplay.textContent = computerChoice;

    // Display result
    const result = determineWinner(userChoice, computerChoice);
    resultDisplay.textContent = result;
  });
});
