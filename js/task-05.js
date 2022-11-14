const textValue = document.querySelector('#name-input');
console.log(textValue);

const personName = document.querySelector('#name-output');
console.log(personName);


const handleInput = (event) => {
    const itIsName = event.target.value;
    console.log(name);

    if (itIsName) {
        personName.textContent = itIsName;
    } else {
        personName.textContent = "Anonymous!";
    }
};

textValue.addEventListener('input', handleInput);