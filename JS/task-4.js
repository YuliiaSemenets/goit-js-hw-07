const decrementBtn = document.querySelector('[data-action="decrement"]');

const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = document.querySelector("#value");

let counterResult = 0;

const decrementBtnClick = () => {
  return (counterValue.textContent = counterResult -= 1);
};

const incrementBtnClick = () => {
  return (counterValue.textContent = counterResult += 1);
};

decrementBtn.addEventListener("click", decrementBtnClick);
incrementBtn.addEventListener("click", incrementBtnClick);
