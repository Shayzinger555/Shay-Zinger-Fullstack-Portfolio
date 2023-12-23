export const button = document.querySelector("#submitButton");
export const userPage = document.querySelector(".userPage");
import { createNewBox } from "./DOM.js";
import {
  loadBoxesFromLocalStorage,
  createBoxesFromLocalStorage,
} from "./localStorage.js";
loadBoxesFromLocalStorage();
createBoxesFromLocalStorage();
button.addEventListener("click", () => {
  createNewBox();
});
