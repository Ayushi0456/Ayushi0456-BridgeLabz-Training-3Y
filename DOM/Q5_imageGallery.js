
"use strict";

// Selecting elements
const imageGallery = document.getElementById("imageGallery");
const imageModal = document.getElementById("imageModal");
const previewImage = document.getElementById("previewImage");

const modalContent = document.querySelector(".modalContent");

// Add click event to gallery
imageGallery.addEventListener("click", function (event) {

    // Check if clicked element is an image
    if (event.target.tagName === "IMG") {

        // Display clicked image in modal
        previewImage.src = event.target.src;

        // Show modal
        imageModal.hidden = false;

    }

});

// Close modal when clicking outside image
imageModal.addEventListener("click", function () {

    imageModal.hidden = true;

});

// Prevent modal closing when clicking inside
modalContent.addEventListener("click", function (event) {

    event.stopPropagation();

});

