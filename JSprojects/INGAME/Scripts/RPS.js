let playerPicked = 0;
let compPicked = 0;
// Checks what user Picked

function rpsCheckUserResult(choice) {
  playerPicked = choice;
  let playerPickedDiv;
  playerPicked == 1
    ? (playerPickedDiv = document.querySelector("#playerR"))
    : "";
  playerPicked == 2
    ? (playerPickedDiv = document.querySelector("#playerP"))
    : "";
  playerPicked == 3
    ? (playerPickedDiv = document.querySelector("#playerS"))
    : "";

  playerPickedDiv.classList.add("rpsPlayerBGC");
  compAnswer();
}

// Creates random counter Choice
function compAnswer() {
  compPicked = Math.floor(Math.random() * 3) + 1;

  let compPickedDiv;
  compPicked == 1 ? (compPickedDiv = document.querySelector("#compR")) : "";
  compPicked == 2 ? (compPickedDiv = document.querySelector("#compP")) : "";
  compPicked == 3 ? (compPickedDiv = document.querySelector("#compS")) : "";
  compPickedDiv.classList.add("rpsCompBGC");

  rpsFinalResult();
}

const resultScreen = document.querySelector("#resultScreen");
const resultButton = document.querySelector("#resultBTN");
const resultMSG = document.querySelector("#resultMSG");
resultButton.addEventListener("click", () => {
  resultScreen.close();
  window.location = "./";
});
// results
function rpsFinalResult() {
  if (playerPicked == compPicked) {
    resultScreen.showModal();
    resultMSG.textContent = "it's a draw! try again";
  } else if (
    (playerPicked == 1 && compPicked == 2) ||
    (playerPicked == 2 && compPicked == 3) ||
    (playerPicked == 3 && compPicked == 1)
  ) {
    resultScreen.showModal();
    resultMSG.textContent = "You Lost! try again";
  } else if (
    (playerPicked == 2 && compPicked == 1) ||
    (playerPicked == 3 && compPicked == 2) ||
    (playerPicked == 1 && compPicked == 3)
  ) {
    localStorage.setItem("RPS", "RPS");
    resultScreen.showModal();
    resultMSG.textContent = "You Won! you can play the next Mini game now";
  }
}
