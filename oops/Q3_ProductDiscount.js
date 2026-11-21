"use strict";

// Constructor Function
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Adding method using Prototype
Product.prototype.applyDiscount = function(percent) {

    let discount = (this.price * percent) / 100;

    let newPrice = this.price - discount;

    return newPrice;
};

// Creating 3 product objects
let p1 = new Product("Laptop", 50000);
let p2 = new Product("Mobile", 20000);
let p3 = new Product("Headphones", 5000);

// Applying different discounts
console.log("Product:", p1.name);
console.log("Original Price:", p1.price);
console.log("Final Price:", p1.applyDiscount(10));

console.log("----------------------");

console.log("Product:", p2.name);
console.log("Original Price:", p2.price);
console.log("Final Price:", p2.applyDiscount(20));

console.log("----------------------");

console.log("Product:", p3.name);
console.log("Original Price:", p3.price);
console.log("Final Price:", p3.applyDiscount(15));