let cellStateArr = [
  { cellState: 0 },
  { cellState: 0 },
  { cellState: 0 },
  { cellState: 0 },
  { cellState: 0 },
  { cellState: 0 },
  { cellState: 0 },
  { cellState: 0 },
  { cellState: 0 },
];
let tttPlayerArr = [];
let tttCompArr = [];
let moves = 9;
const winningPossibilitiesTTT = [
  ["0", "1", "2"],
  ["3", "4", "5"],
  ["6", "7", "8"],
  ["0", "3", "6"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["0", "4", "8"],
  ["2", "4", "6"],
];

function playerPlaceTTT(id) {
  if (moves <= 0) {
    return;
  }
  moves--;

  let clickedElement = document.querySelector(`#${id}`);

  let dataIndex = parseInt(clickedElement.dataset.index);
  if (cellStateArr[dataIndex].cellState == 2) {
    alert("chosenbyComp");
    return;
  } else if (cellStateArr[dataIndex].cellState == 1) {
    alert("chosen");
    return;
  } else if (cellStateArr[dataIndex].cellState == 0) {
    tttPlayerArr.push(dataIndex.toString());
    clickedElement.innerHTML = "x";
    cellStateArr[dataIndex].cellState = 1;
  }

  computerPlaceTTT();
}

function computerPlaceTTT() {
  moves--;
  let computerTttRandom;

  do {
    computerTttRandom = Math.floor(Math.random() * 9);
  } while (
    tttPlayerArr.includes(computerTttRandom.toString()) ||
    tttCompArr.includes(computerTttRandom.toString())
  );

  let compElement = document.querySelector(`#td${computerTttRandom + 1}TTT`);
  cellStateArr[computerTttRandom].cellState = 2;
  compElement.innerHTML = "o";
  tttCompArr.push(computerTttRandom.toString());
  checkIfGameEnded();
}

const resultScreenT = document.querySelector("#resultScreen");
const resultButtonT = document.querySelector("#resultBTN");
const resultMSGT = document.querySelector("#resultMSG");
resultButtonT.addEventListener("click", () => {
  resultScreenT.close();
  window.location = "./";
});

function checkIfGameEnded() {
  for (let i = 0; i < winningPossibilitiesTTT.length; i++) {
    const winningPossibility = winningPossibilitiesTTT[i];

    if (winningPossibility.every((cell) => tttPlayerArr.includes(cell))) {
      resultScreenT.showModal();
      resultMSGT.textContent = "You Won! you can play the next Mini game now";
      localStorage.setItem("TTT", "TTT");
      return;
    }
    if (moves == 0) {
      resultScreenT.showModal();
      resultMSGT.textContent = "it's a Draw! try again!";
      return;
    }
  }
  for (let i = 0; i < winningPossibilitiesTTT.length; i++) {
    const winningPossibility2 = winningPossibilitiesTTT[i];

    if (winningPossibility2.every((cell) => tttCompArr.includes(cell))) {
      resultScreen.showModal();
      resultMSG.textContent = "You Lost! try again";
      return;
    }
  }
}
