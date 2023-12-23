import { showOptions } from "./whites.js";

function createCheckersBoard() {
  const checkersBoard = document.querySelector("#checkersContainer");
  let selectingState = false;
  //   0 = black
  //   1 = white
  for (let row = 1; row <= 11; row++) {
    for (let col = 1; col <= 11; col++) {
      const checkersCell = document.createElement("div");
      checkersCell.classList.add("checkersCell");
      checkersCell.id = row.toString() + col.toString();
      let checkersCellID = checkersCell.id;

      // Player
      const whitePiece = document.createElement("div");
      whitePiece.classList.add("whitePiece");
      whitePiece.addEventListener("click", () => {
        if (selectingState == false) {
          selectingState = true;
        } else if (selectingState == true) {
          selectingState == false;
        }
        console.log(selectingState);
        // whitePiece.classList.toggle("selectedPiece");
        // showOptions(selectingState, checkersCellID);
      });

      const blackPiece = document.createElement("div");
      blackPiece.classList.add("blackPiece");
      // Cells
      if ((row + col) % 2 === 0) {
        checkersCell.classList.add("blackCell");
      }
      if (row > 7 && checkersCell.classList.contains("blackCell")) {
        checkersCell.appendChild(whitePiece);
      }
      if (row < 4 && checkersCell.classList.contains("blackCell")) {
        checkersCell.appendChild(blackPiece);
      }
      checkersCell.addEventListener("click", () => {
        if (checkersCell.classList.contains("myOptions")) {
          checkersCell.appendChild(whitePiece);
          selectingState = false;
        }
        // console.log(checkersCellID);
      });
      checkersCell.style.gridRowStart = row;
      checkersCell.style.gridColumnStart = col;
      checkersBoard.appendChild(checkersCell);
    }
  }
}
export { createCheckersBoard };
