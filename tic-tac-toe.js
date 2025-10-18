window.onload = function() {
  var squares = document.querySelectorAll("#board div");
  var turn = "X";
  var boardState = ["", "", "", "", "", "", "", "", ""]; // track X/O

  // Loop through each square
  for (var i = 0; i < squares.length; i++) {
    squares[i].classList.add("square"); // Exercise 1: layout
    squares[i].squareIndex = i;          // store index for click

    // Exercise 2: click event to place X or O
    squares[i].onclick = function() {
      var index = this.squareIndex;
      if (boardState[index] == "") {
        boardState[index] = turn;
        this.innerHTML = turn;
        this.className = turn; // applies X or O class for CSS

        // Switch turns
        turn = (turn == "X") ? "O" : "X";
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
};
