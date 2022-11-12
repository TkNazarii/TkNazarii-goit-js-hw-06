const refs = {
    onTargetBtnClickDecrement: document.querySelector('[data-action="decrement"]'),
    onTargetBtnClickIncrement: document.querySelector('[data-action="increment"]'),
    chengrValue: document.querySelector('#value'),
};

let counterValue = 0;

const render = () => {
    refs.chengrValue.textContent = counterValue;
}

refs.onTargetBtnClickIncrement.addEventListener('click', changeValueIncrement);

function changeValueDecrement() {
    counterValue -= 1;
    render();
};

refs.onTargetBtnClickDecrement.addEventListener('click', changeValueDecrement);
function changeValueIncrement() {
    counterValue += 1;
    render();
};



