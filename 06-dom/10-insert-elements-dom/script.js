//insertAdjacentElement Example
function insertElement(){
    const filter = document.querySelector('.filter');

    const h1 = document.createElement('h1');

    h1.textContent ='insertAdjacentElement';

    filter.insertAdjacentElement('beforebegin'. h1);
}

//insertAdjacentText Example
function insertText(){
    const item = document.querySelector('li:first-child');

    item.insertAdjacentText('afterend' , 'insertAdjacentText');
}

//insertAdjacentHTML Example

function insertHtml(){
    const clearBtn = document.querySelector('#clear');

    clearBtn.insertAdjacentHTML('afterend' , '<h2>insertAdjacentHTML</h2>');
}


//insertBefore Example
function insertBeforeItem(){
    const ul = document.querySelector('ul');

    const li = document.createElement('li');
    li.textContent = 'insertBefore';

    const tirdItem =  document.querySelector('li-nth-child(3)');

    ul.insertBefore(li, thirdItem);
}