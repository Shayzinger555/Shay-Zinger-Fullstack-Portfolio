import {
  update as updateSnake,
  draw as drawSnake,
  snakeSpeed,
  getSnakeHead,
  snakeIntersection,
  mediumModeSpeed,
  hardModeSpeed,
  extremeModeSpeed,
} from "./snake.js";
import {
  update as updateFood,
  draw as drawFood,
  mediumModeXR,
  hardModeXR,
  extremeModeXR,
} from "./food.js";
import { outsideGrid } from "./grid.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("board");
const gameOverContainer = document.querySelector("#gameOverContainer");
gameOverContainer.close();

function main(currentTime) {
  if (gameOver) {
    gameOverContainer.showModal();
    gameOverContainer.classList.remove("invisible");
    return;
  }

  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / snakeSpeed) return;

  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}

// Modes / Starting the game / DOM
const modesDialog = document.querySelector("#modesDialog");
const snakeCardsContainer = document.querySelector("#snakeCardsContainer");
modesDialog.showModal();
const modesARR = ["Easy", "Medium mode", "Hard mode", "Extreme"];
const descriptionsARR = [
  "slow snake that expands by 5 segments each time he eats, he's probably got slow metabolism ",
  "classic snake game, mediocre speed , expands by one, a bit boring ",
  "now it's getting real , we got an athlete snake that moves twice as fast as the easy mode",
  "don't you got a life?, you aint winning this one",
];
modesARR.forEach((card, i) => {
  let snakeCard = document.createElement("div");
  snakeCard.classList.add("snakeCard");
  snakeCard.id = `snakeCardID${i + 1}`;
  let cardTitle = document.createElement("h2");
  cardTitle.classList.add("cardTitle");
  cardTitle.textContent = modesARR[i];
  let cardDES = document.createElement("p");
  cardDES.textContent = descriptionsARR[i];

  //
  snakeCard.addEventListener("click", () => {
    modesDialog.close();
    modesDialog.classList.add("invisible");
    if (snakeCard.id == "snakeCardID1") {
    } else if (snakeCard.id == "snakeCardID2") {
      mediumModeXR();
      mediumModeSpeed();
    } else if (snakeCard.id == "snakeCardID3") {
      hardModeXR();
      hardModeSpeed();
    } else if (snakeCard.id == "snakeCardID4") {
      extremeModeXR();
      extremeModeSpeed();
    }
  });

  snakeCard.appendChild(cardTitle);
  snakeCard.appendChild(cardDES);
  snakeCardsContainer.appendChild(snakeCard);
});

modesDialog.appendChild(snakeCardsContainer);
//  game over

const restartButton = document.querySelector("#restartButton");
restartButton.addEventListener("click", () => {
  document.location = "./snake.html";
});
