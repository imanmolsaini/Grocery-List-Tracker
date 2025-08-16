let groceryList = [];

const itemInput = document.getElementById('itemInput');
const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clearBtn');
const listElement = document.getElementById('groceryList');

function addItem(item) {
    if (!item) return;
    groceryList.push(item);
    renderList();
    itemInput.value = "";
    alert(`${item} added to the grocery list.`);
}

function removeItem(index) {
    const removed = groceryList.splice(index, 1);
    renderList();
    alert(`${removed} removed from the grocery list.`);
}

function renderList() {
    listElement.innerHTML = "";
    if (groceryList.length === 0) {
        listElement.innerHTML = "<li>The grocery list is empty.</li>";
    } else {
        groceryList.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;
            li.style.cursor = "pointer";
            li.addEventListener('click', () => removeItem(index));
            listElement.appendChild(li);
        });
    }
}

addBtn.addEventListener('click', () => addItem(itemInput.value));
clearBtn.addEventListener('click', () => {
    groceryList = [];
    renderList();
});