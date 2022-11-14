const navElement = document.querySelectorAll('.item');
console.log('Number of categories:', navElement.length);

function content (value) {
    const itemTitle = value.firstElementChild.textContent
    console.log(itemTitle);
    
    const itemLength = value.lastElementChild.children.length
    console.log(itemLength);
}

for (const oneEl of navElement) {
    content(oneEl)
  }
