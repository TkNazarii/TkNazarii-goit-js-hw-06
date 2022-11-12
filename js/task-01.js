const navElement = document.querySelectorAll('.item');
console.log('Number of categories:', navElement.length);

const navEl = document.querySelector('#categories');
// console.log(navElement.children[0]);
// console.log(navElement.children[1]);
// console.log(navElement.children[2]);

function content (value) {
    const itemTitle = value.firstElementChild.textContent
    console.log(itemTitle);
    
    const itemLength = value.lastElementChild.children.length
    console.log(itemLength);
}

content(navEl.children[0])
content(navEl.children[1])
content(navEl.children[2])
