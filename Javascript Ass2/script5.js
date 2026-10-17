// Security conditions
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Check security conditions
let isSecure =
isAlarmOn &&
isDoorLocked &&
isWindowClosed &&
isOwnerInside;

// Display result
if (isSecure) {
console.log("Secure");
} else {
console.log("Unsafe");
}

// Test another outcome by changing values
isAlarmOn = false;

isSecure =
isAlarmOn &&
isDoorLocked &&
isWindowClosed &&
isOwnerInside;

console.log("After turning off the alarm:");

if (isSecure) {
console.log("Secure");
} else {
console.log("Unsafe");
}

// Test a third outcome
isAlarmOn = true;
isOwnerInside = false;

isSecure =
isAlarmOn &&
isDoorLocked &&
isWindowClosed &&
isOwnerInside;

console.log("After the owner leaves:");

if (isSecure) {
console.log("Secure");
} else {
console.log("Unsafe");
}
