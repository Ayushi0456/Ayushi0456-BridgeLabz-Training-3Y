"use strict";

// User class
class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

// Driver inherits User
class Driver extends User {
    constructor(name, rating, vehicle, vehicleNumber) {
        super(name, rating);
        this.vehicle = vehicle;
        this.vehicleNumber = vehicleNumber;
    }
}

// Trip class
class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (
            this.distance === undefined ||
            this.distance === null ||
            this.distance === "" ||
            !Number.isFinite(this.distance) ||
            this.distance < 0
        ) {
            throw new Error("Invalid distance provided!");
        }

        let farePerKm = 10;
        return this.distance * farePerKm;
    }
}

// Creating a driver
let driver = new Driver("Rahul", 4.8, "Car", "UP80AB1234");

// Valid trip
try {
    let trip1 = new Trip("Agra", "Mathura", 60);

    console.log("Driver:", driver.name);
    console.log("Rating:", driver.rating);
    console.log("Vehicle:", driver.vehicle);
    console.log("Vehicle Number:", driver.vehicleNumber);

    console.log("From:", trip1.fromLocation);
    console.log("To:", trip1.toLocation);
    console.log("Distance:", trip1.distance, "km");

    console.log("Fare: Rs.", trip1.calculateFare());

} catch (error) {
    console.log("Error:", error.message);
}

// Invalid trip
try {
    let trip2 = new Trip("Agra", "Delhi", -20);
    console.log("Fare: Rs.", trip2.calculateFare());

} catch (error) {
    console.log("Error:", error.message);
}