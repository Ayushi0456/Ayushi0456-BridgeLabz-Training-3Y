// Store the number
let x = 16.75;

// Perform mathematical operations
let roundedValue = Math.round(x);
let squareRoot = Math.sqrt(x);
let cube = Math.pow(x, 3);

// Generate a random integer between 10 and 50
let randomNumber = Math.floor(Math.random() * 41) + 10;

// Display formatted summary using template literals
let result = `
Math Utility Dashboard
----------------------

Original Number: ${x}
Rounded Value: ${roundedValue}
Square Root: ${squareRoot}
Power (x^3): ${cube}
Random Number (10-50): ${randomNumber}
`;

console.log(result);
