// Function To set ID

let currentID = parseInt(localStorage.getItem("currentID")) || 0;

export function idUp() {
  currentID++;
  localStorage.setItem("currentID", currentID.toString());
}
// Imports
import {
  addNewActionToLocalStorage,
  deleteActionFromLocalStorage,
  editActionInLocalStorage,
  calculateBalance,
} from "./LocalStorage.js";

export function CreateNewAction() {
  const amount = document.querySelector("#actionAmount").value;
  const amountAsNumber = parseFloat(amount);

  if (typeof amountAsNumber !== "number" || isNaN(amountAsNumber)) {
    alert("Amount must be a number");
    return;
  }

  idUp();
  const thisID = currentID;
  let actionsScreen = document.querySelector("#actionsManagement");
  const type = document.querySelector("#selectType").value,
    name = document.querySelector("#actionName").value;
  // Setting new Task

  const newAction = document.createElement("div");
  newAction.classList.add("actionContainer");
  const infoSide = document.createElement("div");

  if (type == "Expense") {
    newAction.style.color = "rgb(222, 53, 53)";
  } else {
    newAction.style.color = "#1C7155";
  }
  const editSide = document.createElement("div");
  editSide.className = "editSide";
  // Delete Icon
  const deleteIcon = document.createElement("img");
  deleteIcon.src = "./icons/delete.svg";
  deleteIcon.addEventListener("click", () => {
    // deleteActionFromLocalStorage();
    deleteAction();
  });
  // Edit Icon

  const editIcon = document.createElement("img");
  editIcon.src = "./icons/edit.svg";
  editIcon.addEventListener("click", () => {
    editAction();
  });

  // for data-type
  newAction.setAttribute("data-type", type);

  const actionName = document.createElement("h2");
  actionName.textContent = name;
  const actionAmount = document.createElement("h3");
  actionAmount.textContent = amount;
  const actionType = newAction.dataset.type;

  infoSide.appendChild(actionName);
  infoSide.appendChild(actionAmount);

  editSide.appendChild(deleteIcon);
  editSide.appendChild(editIcon);

  newAction.appendChild(infoSide);
  newAction.appendChild(editSide);
  actionsScreen.appendChild(newAction);

  // Visible edit and Delete functions

  function saveChanges() {
    const oldName = actionName.textContent;
    const oldAmount = actionAmount.textContent;
    const oldType = actionType;
    let newName;
    let newAmount;
    let newType;

    if (oldType == document.querySelector("#selectType").value || null || "") {
      newType = oldType;
    } else {
      newType = document.querySelector("#selectType").value;
    }
    if (oldName == document.querySelector("#actionName").value || null || "") {
      newName = oldName;
    } else {
      newName = document.querySelector("#actionName").value;
    }

    if (
      oldAmount == document.querySelector("#actionAmount").value ||
      null ||
      ""
    ) {
      newAmount = oldAmount;
    } else {
      newAmount = document.querySelector("#actionAmount").value;
    }

    const newValues = {
      Type: newType,
      Name: newName,
      Amount: newAmount,
    };
    editActionInLocalStorage(thisID, newValues);
    calculateBalance();
    actionName.textContent = newName;
    actionAmount.textContent = newAmount;
  }

  function editState() {
    const saveEditBTN = document.querySelector("#saveEdit");
    saveEditBTN.classList.remove("invisible");
    saveEditBTN.addEventListener("click", () => {
      saveEditBTN.classList.add("invisible");
      saveChanges();
    });
  }

  function deleteAction() {
    actionsScreen.removeChild(newAction);

    deleteActionFromLocalStorage(thisID);
    calculateBalance();
  }
  function editAction() {
    editState();
  }

  const actionDetails = {
    id: thisID,
    type: type,
    name: name,
    amount: amount,
  };

  addNewActionToLocalStorage(actionDetails);
  calculateBalance();
}
