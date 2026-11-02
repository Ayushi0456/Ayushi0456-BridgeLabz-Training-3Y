```javascript
"use strict";

// Selecting HTML elements
const productInput = document.getElementById("productInput");
const addProductButton = document.getElementById("addProduct");
const productList = document.getElementById("productList");

// Add new product
addProductButton.addEventListener("click", function () {

    const productName = productInput.value.trim();

    if (productName === "") {
        alert("Please enter a product name");
        return;
    }

    const listItem = document.createElement("li");

    const productText = document.createElement("span");
    productText.textContent = productName;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";

    listItem.append(productText, editButton, deleteButton);

    productList.appendChild(listItem);

    productInput.value = "";
});

let editingItem = null;

// Event Delegation
productList.addEventListener("click", function (event) {

    const listItem = event.target.closest("li");

    if (!listItem) return;

    // Delete product
    if (event.target.classList.contains("delete")) {

        listItem.remove();
        return;
    }

    // Edit product
    if (event.target.classList.contains("edit")) {

        if (editingItem && editingItem !== listItem) {
            saveEdit();
        }

        const productText = listItem.querySelector("span");

        const editInput = document.createElement("input");
        editInput.value = productText.textContent;

        listItem.replaceChild(editInput, productText);

        editingItem = listItem;

        editInput.focus();
    }

});

// Save edited product
function saveEdit() {

    if (!editingItem) return;

    const editInput = editingItem.querySelector("input");

    if (!editInput) {
        editingItem = null;
        return;
    }

    const productText = document.createElement("span");

    productText.textContent =
        editInput.value.trim() || "Unnamed Product";

    editingItem.replaceChild(productText, editInput);

    editingItem = null;
}

// Auto-save when clicking outside edited item
document.addEventListener("click", function (event) {

    if (editingItem && !editingItem.contains(event.target)) {
        saveEdit();
    }

});
```
