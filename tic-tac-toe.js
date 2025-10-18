window.onload = function() {
  const squares = document.querySelectorAll("#board div");
  const statusDiv = document.getElementById("status");
  const newGameBtn = document.querySelector(".btn");

  let turn = "X";                          // whose turn it is
  let board = Array(9).fill("");           // track X/O

  // Exercise 1: Layout the board
  squares.forEach((sq, i) => {
    sq.className = "square";               // add square class
    sq.dataset.index = i;                  // store index

    // Exercise 2 & 6: Click to place X or O, no overwriting
    sq.onclick = function() {
      const index = this.dataset.index;
      if (!board[index]) {                 // prevent cheating
        board[index] = turn;
        this.textContent = turn;
        this.className = turn;

        // Exercise 4: Check winner
        if (checkWinner(turn)) {
          statusDiv.textContent = `${turn} wins!`;
          statusDiv.classList.add("you-won");
          squares.forEach(s => s.onclick = null); // stop game
        } else {
          turn = (turn === "X") ? "O" : "X";      // switch turns
        }
      }
    };

    // Exercise 3: Hover effect
    sq.onmouseover = () => sq.classList.add("hover");
    sq.onmouseout  = () => sq.classList.remove("hover");
  });

  // Exercise 4: winning combinations
  function checkWinner(player) {
    const combos = [
      [0,1,2],[3,4,5],[6,7,8], // rows
      [0,3,6],[1,4,7],[2,5,8], // columns
      [0,4,8],[2,4,6]          // diagonals
    ];
    return combos.some(c => c.every(i => board[i] === player));
  }

  // Exercise 5: Reset game
  newGameBtn.onclick = function() {
    board.fill("");
    turn = "X";
    statusDiv.textContent = "Move your mouse over a square and click to play an X or an O.";
    statusDiv.classList.remove("you-won");
    squares.forEach(s => {
      s.textContent = "";
      s.className = "square";
      s.onclick = s.onclick; // reattach click
    });
  };
};
