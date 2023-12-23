// actions.js

// Balance

export let actionsArr = [];

const currentBalance = document.querySelector("#balanceH1");
export function calculateBalance() {
  let totalBalance = 0;

  for (const action of actionsArr) {
    const parsedAction = JSON.parse(action);

    if (parsedAction.type == "Income") {
      totalBalance += parseFloat(parsedAction.amount);
    } else if (parsedAction.type == "Expense") {
      totalBalance -= parseFloat(parsedAction.amount);
    }
  }

  currentBalance.textContent = "balance: " + totalBalance;
}

export function addNewActionToLocalStorage(obj) {
  const objectAsString = JSON.stringify(obj);
  actionsArr.push(objectAsString);
  saveArrToLocalStorage(actionsArr);
}

export function deleteActionFromLocalStorage(ID) {
  const indexToDelete = actionsArr.findIndex((actionString) => {
    const action = JSON.parse(actionString);
    return action.id === ID;
  });

  if (indexToDelete !== -1) {
    actionsArr.splice(indexToDelete, 1);
    saveArrToLocalStorage(actionsArr);
  } else {
    console.error(`Action with ID ${ID} not found.`);
  }
}

export function editActionInLocalStorage(ID, newValues) {
  const indexToEdit = actionsArr.findIndex((actionString) => {
    const action = JSON.parse(actionString);
    return action.id === ID;
  });

  if (indexToEdit !== -1) {
    const editedAction = JSON.parse(actionsArr[indexToEdit]);

    editedAction.type = newValues.Type;
    editedAction.name = newValues.Name;
    editedAction.amount = newValues.Amount;

    actionsArr[indexToEdit] = JSON.stringify(editedAction);

    saveArrToLocalStorage(actionsArr);
  } else {
    console.error(`Action with ID ${ID} not found.`);
  }
}

export function saveArrToLocalStorage(arr) {
  localStorage.setItem("Actions", JSON.stringify(arr));
}

export function loadActionsFromLocalStorage() {
  const storedActions = localStorage.getItem("Actions");
  try {
    if (storedActions) {
      const parsedActions = JSON.parse(storedActions);

      if (Array.isArray(parsedActions)) {
        actionsArr = parsedActions;
      } else {
        console.error("Stored actions is not an array:", parsedActions);
        actionsArr = [];
      }
    }
  } catch (error) {
    console.error("Error parsing stored actions:", error);
    actionsArr = [];
  }
}

let actionsScreen = document.querySelector("#actionsManagement");
// onLoad
export function createActionsFromLocalStorage() {
  for (const action of actionsArr) {
    const parsedAction = JSON.parse(action);

    const actionLoaded = document.createElement("div");
    const idLoaded = parsedAction.id;
    const typeLoaded = parsedAction.type;
    const nameLoaded = parsedAction.name;
    const amountLoaded = parsedAction.amount;

    if (typeLoaded == "Expense") {
      actionLoaded.style.color = "rgb(222, 53, 53)";
    } else {
      actionLoaded.style.color = "#1C7155";
    }

    actionLoaded.classList.add("actionContainer");
    // From Main
    const infoSide = document.createElement("div");
    infoSide.id = "infoSide";

    const editSide = document.createElement("div");
    editSide.className = "editSide";
    // Delete Icon
    const deleteIcon = document.createElement("img");
    deleteIcon.src = "./icons/delete.svg";
    deleteIcon.addEventListener("click", () => {
      // Import
      deleteAction();
      deleteActionFromLocalStorage(idLoaded);
      calculateBalance();
    });
    // Edit Icon
    const editIcon = document.createElement("img");
    editIcon.src = "./icons/edit.svg";
    editIcon.addEventListener("click", () => {
      // Import
      editAction();
    });

    const actionName = document.createElement("h2");
    actionName.textContent = nameLoaded;
    const actionAmount = document.createElement("h3");
    actionAmount.textContent = amountLoaded;

    infoSide.appendChild(actionName);
    infoSide.appendChild(actionAmount);

    editSide.appendChild(deleteIcon);
    editSide.appendChild(editIcon);

    actionLoaded.appendChild(infoSide);
    actionLoaded.appendChild(editSide);
    actionsScreen.appendChild(actionLoaded);

    // Visible edit and Delete functions
    function saveChanges() {
      const oldName = actionName.textContent;
      const oldAmount = actionAmount.textContent;
      const oldType = typeLoaded;
      let newName;
      let newAmount;
      let newType;

      if (
        oldType == document.querySelector("#selectType").value ||
        null ||
        ""
      ) {
        newType = oldType;
      } else {
        newType = document.querySelector("#selectType").value;
      }
      if (
        oldName == document.querySelector("#actionName").value ||
        null ||
        ""
      ) {
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
      editActionInLocalStorage(idLoaded, newValues);
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
      actionsScreen.removeChild(actionLoaded);
    }
    function editAction() {
      editState();
    }
  }
}

// on page start create actions from Local Storage
