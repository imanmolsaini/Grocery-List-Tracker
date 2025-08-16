# Grocery List Tracker

Welcome to the **Grocery List Tracker**! This project is a simple tool to manage your grocery shopping list using JavaScript. It demonstrates the use of **arrays, functions, DOM manipulation**, and basic **frontend development**.

---

## Project Versions

### 1. Console Version
A simple JavaScript version that runs in the terminal or Node.js environment. Features:

- Add items to the grocery list
- Remove items from the grocery list
- View the current list
- Handles empty lists and invalid removals

**Example usage:**

```javascript
addItem("Milk");
addItem("Bread");
removeItem("Eggs"); // Outputs: Eggs is not in the grocery list
viewList();

Output:
Milk added to the grocery list.
Bread added to the grocery list.
Eggs is not in the grocery list.
Grocery List:
1. Milk
2. Bread



2. Frontend Version

An interactive web-based version of the Grocery List Tracker. Features:
	•	Add items using an input box
	•	Remove items by clicking on them
	•	Clear the entire list
	•	Styled with CSS for a clean, user-friendly interface
	•	Real-time list updates

Folder: frontend-version/
Files:
	•	index.html – Main HTML page
	•	style.css – Styles for layout and design
	•	script.js – JavaScript logic

Usage:
	1.	Open index.html in a web browser
	2.	Type an item in the input box and click “Add Item”
	3.	Click any item in the list to remove it
	4.	Click “Clear List” to remove all items

## How to Run

### Console Version
1. Clone the repository:
```bash
git clone https://github.com/yourusername/Grocery-List-Tracker.git

2.	Navigate to the console version folder:cd Grocery-List-Tracker/console-version

3.	Run using Node.js:node groceryList.js

Frontend Version
	1.	Open the index.html file in your web browser.
	•	Option 1: Double-click index.html in your file explorer.
	•	Option 2: Right-click → Open with → Your browser.
	2.	Use the input box and buttons to add, remove, and view your grocery list interactively.