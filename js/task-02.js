const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const firstList = document.querySelector("#ingredients");

const elements = value => {
  return value.map((ingredient) => {
  const newItem = document.createElement("li");
  newItem.textContent = `${ingredient}`;
  newItem.classList.add("item");

  return newItem;
});
}

const element = elements(ingredients)
firstList.append(...element);

