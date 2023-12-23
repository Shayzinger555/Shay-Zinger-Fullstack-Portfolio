// available cells classes / top cells
class ColsLastRowsAvailable {
  constructor(col, lastRow) {
    this.col = col;
    this.lastRow = lastRow;
  }
}

//  from ChatGPT cause I'm lazy(:
const winningPossibilitiesFC = [
  // Vertical
  ["cell50", "cell40", "cell30", "cell20"],
  ["cell51", "cell41", "cell31", "cell21"],
  ["cell52", "cell42", "cell32", "cell22"],
  ["cell53", "cell43", "cell33", "cell23"],
  ["cell54", "cell44", "cell34", "cell24"],
  ["cell55", "cell45", "cell35", "cell25"],
  ["cell56", "cell46", "cell36", "cell26"],

  // Horizontal
  ["cell00", "cell01", "cell02", "cell03"],
  ["cell01", "cell02", "cell03", "cell04"],
  ["cell02", "cell03", "cell04", "cell05"],
  ["cell03", "cell04", "cell05", "cell06"],
  ["cell10", "cell11", "cell12", "cell13"],
  ["cell11", "cell12", "cell13", "cell14"],
  ["cell12", "cell13", "cell14", "cell15"],
  ["cell13", "cell14", "cell15", "cell16"],
  ["cell20", "cell21", "cell22", "cell23"],
  ["cell21", "cell22", "cell23", "cell24"],
  ["cell22", "cell23", "cell24", "cell25"],
  ["cell23", "cell24", "cell25", "cell26"],
  ["cell30", "cell31", "cell32", "cell33"],
  ["cell31", "cell32", "cell33", "cell34"],
  ["cell32", "cell33", "cell34", "cell35"],
  ["cell33", "cell34", "cell35", "cell36"],
  ["cell40", "cell41", "cell42", "cell43"],
  ["cell41", "cell42", "cell43", "cell44"],
  ["cell42", "cell43", "cell44", "cell45"],
  ["cell43", "cell44", "cell45", "cell46"],
  ["cell50", "cell51", "cell52", "cell53"],
  ["cell51", "cell52", "cell53", "cell54"],
  ["cell52", "cell53", "cell54", "cell55"],
  ["cell53", "cell54", "cell55", "cell56"],

  // Diagonal
  ["cell00", "cell11", "cell22", "cell33"],
  ["cell01", "cell12", "cell23", "cell34"],
  ["cell02", "cell13", "cell24", "cell35"],
  ["cell03", "cell14", "cell25", "cell36"],
  ["cell10", "cell21", "cell32", "cell43"],
  ["cell11", "cell22", "cell33", "cell44"],
  ["cell12", "cell23", "cell34", "cell45"],
  ["cell13", "cell24", "cell35", "cell46"],
  ["cell20", "cell31", "cell42", "cell53"],
  ["cell21", "cell32", "cell43", "cell54"],
  ["cell22", "cell33", "cell44", "cell55"],
  ["cell23", "cell34", "cell45", "cell56"],
];

const cellStatesArrFC = [
  new ColsLastRowsAvailable(0, 5),
  new ColsLastRowsAvailable(1, 5),
  new ColsLastRowsAvailable(2, 5),
  new ColsLastRowsAvailable(3, 5),
  new ColsLastRowsAvailable(4, 5),
  new ColsLastRowsAvailable(5, 5),
  new ColsLastRowsAvailable(6, 5),
];

const compArrFC = [];
const playerArrFC = [];

function createFCboard() {
  let startButton = document.querySelector("#FCmainButton");
  startButton.classList.add("invisible");
  let fcTable = document.createElement("table");
  const fcContainer = document.querySelector("#fcContainer");
  for (let i = 0; i <= 5; i++) {
    let tr = document.createElement("tr");
    tr.classList.add("FCtr");
    fcTable.appendChild(tr);
    for (let j = 0; j <= 6; j++) {
      let td = document.createElement("td");
      td.classList.add("FCtd");
      tr.appendChild(td);

      let cellContentFC = document.createElement("div");
      const cellRow = i;
      const cellCol = j;
      let cellID = `cell${i}${j}`;

      cellContentFC.setAttribute("data-cellRow", cellRow);
      cellContentFC.setAttribute("data-cellCol", cellCol);
      cellContentFC.setAttribute("id", cellID);

      cellContentFC.addEventListener("click", () => {
        userClickFC(cellCol, cellRow, cellID);
      });
      cellContentFC.classList.add("cellContentFC");
      td.appendChild(cellContentFC);
    }
  }
  fcContainer.appendChild(fcTable);
}
// on every user click this is the logicall proceess of checking and updating what is needed
function userClickFC(col, row, cellID) {
  const selectedCollLR = cellStatesArrFC[col].lastRow;
  if (!(row == selectedCollLR)) {
    userPlacedTop(col);
  } else if (selectedCollLR == row) {
    userplaced(cellID, col);
  }
  playerArrFC.push(cellID);
  checkIfPlayerWonFC();
}
function userPlacedTop(col) {
  let pickedColDF = cellStatesArrFC[col].lastRow;
  // alert("last row is" + pickedColDF + "col is" + col);

  let correctedCell = "cell" + pickedColDF.toString() + col.toString();
  let correctedCellDiv = document.getElementById(correctedCell);
  correctedCellDiv.style.backgroundColor = "yellow";
  updateAvailibility(col);
}

function userplaced(cellID, col) {
  let pickedCell = document.getElementById(`${cellID}`);
  pickedCell.style.backgroundColor = "yellow";

  updateAvailibility(col);
}

function updateAvailibility(col) {
  if (col >= 0 && col < cellStatesArrFC.length) {
    const selectedCell = cellStatesArrFC[col];
    if (selectedCell.lastRow > 0) {
      selectedCell.lastRow--;
      computerChoiceFC();
    }
  }
}

function computerChoiceFC() {
  let computerRandomColFC = Math.floor(Math.random() * 7);
  let compCellRow = cellStatesArrFC[computerRandomColFC].lastRow;
  let compCellDiv = document.getElementById(
    `cell${compCellRow}${computerRandomColFC}`
  );

  compCellDiv.style.backgroundColor = "green";
  updateAvailibilityComp(computerRandomColFC);
  addToCompArrFC(`cell${compCellRow}${computerRandomColFC}`);
}
function updateAvailibilityComp(col) {
  if (col >= 0 && col < cellStatesArrFC.length) {
    const selectedCell = cellStatesArrFC[col];
    if (selectedCell.lastRow > 0) {
      selectedCell.lastRow--;
    }
  }
}

function addToCompArrFC(id) {
  compArrFC.push(id);
  checkIfCompWonFC();
}

// Result
const resultScreenF = document.querySelector("#resultScreen");
const resultButtonF = document.querySelector("#resultBTN");
const resultMSGF = document.querySelector("#resultMSG");
resultButtonF.addEventListener("click", () => {
  resultScreenF.close();
  window.location = "./";
});

function checkIfCompWonFC() {
  if (
    winningPossibilitiesFC.some((possibility) =>
      possibility.every((cell) => compArrFC.includes(cell))
    )
  ) {
    resultScreen.showModal();
    resultMSG.textContent = "You Lost! try again";
  }
}

function checkIfPlayerWonFC() {
  if (
    winningPossibilitiesFC.some((possibility) =>
      possibility.every((cell) => playerArrFC.includes(cell))
    )
  ) {
    resultScreenF.showModal();
    resultMSGF.textContent = "You Won! you can play the next Mini game now";
    localStorage.setItem("FC", "FC");
    alert("you just finished all the mini games!");
  }
}
