const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const newList = document.querySelector(".gallery");

const markup = images
  .map((image) => `<li><img src="${image.url}" alt="${image.alt}"></li>`)
  .join("");

newList.insertAdjacentHTML("beforeend", markup);

// const newList = document.querySelector(".gallery");

// const makeGalery = image => {
//   const newItem = document.createElement("li");
//   newItem.classList.add('decorGalery');

//   const newImage = document.createElement("img");
//   newImage.alt = image.alt;
//   newImage.src = image.url;

//   newItem.append(newImage);

//   return newItem
// }

// const elements = images.map(makeGalery);

// newList.append(...elements);
