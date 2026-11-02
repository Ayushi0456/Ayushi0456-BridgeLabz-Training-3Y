// Creating user object
const user = {
    name: "Ayushi",

    // Arrow function
    showName: () => {
        console.log(this.name);
    }
};

// Calling method
user.showName();