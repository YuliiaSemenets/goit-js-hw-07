const inputTask = document.querySelector("#font-size-control");

const inputText = document.querySelector("#text");

function textChangeOnInput() {
  inputText.style.fontSize = inputTask.value + "px";
}

inputTask.addEventListener("input", textChangeOnInput);
