// Getting html elements
const valentine_img = document.getElementById("valentine-img");
const valentine_text = document.getElementById("valentine-text");
const acceptance_btn = document.getElementById("acceptance-btn");
const refuse_btn = document.getElementById("refuse-btn");
const num = document.getElementById("number");

// Array of images to be displayed on refusal
const images_refuse = ["sad.gif", "sad2.gif", "sad3.gif", "angry.gif"];

// Array of textual messages to be displayed on refusal
const text_refuse = [
  "Maybe you want to change your opinion?",
  "Maybe you can give a chance, please?",
  "Please I'm begging you with all my heart!",
  "You don't deserve me!",
];
let currentIndex = 0; // Index of the current image/text in the refusal arrays

// Event handler for the refusal button
refuse_btn.addEventListener("click", () => {
  // Check if we've reached the end of either the images or text arrays
  if (
    currentIndex === images_refuse.length ||
    currentIndex === text_refuse.length
  ) {
    refuse_btn.disabled = true; // If so, disable the refusal button
    return;
  }

  // Set new image and text on refusal
  valentine_img.src = images_refuse[currentIndex];
  valentine_text.textContent = text_refuse[currentIndex];
  num.textContent = ""; // Clear the phone number
  currentIndex++; // Increment index for the next image/text
});

// Event handler for the acceptance button
acceptance_btn.addEventListener("click", () => {
  // Set image and text on acceptance
  valentine_img.src = "love-happy.gif";
  valentine_text.textContent = "THANK YOU MY LOVE!";
  num.textContent = "Call me baby: +996552911166))"; // Provide the phone number
});