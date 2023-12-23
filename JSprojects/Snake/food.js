import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";

let food = getRandomFoodPosition();
export let expansionRate = 5;

export function update() {
  if (onSnake(food)) {
    expandSnake(expansionRate);
    food = getRandomFoodPosition();
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}
//  modes

export function mediumModeXR() {
  expansionRate = 1;
}
export function hardModeXR() {
  expansionRate = 1;
}
export function extremeModeXR() {
  expansionRate = 1;
}
