// imports
import startCheckersGame from "./Checkers/checkersMain.js";
// On Page Load

const scoreDisplay = document.querySelector("#scoreDisplay");
function checkBalance() {
  if (localStorage.getItem("RPS")) {
    scoreDisplay.textContent = "Score: 100";
  }
  if (localStorage.getItem("TTT")) {
    scoreDisplay.textContent = "Score: 200";
  }
  if (localStorage.getItem("FC")) {
    scoreDisplay.textContent = "Score: 300";
  }
}

checkBalance();

const GamesTitles = [
  "Rock Paper Scissors",
  "Tic-Tac-Toe",
  "4 in a row",
  "Checkers",
  "hangman",
  "memory Game",
  "4 in a row",
  "Tetris",
  "Frogger",
];

// Mini Games HTMLS

const miniGamesScreen = document.querySelector("#miniGamesScreen");

const miniGamesContent = [
  `
    <div id="rpsContainer">
    <div id="compScreen"> 
<h2> Comp: </h2>
        <div id="compChoices">
        <div id="compR" class="compChoice"><img src="./Icons/fist.png" alt=""></div>
        <div id="compP" class="compChoice"><img src="./Icons/hand-paper(1).png" alt=""></div>
        <div id="compS" class="compChoice"><img src="./Icons/scissors.png" alt=""></div>

        </div>

        </div>

           <div id="playerScreen"> 
           <h2> you : </h2>
        <div id="playerChoices">
        <div id="playerR" class="playerChoice" onclick=" rpsCheckUserResult(1)"> <img src="./Icons/fist.png" alt=""></div>
         <div id="playerP" class="playerChoice" onclick=" rpsCheckUserResult(2)"> <img src="./Icons/hand-paper(1).png" alt=""></div>
         <div id="playerS" class="playerChoice" onclick=" rpsCheckUserResult(3)">  <img src="./Icons/scissors.png" alt=""></div>
        </div>
        </div>
            </div>
  


`,

  ` 

  
  <table id="tttContainer">
    <tr>
      <td id="td1TTT" onclick="playerPlaceTTT('td1TTT')" class="tdTTT" data-index="0"></td>
      <td id="td2TTT" onclick="playerPlaceTTT('td2TTT')" class="tdTTT" data-index="1"></td>
      <td id="td3TTT" onclick="playerPlaceTTT('td3TTT')" class="tdTTT" data-index="2"></td>
    </tr>
    <tr>
      <td id="td4TTT" onclick="playerPlaceTTT('td4TTT')" class="tdTTT" data-index="3"></td>
      <td id="td5TTT" onclick="playerPlaceTTT('td5TTT')" class="tdTTT" data-index="4"></td>
      <td id="td6TTT" onclick="playerPlaceTTT('td6TTT')" class="tdTTT" data-index="5"></td>
    </tr>
    <tr>
      <td id="td7TTT" onclick="playerPlaceTTT('td7TTT')" class="tdTTT" data-index="6"></td>
      <td id="td8TTT" onclick="playerPlaceTTT('td8TTT')" class="tdTTT" data-index="7"></td>
      <td id="td9TTT" onclick="playerPlaceTTT('td9TTT')" class="tdTTT" data-index="8"></td>
    </tr>
  </table>
  
  `,
  `  <div id="fcContainer">
  <button id="FCmainButton" onclick="createFCboard()">Start Game</button>
  </div>`,

  ` <div id="checkersContainer">
  </div>`,

  ,
];
// Creating the cards
const cardsContainer = document.querySelector("#cardsContainer");
for (let i = 0; i < GamesTitles.length; i++) {
  let card = document.createElement("div");
  let playButton = document.createElement("button");
  playButton.textContent = "Press To play";
  playButton.classList.add("playButton");
  let btnNumber = i;
  playButton.addEventListener("click", () => {
    openGame(btnNumber);
  });
  card.id = `cardID${i}`;
  const hiddenCard = document.createElement("div");
  hiddenCard.classList.add("hiddenCard");
  hiddenCard.textContent = "?";
  hiddenCard.id = `hiddenCardID${i}`;
  hiddenCard.addEventListener("click", () => {
    if (i > 2) {
      alert("sadly this is all the games available right now ):");
    } else {
      alert("Beat the available games to play this!");
    }
  });

  card.classList.add("card");
  card.textContent = GamesTitles[i];
  cardsContainer.appendChild(card);
  if (i > 0) {
    card.appendChild(hiddenCard);
  }
  // Won Games Function
  if (localStorage.getItem("RPS") && i == 1) {
    card.removeChild(hiddenCard);
  } else if (localStorage.getItem("TTT") && i == 2) {
    card.removeChild(hiddenCard);
  }
  card.appendChild(playButton);
}

// Open Game Function open the modal and changes the Inner html of the mini game screen, adds the top
let setupModal = document.querySelector("#modal");
const overlay = document.querySelector("#overLay");
const closeGameBTN = document.querySelector("#closeGameBTN");
function openGame(btnNumber) {
  overlay.classList.remove("invisible");
  miniGamesScreen.innerHTML = miniGamesContent[btnNumber];
  setupModal.showModal();
  if (btnNumber == 3) {
    startCheckersGame();
  }
}
closeGameBTN.addEventListener("click", () => {
  setupModal.close();
  overlay.classList.add("invisible");
});
