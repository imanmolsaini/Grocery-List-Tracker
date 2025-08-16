// Create an empty grocery list
let groceryList = [];

// Function to add an item to the grocery list
function addItem(item) {
    groceryList.push(item);
    console.log(`${item} added to the grocery list.`);
}

// Function to remove an item from the grocery list
function removeItem(item) {
    const index = groceryList.indexOf(item);
    if (index !== -1) {
        groceryList.splice(index, 1);
        console.log(`${item} removed from the grocery list.`);
    } else {
        console.log(`${item} is not in the grocery list.`);
    }
}

// Function to view the grocery list
function viewList() {
    if (groceryList.length === 0) {
        console.log("The grocery list is empty.");
    } else {
        console.log("Grocery List:");
        for (let i = 0; i < groceryList.length; i++) {
            console.log(`${i + 1}. ${groceryList[i]}`);
        }
    }
}

// Test the functions
viewList();
addItem("Milk");
addItem("Bread");
addItem("Eggs");
viewList();
removeItem("Bread");
viewList();
removeItem("Cheese");