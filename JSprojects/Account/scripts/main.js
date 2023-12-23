// Imports
import { CreateNewAction, idUp } from "./createActions.js";
import {
  loadActionsFromLocalStorage,
  createActionsFromLocalStorage,
  calculateBalance,
} from "./LocalStorage.js";
// Balance;

// let currentBalance = 0;
const addbtn = document.querySelector("#addbtn");
addbtn.addEventListener("click", () => {
  CreateNewAction();
});

loadActionsFromLocalStorage();
createActionsFromLocalStorage();
calculateBalance();
