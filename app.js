const form = document.querySelector(`form`);
const item = document.querySelector(`.item`);
const amount = document.querySelector(`.amount`);
const div = document.querySelector(`.render`);
const arr = [];


// Rendering Items

function renderList() {
    div.innerHTML = ``
    item.value = ``
    amount.value = ``
    
    for (let i = 0; i < arr.length; i++) {
        div.innerHTML += `
        <h1>${arr[i]}
        <button class="removeButton" onclick="removeItem(${i})"><span>Remove</span></button>
        <button class="editButton" onclick="editItem(${i})"><span>Edit</span></button>
        
        </h1>
        
        `
    }
}


// Rendering Items




// Add Items

function addItem() {
    if (item.value === `` && amount.value === ``) {
        alert(`Enter Your Expense item and amount`)
    }else if (item.value === ``) {
        alert(`Enter Your Expense item`)
    }else if (amount.value === ``) {
        alert(`Enter Your Expense amount`) 
    } 
    else{
        arr.push(`${item.value} is cost you $${amount.value}`);
        renderList()
    }

}

// Add Items




// Removing Items

function removeItem(index) {
    arr.splice(index, 1)
    renderList()
}

// Removing Items




// Edit Items

function editItem(index) {
    const updateItem = prompt(`Enter your new item`)
    const updateAmount = prompt(`Enter your new item amount`)
    arr.splice(index, 1, `${updateItem} is cost you ${updateAmount}`)
    renderList()
}

// Edit Items