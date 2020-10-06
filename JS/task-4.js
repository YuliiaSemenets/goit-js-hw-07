const decrementBtn = document.querySelector('[data-action="decrement"]');

const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = document.querySelector("#value");

const decrementBtnClick = () =>
  (counterValue.textContent = Number(counterValue.textContent) - 1);

const incrementBtnClick = () =>
  (counterValue.textContent = Number(counterValue.textContent) + 1);

decrementBtn.addEventListener("click", decrementBtnClick);
incrementBtn.addEventListener("click", incrementBtnClick);
