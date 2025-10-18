
window.onload = function() {
  var squares = document.querySelectorAll("#board div");
  var turn = "X";
  var boardState = ["", "", "", "", "", "", "", "", ""]; // track X/O

  // 1️⃣ Add 'square' class to each square
  for (var i = 0; i < squares.length; i++) {
    squares[i].classList.add("square");

    // Store the index in a property of the square
    squares[i].squareIndex = i;

    // 2️⃣ Click event to place X or O
    squares[i].onclick = function() {
      var index = this.squareIndex;

      // Only place X or O if empty
      if (boardState[index] == "") {
        boardState[index] = turn;
        this.innerHTML = turn;
        this.className = turn;

        // Switch turns
        if (turn == "X") {
          turn = "O";
        } else {
          turn = "X";
        }
      }
    };
  }
};


  
  squares.forEach(function(square) {
    square.classList.add("square");
  });
};
