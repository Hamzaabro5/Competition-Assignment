const form = document.querySelector(`form`);
const item = document.querySelector(`.item`);
const amount = document.querySelector(`.amount`);
const div = document.querySelector(`div`);
const arr = [];


function renderList() {
    arr.push(`${item.value} is cost you ${amount.value}`);
    div.innerHTML = ``
    item.value = ``
    amount.value = ``
    
    for (let i = 0; i < arr.length; i++) {
        div.innerHTML += `
        <h1>${arr[i]}
        <button onclick="removeItem(${i})">Remove</button>
        <button onclick="editItem(${i})">Edit</button>
        </h1>
        
        `
    }
}



function removeItem(index) {
    arr.splice(index, 1)
    renderList()
}



function editItem(index) {
    const updateItem = prompt(`Enter your new item`)
    const updateAmount = prompt(`Enter your new item amount`)
    arr.splice(index, 1, `${updateItem} is cost you ${updateAmount}`)
    renderList()
}