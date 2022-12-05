const restartBtn = document.getElementById("restart");
const markAreas = document.querySelectorAll("#gameArea .markArea");
const playerName = document.getElementById("turnPlayer");
const title = document.querySelector("#title");
let winnerMarks = [];
let turnPlayer = "X";
let gameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

markAreas.forEach(function (element) {
  element.addEventListener("click", boardClick);
});

function boardClick(ev) {
  const target = ev.currentTarget;
  const region = target.dataset.region;
  const rowCollumPair = region.split(".");
  const row = rowCollumPair[0];
  const collum = rowCollumPair[1];

  if (turnPlayer === "X") {
    gameBoard[row][collum] = "X";
    target.innerText = "X";
    target.disabled = "true";
  } else {
    gameBoard[row][collum] = "O";
    target.innerText = "O";
    target.disabled = "true";
  }
  const winMarks = winner()
  if(winMarks.length > 0){
    title.innerText = "VENCEDOR:";
    markAreas.forEach(function (element) {
      element.disabled = "true";
    });
  }else if(gameBoard.flat().includes("")){
    turnPlayer = turnPlayer === "X" ? "O" : "X"
    playerName.innerText = turnPlayer;''
  }else{
    title.innerText = "EMPATE";
    turnPlayer = "";
    playerName.innerText = turnPlayer;
  }
}
function winner() {
  if(gameBoard[0][0] && gameBoard[0][0] == gameBoard[0][1] && gameBoard[0][0] == gameBoard[0][2]){
    winnerMarks = [0.0, 0.1, 0.2];
  }
  if(gameBoard[1][0] && gameBoard[1][0] == gameBoard[1][1] && gameBoard[1][0] == gameBoard[1][2]){
    winnerMarks = [1.0, 1.1, 1.2];
  }
  if(gameBoard[2][0] && gameBoard[2][0] == gameBoard[2][1] && gameBoard[2][0] == gameBoard[2][2]){
    winnerMarks = [2.0, 2.1, 2.2];
  }
  if(gameBoard[0][0] && gameBoard[0][0] == gameBoard[1][0] && gameBoard[0][0] == gameBoard[2][0]){
    winnerMarks = [0.0, 1.0, 2.0];
  }
  if(gameBoard[0][1] && gameBoard[0][1] == gameBoard[1][1] && gameBoard[0][1] == gameBoard[2][1]){
    winnerMarks = [0.1, 1.1, 2.1];
  }
  if(gameBoard[0][2] && gameBoard[0][2] == gameBoard[1][2] && gameBoard[0][2] == gameBoard[2][2]){
    winnerMarks = [0.2, 1.2, 2.2];
  }
  if(gameBoard[0][0] && gameBoard[0][0] == gameBoard[1][1] && gameBoard[0][0] == gameBoard[2][2]){
    winnerMarks = [0.0, 1.1, 2.2];
  }
  if(gameBoard[1][1] && gameBoard[1][1] == gameBoard[0][2] && gameBoard[1][1] == gameBoard[2][0]){
    winnerMarks = [0.2, 1.1, 2.0];
  }
  return winnerMarks;
}

restartBtn.addEventListener("click", function () {
  winnerMarks = [];
  title.innerText = "VEZ DE";
  gameBoard = [["", "", ""], ["", "", ""], ["", "", ""]];
  turnPlayer = "X";
  playerName.innerText = turnPlayer;
  markAreas.forEach(function (element) {
    element.innerText = "";
    element.removeAttribute("disabled");
  });
});
