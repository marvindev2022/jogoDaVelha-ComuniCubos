let currentPlayer = 'X';
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function makeMove(row, col) {
  if (board[row][col] === '' && !checkWinner()) {
    board[row][col] = currentPlayer;
    document.getElementById('winner').innerHTML = '';
    document.getElementById('tic-tac-toe').children[row].children[col].textContent = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
  checkWinner();
}

function checkWinner() {
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] === board[i][1] &&
      board[i][1] === board[i][2] &&
      board[i][0] !== ''
    ) {
      document.getElementById('winner').innerHTML = `${board[i][0]} venceu!`;
      return true;
    }
    if (
      board[0][i] === board[1][i] &&
      board[1][i] === board[2][i] &&
      board[0][i] !== ''
    ) {
      document.getElementById('winner').innerHTML = `${board[0][i]} venceu!`;
      return true;
    }
  }

  if (
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2] &&
    board[0][0] !== ''
  ) {
    document.getElementById('winner').innerHTML = `${board[0][0]} venceu!`;
    return true;
  }

  if (
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0] &&
    board[0][2] !== ''
  ) {
    document.getElementById('winner').innerHTML = `${board[0][2]} venceu!`;
    return true;
  }

  let isBoardFull = true;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === '') {
        isBoardFull = false;
        break;
      }
    }
  }

  if (isBoardFull) {
    document.getElementById('winner').innerHTML = 'Empate!';
    return true;
  }

  return false;
}

function resetBoard() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  currentPlayer = 'X';
  document.getElementById('winner').innerHTML = '';
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.textContent = '';
  });
}
