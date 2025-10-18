window.onload = function() {
  var squares = document.querySelectorAll("#board div");
  var turn = "X";
  var boardState = ["", "", "", "", "", "", "", "", ""];
  var statusDiv = document.getElementById("status");
  var newGameBtn = document.querySelector(".btn");

  var winningCombos = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  function checkWinner(player) {
    return winningCombos.some(function(combo) {
      return combo.every(function(i) { return boardState[i] === player; });
    });
  }

  function resetGame() {
    boardState.fill("");
    turn = "X";
    statusDiv.textContent = "Move your mouse over a square and click to play an X or an O.";
    statusDiv.classList.remove("you-won");
    squares.forEach(function(sq) {
      sq.textContent = "";
      sq.className = "square";
      sq.onclick = squareClick;
    });
  }

  function squareClick() {
    var index = this.squareIndex;
    if (!boardState[index]) {
      boardState[index] = turn;
      this.textContent = turn;
      this.className = turn;

      if (checkWinner(turn)) {
        statusDiv.textContent = "Congratulations! " + turn + " is the Winner!";
        statusDiv.classList.add("you-won");
        squares.forEach(function(sq) { sq.onclick = null; });
      } else {
        turn = (turn === "X") ? "O" : "X";
      }
    }
  }

  squares.forEach(function(sq, i) {
    sq.classList.add("square");
    sq.squareIndex = i;
    sq.onclick = squareClick;
    sq.onmouseover = function() { this.classList.add("hover"); };
    sq.onmouseout  = function() { this.classList.remove("hover"); };
  });

  newGameBtn.onclick = resetGame;
};
