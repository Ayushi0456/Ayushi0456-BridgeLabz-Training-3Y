"use strict";

// Q1 - Dynamic Data Parser

const apiData = [
"25",
"true",
"false",
"NaN",
" ",
"100px",
"3.14",
null,
undefined
];

// Arrays to store valid and invalid numeric data.
const validNumbers = [];
const invalidNumbers = [];

console.log("======================================");
console.log("       DYNAMIC DATA PARSER");
console.log("======================================");

// Process every value using a loop.
for (let i = 0; i < apiData.length; i++) {


const value = apiData[i];

// Convert the value into Number, Boolean and String.
const numberValue = Number(value);
const booleanValue = Boolean(value);
const stringValue = String(value);

// Identify whitespace-only strings.
const isWhitespace =
    typeof value === "string" && value.trim() === "";

// Identify strings that explicitly contain "NaN".
const isNaNString =
    typeof value === "string" && value.trim() === "NaN";

// A value is valid only if it represents a finite number
// and is not an excluded input such as null or undefined.
const isValid =
    value !== null &&
    value !== undefined &&
    !isWhitespace &&
    !isNaNString &&
    Number.isFinite(numberValue);

console.log(`\nValue ${i + 1}:`);
console.log("Original Value:", value);
console.log("Number Conversion:", numberValue);
console.log("Boolean Conversion:", booleanValue);
console.log("String Conversion:", stringValue);

if (isValid) {

    // Store the converted numeric value.
    validNumbers.push(numberValue);

    console.log("Status: VALID NUMBER");

} else {

    // Store the original value for debugging and reporting.
    invalidNumbers.push(value);

    console.log("Status: INVALID NUMBER");
    console.log("Reason:", getInvalidReason(value, numberValue));
}

console.log("--------------------------------------");


}

// Return a reason for invalid numeric values.
function getInvalidReason(value, numberValue) {

```
if (value === null) {
    return "Null value is excluded from numeric API data.";
}

if (value === undefined) {
    return "Undefined value is excluded from numeric API data.";
}

if (typeof value === "string" && value.trim() === "") {
    return "Empty or whitespace-only string.";
}

if (typeof value === "string" && value.trim() === "NaN") {
    return 'The string "NaN" does not represent a valid number.';
}

if (Number.isNaN(numberValue)) {
    return "Conversion produced NaN.";
}

return "Value is not a valid finite number.";
```

}

// Print the final report.
console.log("\n======================================");
console.log("             FINAL REPORT");
console.log("======================================");

console.log("Valid Numeric Data:", validNumbers);
console.log("Invalid Data:", invalidNumbers);

console.log("Total Values:", apiData.length);
console.log("Valid Count:", validNumbers.length);
console.log("Invalid Count:", invalidNumbers.length);

// Debugging observations:
// 1. Number("25") returns 25.
// 2. Number("3.14") returns 3.14.
// 3. Number("100px") returns NaN.
// 4. Boolean("false") returns true because it is a non-empty string.
// 5. Number(null) returns 0, but null is excluded by our validation.
// 6. Number(" ") returns 0, but whitespace-only strings are excluded.
// 7. "use strict" prevents accidental creation of undeclared globals.
