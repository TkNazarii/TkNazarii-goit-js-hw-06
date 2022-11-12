const myForm = document.querySelector(".login-form");


function onFormSubmit(event) {
    event.preventDefault();
        const { email, password } = event.currentTarget.elements;
    
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();

        if (!emailValue || !passwordValue) {
            return alert('1111111111');
        }
        console.log({ email: emailValue, password: passwordValue });
        event.currentTarget.reset();
};

myForm.addEventListener("submit", onFormSubmit);
// console.dir(event.currentTarget.elements.email.value);







