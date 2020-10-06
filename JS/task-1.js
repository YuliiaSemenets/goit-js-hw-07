const itemList = document.querySelector("#categories");
console.log(`В списке ${itemList.children.length} категории`);

const nameEl = document.querySelectorAll("li.item");

nameEl.forEach((num) =>
  console.log(
    `Категория: ${num.firstElementChild.textContent}\n Количество элементов: ${
      num.querySelectorAll("li").length
    }`
  )
);
