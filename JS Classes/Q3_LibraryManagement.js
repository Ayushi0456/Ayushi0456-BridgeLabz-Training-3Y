"use strict";

// Q3 - Library Management System

class Book {
constructor(title, author, ISBN, isIssued = false) {
this.title = title;
this.author = author;
this.ISBN = ISBN;
this.isIssued = isIssued;
}


// Issue a book if it is currently available.
issueBook() {
    if (this.isIssued) {
        return "This book is already issued.";
    }

    this.isIssued = true;
    return "Book issued successfully.";
}

// Return a book if it is currently issued.
returnBook() {
    if (!this.isIssued) {
        return "This book has not been issued.";
    }

    this.isIssued = false;
    return "Book returned successfully.";
}

displayDetails() {
    return `Title: ${this.title}


Author: ${this.author}
ISBN: ${this.ISBN}
Status: ${this.isIssued ? "Issued" : "Available"}`;
}
}

// Create book objects.
const books = [
new Book("JavaScript Basics", "John Smith", "ISBN101"),
new Book("Learning HTML", "David Lee", "ISBN102"),
new Book("CSS Mastery", "Sarah Jones", "ISBN103"),
new Book("Advanced JavaScript", "Alex Brown", "ISBN104", true)
];

// Display books that have not been issued.
function displayAvailableBooks() {
const availableBooks = books.filter(book => !book.isIssued);
const output = document.getElementById("libraryOutput");

```
output.textContent = availableBooks.length
    ? availableBooks.map(book => book.displayDetails()).join("\n\n")
    : "No books are currently available.";

console.log("Available Books:", availableBooks);
```

}

// Search for a book by ISBN and issue it.
function issueBookByISBN() {
const isbnInput = document.getElementById("bookISBN");
const isbn = isbnInput.value.trim();
const output = document.getElementById("libraryOutput");


if (isbn === "") {
    output.textContent = "Please enter an ISBN.";
    return;
}

const book = books.find(item => item.ISBN === isbn);

if (!book) {
    output.textContent = "Book not found.";
    console.log("Book not found:", isbn);
    return;
}

const message = book.issueBook();

output.textContent = `${message}\n\n${book.displayDetails()}`;

console.log(message);
console.log(book.displayDetails());


}

// Connect buttons.
document.getElementById("issueBookButton")
.addEventListener("click", issueBookByISBN);

document.getElementById("showBooksButton")
.addEventListener("click", displayAvailableBooks);

// Display available books on page load.
displayAvailableBooks();

// Debugging observation:
// find() returns the matching book object or undefined.
// Updating book.isIssued changes that object inside the books array.
