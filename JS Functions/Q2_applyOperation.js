// Function that accepts an array and a callback
function applyOperation(numbers, operation) {

    let result = numbers.map(operation);

    return result;
}

// Function to double numbers
function doubleNumber(number) {
    return number * 2;
}

// Function to square numbers
function squareNumber(number) {
    return number * number;
}

// Original array
let numbers = [1, 2, 3, 4];

// Double each number
let doubleResult = applyOperation(numbers, doubleNumber);

console.log("Doubled Numbers:", doubleResult);

// Square each number
let squareResult = applyOperation(numbers, squareNumber);

console.log("Squared Numbers:", squareResult);