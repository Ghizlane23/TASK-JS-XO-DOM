// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  document.getElementById(index).innerHTML = text;
<<<<<<< HEAD
  document.getElementById(index).disabled = true;
=======
  // document.getElementById(index).disa
>>>>>>> fa41bcb6c642cf42ac96955ccf5795ef0c11cc7c
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  if (confirm(`Horraaay, ${winner} wins!`)) {
    // The code here will be exectued if you press on OK button that will pop on the window
  }
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing
<<<<<<< HEAD
// fillButton(6, "X");
=======
// fillButton(7, "X");
>>>>>>> fa41bcb6c642cf42ac96955ccf5795ef0c11cc7c
// fillButton(9, "O");

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */
<<<<<<< HEAD
let WinCases = [
=======
let currentPlayer = "x";
const p1 = [];
const p2 = [];
const winnerCases = [
>>>>>>> fa41bcb6c642cf42ac96955ccf5795ef0c11cc7c
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
<<<<<<< HEAD
const player1 = { name: "Player 1", p1: [] };
const player2 = { name: "Player 2", p2: [] };
currentPlayer = "X";
function clickButton(index) {
  if (currentPlayer === "X") {
    player1.p1.push(index);
    fillButton(index, "X");
    checkWinner(player1.name, player1.p1);
  } else {
    player2.p2.push(index);
    fillButton(index, "O");
    checkWinner(player2.name, player2.p2);
  }

  currentPlayer = currentPlayer == "X" ? "O" : "X";
  console.log(`Button number ${index} is clicked`);
}

/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */
function checkWinner(name, player) {
  WinCases.some((winCase) => {
    if (winCase.every((winNum) => player.includes(winNum))) {
      winningAlert(name);
      //alert(`The winner is ${name}`);
      return restartGame();
    }
  });
}

function restartGame() {
  player1.p1.length = 0;
  player2.p2.length = 0;
  currentPlayer = "X";

  for (let i = 1; i <= 9; i++) {
    fillButton(i, "");
    document.getElementById(i).disabled = false;
=======
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
>>>>>>> fa41bcb6c642cf42ac96955ccf5795ef0c11cc7c
  }
}
