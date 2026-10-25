"use strict";

// Q3 - Transaction Validator

const transactions = [
{ id: 1, amount: 2000 },
{ id: 2, amount: -500 },
{ id: 3 },
null
];

const validTransactions = [];
const invalidTransactions = [];

console.log("======================================");
console.log("         TRANSACTION VALIDATOR");
console.log("======================================");

// Custom error classes for different validation failures.
class MissingDataError extends Error {
constructor(message) {
super(message);
this.name = "MissingDataError";
}
}

class NegativeAmountError extends RangeError {
constructor(message) {
super(message);
this.name = "NegativeAmountError";
}
}

for (const transaction of transactions) {
try {
// Reject null entries before accessing their properties.
if (transaction === null) {
throw new TypeError("Transaction entry is null.");
}
    // Validate that the transaction has both required properties.
    if (
        !Object.hasOwn(transaction, "id") ||
        !Object.hasOwn(transaction, "amount") ||
        transaction.id === undefined ||
        transaction.amount === undefined
    ) {
        throw new MissingDataError(
            "Transaction ID or amount is missing."
        );
    }

    // Validate the transaction ID.
    if (
        !Number.isInteger(transaction.id) ||
        transaction.id <= 0
    ) {
        throw new TypeError("Transaction ID must be a positive integer.");
    }

    // Validate the amount.
    if (
        typeof transaction.amount !== "number" ||
        !Number.isFinite(transaction.amount)
    ) {
        throw new TypeError("Transaction amount must be a valid number.");
    }

    if (transaction.amount < 0) {
        throw new NegativeAmountError(
            "Transaction amount cannot be negative."
        );
    }

    // Store the valid transaction.
    validTransactions.push(transaction);

    console.log(
        `VALID: ID = ${transaction.id}, Amount = Rs. ${transaction.amount}`
    );

} catch (error) {
    // Categorize invalid transactions with their error details.
    invalidTransactions.push({
        transaction: transaction,
        errorType: error.name,
        message: error.message
    });

    console.log("INVALID:", error.message);
    console.log("Error Type:", error.name);
}

// Debugging:
// Set a breakpoint on the next line.
// Inspect transaction, validTransactions and invalidTransactions.
console.log("Current valid count:", validTransactions.length);
console.log("Current invalid count:", invalidTransactions.length);

console.log("--------------------------------------");


}

// Print the final report.
console.log("\n======================================");
console.log("            FINAL REPORT");
console.log("======================================");

console.log("Valid Transactions:", validTransactions);
console.log("Invalid Transactions:", invalidTransactions);

console.log("Successful Count:", validTransactions.length);
console.log("Failed Count:", invalidTransactions.length);

// Debugging observations:
// 1. The first transaction is valid.
// 2. The second transaction has a negative amount.
// 3. The third transaction is missing its amount.
// 4. The fourth transaction is null.
// 5. try...catch allows the loop to continue after an invalid transaction.
