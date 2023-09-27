// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
  // document.getElementById(index).disa
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  if (confirm(`Horraaay, ${winner} wins!`)) {
    // The code here will be exectued if you press on OK button that will pop on the window
  }
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing
// fillButton(7, "X");
// fillButton(9, "O");

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */
let currentPlayer = "x";
const p1 = [];
const p2 = [];
const winnerCases = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
function clickButton(index) {
  if (p1.includes(index) || p2.includes(index)) {
    alert(`This number ${index} has already taken by player ${currentPlayer}`);
    return;
  }
  if (currentPlayer === "x") {
    p1.push(index);
  } else {
    p2.push(index);
  }

  fillButton(index, currentPlayer);
  checkWinner(p2);
  checkWinner(p1);

  console.log(`Button number ${index} is clicked`);
  currentPlayer = currentPlayer == "x" ? "o" : "x";

  /**
   * (Optional) It's always a good idea to make a function for every single purpose.
   */
}
function checkWinner(player) {
  for (let arrayCase of winnerCases) {
    if (arrayCase.every((num) => player.includes(num))) {
      if (player === p1) {
        winningAlert("player 1");
      } else {
        winningAlert("player 2");
      }
      restartGame();
      return true;
    }
  }

  return false;
}
function restartGame() {
  p1.length = 0;
  p2.length = 0;
  currentPlayer = "x";
  for (let i = 1; i <= 9; i++) {
    fillButton(i, "");
  }
}
