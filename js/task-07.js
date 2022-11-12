const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const changeFontSize = function (event) {
  const itIsName = event.target.value;
  console.log(itIsName);

  text.style.fontSize = `${itIsName}px`;
};

input.addEventListener("input", changeFontSize);
