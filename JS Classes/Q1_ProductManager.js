"use strict";

// Q1 - E-Commerce Product Manager

class Product {
constructor(id, name, price, category) {
this.id = id;
this.name = name;
this.price = price;
this.category = category;
}


// Apply a discount and update the product price.
applyDiscount(discountPercentage) {
    if (discountPercentage < 0 || discountPercentage > 100) {
        throw new Error("Discount must be between 0 and 100.");
    }

    this.price = this.price - (this.price * discountPercentage / 100);
}

// Return formatted product details.
displayDetails() {
    return `ID: ${this.id}


Name: ${this.name}
Price: Rs. ${this.price.toFixed(2)}
Category: ${this.category}`;
}
}

// Create multiple product objects.
const products = [
new Product(1, "Laptop", 55000, "Electronics"),
new Product(2, "Headphones", 1500, "Electronics"),
new Product(3, "Notebook", 100, "Stationery"),
new Product(4, "Smartphone", 25000, "Electronics"),
new Product(5, "Pen", 20, "Stationery")
];

// Apply a 10% discount to the headphones.
products[1].applyDiscount(10);

// Display all products.
console.log("========== ALL PRODUCTS ==========");

for (const product of products) {
console.log(product.displayDetails());
console.log("------------------------------");
}

// Filter products whose current price is greater than 1000.
const expensiveProducts = products.filter(product => product.price > 1000);

function displayFilteredProducts() {
const output = document.getElementById("productOutput");

```
output.textContent = expensiveProducts.length
    ? expensiveProducts.map(product => product.displayDetails()).join("\n\n")
    : "No products found above Rs. 1000.";

console.log("Products priced above Rs. 1000:", expensiveProducts);
```

}

// Connect the button to the display function.
document.getElementById("showProductsButton")
.addEventListener("click", displayFilteredProducts);

// Display products automatically in the console.
displayFilteredProducts();

// Debugging observation:
// applyDiscount() changes the object's price.
// filter() returns a new array without changing the original array.
