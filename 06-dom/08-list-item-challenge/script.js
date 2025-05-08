// Quick - Dirty way to add element to Dom

function createListItem(item){
 const li = document.createElement('')


 li.innerHTML=`${item} <button> </button>`;

 document.querySelector(`.items`).appendChild(li);
    
}

// clean & performance way
function createNewItem(item){
    const li = document.createElement('li');

    const button = document.createElement('button');
    button.className = 'the class name from HTML'

    const icon = document.createElement('i');
    icon.className = 'icon ex fa-solid';

    //Appneding
    button.appendChild(icon);
    li.appendChild(button);

    document.querySelector(`.items`).appendChild(li);
}


createNewItem('Cheese')

createListItem('Egg')