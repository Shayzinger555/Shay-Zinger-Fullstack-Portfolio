import { userPage } from "./demo5.js";
import { deleteBox } from "./delete.js";
import { editBox } from "./edit.js";
import { addBoxToLocalStorage } from "./localStorage.js";

// Index.ID
let currentID = parseInt(localStorage.getItem("currentIDpageBuilder")) || 0;

export function idUp() {
  currentID++;
  localStorage.setItem("currentIDpageBuilder", currentID.toString());
}

// Creation Loop
export function createNewBox() {
  idUp();
  const thisID = `box${currentID}`;

  // Input Styles
  const divBgc = document.querySelector("#BGCinput").value;
  const divHeight = document.querySelector("#heightInput").value;
  const divWidth = document.querySelector("#widthInput").value;
  const divText = document.querySelector("#textInput").value;
  const textColor = document.querySelector("#textColor").value;
  const textSize = document.querySelector("#textSize").value;
  const selectTsize = document.querySelector("#selectTsize").value;
  const selectH = document.querySelector("#selectH").value;
  const selectW = document.querySelector("#selectW").value;

  const demoBox = document.createElement("div");

  // Styles & Classes
  demoBox.textContent = divText;
  demoBox.style.fontSize = textSize + selectTsize;
  demoBox.style.color = textColor;
  demoBox.style.backgroundColor = divBgc;
  demoBox.style.height = divHeight + selectH;
  demoBox.style.width = divWidth + selectW;
  demoBox.classList.add("newBox");

  demoBox.id = thisID;
  // Delete Button
  let iconsContainer = document.createElement("div");
  iconsContainer.classList.add("iconsContainer");
  let deleteIcon = document.createElement("img");
  deleteIcon.classList.add("icon");
  deleteIcon.classList.add("invisible");
  deleteIcon.setAttribute("src", "./icons/trash.svg");

  // Delete Function
  deleteIcon.addEventListener("click", () => {
    deleteBox(demoBox, thisID);
  });

  // Edit button
  let editIcon = document.createElement("img");
  editIcon.classList.add("icon");
  editIcon.classList.add("invisible");
  editIcon.addEventListener("click", () => {
    editBox(thisID);
  });

  // Hover reveals
  demoBox.addEventListener("mouseout", () => {
    demoBox.classList.remove("hoveredBox");
    deleteIcon.classList.add("invisible");
    editIcon.classList.add("invisible");
  });

  demoBox.addEventListener("mouseover", () => {
    demoBox.classList.add("hoveredBox");
    deleteIcon.classList.remove("invisible");
    editIcon.classList.remove("invisible");
  });

  editIcon.setAttribute("src", "./icons/settings.svg");
  iconsContainer.appendChild(deleteIcon);
  iconsContainer.appendChild(editIcon);
  demoBox.appendChild(iconsContainer);

  userPage.appendChild(demoBox);
  const boxStyles = {
    savedBgc: divBgc,
    savedHeight: divHeight + selectH,
    savedWidth: divWidth + selectW,
    savedText: divText,
    savedTextcolor: textColor,
    savedTextSize: textSize + selectTsize,
  };

  addBoxToLocalStorage(thisID, boxStyles);
}
