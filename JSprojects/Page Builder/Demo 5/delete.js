import { userPage } from "./demo5.js";
import { deleteBoxFromLocalStorage } from "./localStorage.js";

export function deleteBox(demoBox, id) {
  userPage.removeChild(demoBox);
  deleteBoxFromLocalStorage(id);
}
