window.onload = function() {
  var squares = document.querySelectorAll("#board div");
  var turn = "X";
  var boardState = ["", "", "", "", "", "", "", "", ""]; // track X/O
  var statusDiv = document.getElementById("status"); // For winner message

  // All winning combinations (Exercise 4, but we’ll check it last)
  var winningCombos = [
    [0,1,2],[3,4,5],[6,7,8], // rows
    [0,3,6],[1,4,7],[2,5,8], // columns
    [0,4,8],[2,4,6]          // diagonals
  ];

  // Loop through each square
  for (var i = 0; i < squares.length; i++) {
    // Exercise 1: layout the board
    squares[i].classList.add("square");
    squares[i].squareIndex = i;

    // Exercise 2: click event to place X or O
    squares[i].onclick = function() {
      var index = this.squareIndex;
      if (boardState[index] == "") {
        boardState[index] = turn;
        this.innerHTML = turn;
        this.className = turn; // applies X or O class for CSS

        // Exercise 4: check winner after everything else
        if (checkWinner(turn)) {
          statusDiv.innerHTML = "Congratulations! " + turn + " is the Winner!";
          statusDiv.classList.add("you-won");

          // Disable further clicks
          for (var j = 0; j < squares.length; j++) {
            squares[j].onclick = null;
          }
        } else {
          // Switch turns
          turn = (turn == "X") ? "O" : "X";
        }
      }
    };

    // Exercise 3: hover effect
    squares[i].onmouseover = function() {
      this.classList.add("hover");
    };
    squares[i].onmouseout = function() {
      this.classList.remove("hover");
    };
  }

  // Function to check if the current player has won (Exercise 4)
  function checkWinner(player) {
    for (var i = 0; i < winningCombos.length; i++) {
      var a = winningCombos[i][0];
      var b = winningCombos[i][1];
      var c = winningCombos[i][2];
      if (boardState[a] == player && boardState[b] == player && boardState[c] == player) {
        return true;
      }
    }
    return false;
  }
};
