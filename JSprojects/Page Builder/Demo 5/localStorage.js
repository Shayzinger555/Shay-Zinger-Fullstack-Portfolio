let pageBuilderBoxes = [];
import { userPage } from "./demo5.js";
import { editBox } from "./edit.js";
import { deleteBox } from "./delete.js";
export function loadBoxesFromLocalStorage() {
  const storedBoxes = localStorage.getItem("Boxes");

  try {
    if (storedBoxes) {
      const parsedBoxes = JSON.parse(storedBoxes);

      if (Array.isArray(parsedBoxes)) {
        pageBuilderBoxes = parsedBoxes;
      } else {
        console.error("Stored Boxes is not an array:", parsedBoxes);
        pageBuilderBoxes = [];
      }
    }
  } catch (error) {
    console.error("Error parsing stored boxes:", error);
    pageBuilderBoxes = [];
  }
}

export function addBoxToLocalStorage(id, styles) {
  const boxdata = {
    boxID: id,
    boxStyles: {
      boxBgc: styles.savedBgc,
      boxH: styles.savedHeight,
      boxW: styles.savedWidth,
      boxText: styles.savedText,
      boxTextColor: styles.savedTextcolor,
      boxTextSize: styles.savedTextSize,
      boxSelectTsize: styles.savedSelectTsize,
      boxSelectH: styles.savedSelectH,
      boxSelectW: styles.savedSelectW,
    },
  };

  pageBuilderBoxes.push(boxdata);
  const fixedArr = JSON.stringify(pageBuilderBoxes);
  localStorage.setItem("Boxes", fixedArr);
}

export function deleteBoxFromLocalStorage(id) {
  const indexToDelete = pageBuilderBoxes.findIndex((box) => box.boxID === id);

  if (indexToDelete !== -1) {
    pageBuilderBoxes.splice(indexToDelete, 1);
    const fixedArr = JSON.stringify(pageBuilderBoxes);
    localStorage.setItem("Boxes", fixedArr);
  }
}

export function editBoxInLocalStorage(id, newStyles) {
  const indexToEdit = pageBuilderBoxes.findIndex((box) => box.boxID === id);
  if (indexToEdit !== -1) {
    const editedBox = pageBuilderBoxes[indexToEdit];
    editedBox.boxStyles.boxBgc = newStyles.Bgc;
    editedBox.boxStyles.boxH = newStyles.Height;
    editedBox.boxStyles.boxW = newStyles.Width;
    editedBox.boxStyles.boxText = newStyles.TextContent;
    editedBox.boxStyles.boxTextColor = newStyles.Color;
    editedBox.boxStyles.boxTextSize = newStyles.FontSize;
    const fixedArr = JSON.stringify(pageBuilderBoxes);
    localStorage.setItem("Boxes", fixedArr);
  }
}

export function createBoxesFromLocalStorage() {
  if (pageBuilderBoxes.length >= 1) {
    pageBuilderBoxes.forEach((box) => {
      const demoBox = document.createElement("div");

      demoBox.style.backgroundColor = box.boxStyles.boxBgc;
      demoBox.style.height = box.boxStyles.boxH;
      demoBox.style.width = box.boxStyles.boxW;
      demoBox.textContent = box.boxStyles.boxText;
      demoBox.style.fontSize = box.boxStyles.boxTextSize;
      demoBox.style.color = box.boxStyles.boxTextColor;

      demoBox.classList.add("newBox");

      demoBox.id = box.boxID;

      // Styles & Classes

      // Delete Button
      let iconsContainer = document.createElement("div");
      iconsContainer.classList.add("iconsContainer");
      let deleteIcon = document.createElement("img");
      deleteIcon.classList.add("icon");
      deleteIcon.classList.add("invisible");
      deleteIcon.setAttribute("src", "./icons/trash.svg");

      // Delete Function
      deleteIcon.addEventListener("click", () => {
        deleteBox(demoBox, demoBox.id);
      });
      let editIcon = document.createElement("img");
      editIcon.classList.add("icon");
      editIcon.classList.add("invisible");
      editIcon.addEventListener("click", () => {
        editBox(demoBox.id);
      });
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
    });
  }
}
