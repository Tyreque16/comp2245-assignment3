window.onload = function() {
  var squares = document.querySelectorAll("#board div");
  var turn = "X";
  var boardState = ["", "", "", "", "", "", "", "", ""]; // track X/O
  var statusDiv = document.getElementById("status");
  var newGameBtn = document.querySelector(".btn");

  // Winning combinations (rows, columns, diagonals)
  var winningCombos = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  // Check if a player has won
  function checkWinner(player) {
    return winningCombos.some(function(combo) {
      return combo.every(function(i) { return boardState[i] === player; });
    });
  }

  // Reset the game
  function resetGame() {
    boardState.fill("");
    turn = "X";
    statusDiv.textContent = "Move your mouse over a square and click to play an X or an O.";
    statusDiv.classList.remove("you-won");

    squares.forEach(function(sq) {
      sq.textContent = "";
      sq.className = "square"; // keep base styling
      sq.onclick = squareClick;
    });
  }

  // Click handler for each square
  function squareClick() {
    var index = this.squareIndex;

    // Prevent overwriting
    if (!boardState[index]) {
      boardState[index] = turn;
      this.textContent = turn;
      this.className = "square " + turn; // keep square styling + color

      if (checkWinner(turn)) {
        statusDiv.textContent = "Congratulations! " + turn + " is the Winner!";
        statusDiv.classList.add("you-won");
        squares.forEach(function(sq) { sq.onclick = null; }); // disable further clicks
      } else {
        turn = (turn === "X") ? "O" : "X"; // switch turns
      }
    }
  }

  // Initialize the squares
  squares.forEach(function(sq, i) {
    sq.classList.add("square");
    sq.squareIndex = i;
    sq.onclick = squareClick;

    // Hover effect
    sq.onmouseover = function() { this.classList.add("hover"); };
    sq.onmouseout  = function() { this.classList.remove("hover"); };
  });

  // New Game button
  newGameBtn.onclick = resetGame;
};
