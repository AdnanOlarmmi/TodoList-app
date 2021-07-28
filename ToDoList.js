const add = document.querySelector('#addList');
const addForm = document.querySelector('#addForm')
const newEntry = document.querySelector('#newEntry')
const form = document.querySelector('form');
const listContent = document.querySelector('.listContent');
const listItems = document.querySelector('.listItems');


add.addEventListener('click', () => {
    form.style.display = 'block';
})

addForm.addEventListener('click', (e) => {
    e.preventDefault();

    form.style.display = 'none';

    const newCheckBox = document.createElement("input")
    newCheckBox.type = "checkbox";
    newCheckBox.setAttribute("id", "checkbox");
    newCheckBox.classList.add('misc');


    const newDeleteButton = document.createElement("span")
    newDeleteButton.innerHTML = "×";
    newDeleteButton.setAttribute("class", "delete");
    newDeleteButton.classList.add('misc');

    let newListItem = createListItem(newEntry.value);
    // listContent.appendChild(newListItem);
    listContent.insertBefore(newListItem,listContent.childNodes[0]);
    newListItem.appendChild(newDeleteButton);
    newListItem.appendChild(newCheckBox)

    newEntry.value = '';  
});
function createListItem(text) {
    const newListElement = document.createElement("div");
    newListElement.textContent = text;
    newListElement.classList.add('listItems');
    //  newListElement.setAttribute("class","listItems");
    return newListElement;
}

listContent.addEventListener("click", (e)=>{
    if(e.target.classList.contains("delete")){
        e.target.parentNode.style.display = "none";
    }
    
    if (e.target.classList.contains("listItems")) {
        e.target.classList.toggle("done");
    }
})

