const validationInput = document.querySelector("#validation-input");

function inputFocusChange() {
  if (validationInput.value.length < validationInput.dataset.length) {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
  if (validationInput.value.length >= validationInput.dataset.length) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  }
}

validationInput.addEventListener("blur", inputFocusChange);
