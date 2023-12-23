//   Edit Fucnction
import { editBoxInLocalStorage } from "./localStorage.js";

export function editBox(thisID) {
  // Save Changes
  if (!document.getElementById("saveEditButton")) {
    let form = document.querySelector("#demo5Form");
    let saveEditButton = document.createElement("button");
    saveEditButton.classList.add("saveEditButton");
    saveEditButton.textContent = "save edit";
    saveEditButton.type = "button";
    saveEditButton.id = "saveEditButton";
    form.appendChild(saveEditButton);

    // Edit
    saveEditButton.addEventListener("click", (e) => {
      // inputs
      const editedBox = document.querySelector(`#${thisID}`);
      e.preventDefault();
      const NdivBgc = document.querySelector("#BGCinput").value,
        NdivHeight = document.querySelector("#heightInput").value,
        NdivWidth = document.querySelector("#widthInput").value,
        NdivText = document.querySelector("#textInput").value,
        NtextColor = document.querySelector("#textColor").value,
        NtextSize = document.querySelector("#textSize").value,
        NselectTsize = document.querySelector("#selectTsize").value,
        NselectH = document.querySelector("#selectH").value,
        NselectW = document.querySelector("#selectW").value;

  

      // BGC
      if (
        NdivBgc == editedBox.style.backgroundColor ||
        NdivBgc == null ||
        NdivBgc == ""
      ) {
      } else {
        editedBox.style.backgroundColor = NdivBgc;
      }
      // Height
      if (
        NdivHeight == editedBox.style.height ||
        NdivHeight == null ||
        NdivHeight == ""
      ) {
      } else {
        editedBox.style.height = NdivHeight + NselectH;
      }
      // width
      if (
        NdivWidth == editedBox.style.width ||
        NdivWidth == null ||
        NdivWidth == ""
      ) {
      } else {
        editedBox.style.width = NdivWidth + NselectW;
      }
      // Text content
      if (
        NdivText == editedBox.textContent ||
        NdivText == null ||
        NdivText == ""
      ) {
      } else {
        editedBox.textContent = NdivText;
      }

      // Text Color
      if (
        NtextColor == editedBox.style.color ||
        NtextColor == null ||
        NtextColor == ""
      ) {
      } else {
        editedBox.style.color = NtextColor;
      }
      // Text Size
      if (
        NtextSize == editedBox.style.fontSize ||
        NtextSize == null ||
        NtextSize == ""
      ) {
      } else {
        editedBox.style.fontSize = NtextSize + NselectTsize;
      }
      form.removeChild(saveEditButton);

      const newStyles = {
        Bgc: editedBox.style.backgroundColor,
        Height: editedBox.style.height,
        Width: editedBox.style.width,
        TextContent: editedBox.textContent,
        Color: editedBox.style.color,
        FontSize: editedBox.style.fontSize,
      };

      editBoxInLocalStorage(thisID, newStyles);
    });
  }
}
