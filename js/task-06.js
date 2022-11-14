const handleInput = document.querySelector("#validation-input");
// console.log(handleInput);

const handleInputBlur = function (event) {
  const userText = handleInput.value.length;

  const minUserText = +(handleInput.dataset.length); //6

  function multiply(x, y) {
    handleInput.classList.add(x);
    handleInput.classList.remove(y);
  }

  if (userText >= minUserText) {
    multiply("valid", "invalid");
    console.log("OK");
  } else {
    multiply("invalid", "valid");
    console.log("not OK");
  }
};

handleInput.addEventListener("blur", handleInputBlur);
