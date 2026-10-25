"use strict";

// Q4 - Custom Form Builder

class FormBuilder {
constructor(fields, containerId, outputId) {
this.fields = fields;
this.container = document.getElementById(containerId);
this.output = document.getElementById(outputId);


    this.createForm();
}

// Create form fields dynamically.
createForm() {
    const form = document.createElement("form");
    form.id = "customDynamicForm";

    // Generate the form controls from the fields array.
    form.innerHTML = this.fields.map((field, index) => {
        const inputId = `dynamicField${index}`;

        const inputType = ["text", "email", "password", "number"]
            .includes(field.type) ? field.type : "text";

        return `
            <label for="${inputId}">${field.label}</label>
            <input
                type="${inputType}"
                id="${inputId}"
                name="${field.name}"
                ${field.required ? "required" : ""}
            >
        `;
    }).join("");

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit";

    form.appendChild(submitButton);

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = this.getFormData();

        this.output.textContent =
            JSON.stringify(formData, null, 2);

        console.log("Dynamic Form Data:", formData);
    });

    this.container.replaceChildren(form);
}

// Return all entered values as an object.
getFormData() {
    const formData = {};

    for (let index = 0; index < this.fields.length; index++) {
        const field = this.fields[index];
        const input = document.getElementById(`dynamicField${index}`);

        formData[field.name] = input.value;
    }

    return formData;
}


}

// Define the fields required for the form.
const formFields = [
{
type: "text",
name: "username",
label: "Username",
required: true
},
{
type: "email",
name: "email",
label: "Email",
required: true
},
{
type: "password",
name: "password",
label: "Password",
required: true
}
];

// Create the form.
const customForm = new FormBuilder(
formFields,
"dynamicFormContainer",
"dynamicFormOutput"
);

// Debugging observation:
// The form is generated from an array, so new fields can be added
// by adding objects to formFields.
// getFormData() reads the current input values into a plain object.
