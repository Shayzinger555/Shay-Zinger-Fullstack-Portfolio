function showOptions(selectingState, id) {
  if (selectingState == true) {
    id = parseInt(id);

    let option1Id = id - 11;
    let option2Id = id - 9;

    console.log(option1Id);
    let option1 = document.getElementById(option1Id);
    let option2 = document.getElementById(option2Id);

    if (option1) {
      option1.classList.toggle("myOptions");
    }

    if (option2) {
      option2.classList.toggle("myOptions");
    }
  } else {
    alert("hey");
    id = parseInt(id);

    let option1Id = id + 11;
    let option2Id = id + 9;

    let option1 = document.getElementById(option1Id);
    let option2 = document.getElementById(option2Id);

    if (option1) {
      option1.classList.toggle("myOptions");
    }

    if (option2) {
      option2.classList.toggle("myOptions");
    }
  }
}

export { showOptions };
