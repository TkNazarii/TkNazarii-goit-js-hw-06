const handleInput = document.querySelector("#validation-input");
console.log(handleInput);

const handleInputBlur = function a(event) {
  const userText = handleInput.value.length;

  const minUserText = Number(handleInput.dataset.length); //6

  if (userText >= minUserText) {
    handleInput.classList.add("valid");
    handleInput.classList.remove("invalid");
    console.log("OK");
  } else {
    handleInput.classList.remove("valid");
    handleInput.classList.add("invalid");
    console.log("not OK");
  }
};

handleInput.addEventListener("blur", handleInputBlur);
