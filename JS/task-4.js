const decrementBtn = document.querySelector('[data-action="decrement"]');

const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = document.querySelector("#value");

const decrementBtnClick = () => {
  --counterValue.textContent;
};

const incrementBtnClick = () => {
  ++counterValue.textContent;
};

decrementBtn.addEventListener("click", decrementBtnClick);
incrementBtn.addEventListener("click", incrementBtnClick);
