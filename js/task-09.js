
const widgetRefs = document.querySelector('.widget');
const spanRef = widgetRefs.querySelector('.color');
const btnRef = widgetRefs.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onClick() {
  const color = getRandomHexColor()
  document.body.style.background = color;
  spanRef.textContent = color; 
}

btnRef.addEventListener('click', onClick)