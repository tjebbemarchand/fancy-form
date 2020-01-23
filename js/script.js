const questions = [
    {
        question: "Enter your first name"
    },
    {
        question: "Enter your last name"
    },
    {
        question: "Enter your email",
        pattern: /\S+@\S+\.\S+/
    },
    {
        question: "Create a password",
        field: "password"
    }
];

// Transition times.
const shakeTime = 100; // Shake transition time.
const switchTime = 200; // Transition between questions.

// Init position at first question.
let position = 0;

// DOM Elements.
const formBox = document.querySelector("#form-box");
const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");
const inputGroup = document.querySelector("#input-group");
const inputField = document.querySelector("#input-field");
const inputLabel = document.querySelector("#input-label");
const inputProgress = document.querySelector("#input-progress");
const progressBar = document.querySelector("#progress-bar");

// FUNCTIONS.
// Get question from array and add to markup.
function getQuestion() {
    // Get current question.
    inputLabel.innerHTML = questions[position].question;

    // Get current type.
    inputField.type = questions[position].type || "text";

    // Get current answer.
    inputField.value = questions[position].answer || "";

    // Focus current element.
    inputField.focus();

    // Set progress bar width - variable to the questions array length.
    progressBar.style.width = (position * 100) / questions.length + "%";

    // Add user icon or back arrow depending on question.
    prevBtn.className = position ? "fas fa-arrow-left" : "fas fa-user";

    // Show question in UI.
    showQuestion();
}

// Display question to user.
function showQuestion() {
    inputGroup.style.opacity = 1;
    inputProgress.style.transition = "";
    inputProgress.style.width = "100%";
}

// Hide question to user.
function hideQuestion() {
    inputGroup.style.opacity = 0;
    inputLabel.style.marginLeft = 0;
    inputProgress.style.width = 0;
    inputProgress.style.transition = "none";
    inputGroup.style.border = null;
}

// Transform to create shake motion.
function transform(x, y) {
    formBox.style.transform = `translate(${x}px, ${y}px)`;
}

// Validate field.
function validate() {
    // Check if pattern matches.
    if (!inputField.value.match(questions[position].pattern || /.+/)) {
        inputFail();
    } else {
        inputPass();
    }
}

// Fail input.
function inputFail() {
    // Add error class.
    formBox.className = "error";

    // Repeat shake motion - set i to number of shakes.
    for (let i = 0; i < 6; i++) {
        setTimeout(transform, shakeTime * i, ((i % 2) * 2 - 1) * 20, 0);
        setTimeout(transform, shakeTime * 6, 0, 0);
        inputField.focus();
    }
}

// Passed input
function inputPass() {}

// EVENTS.
// Get question on DOM load.
document.addEventListener("DOMContentLoaded", getQuestion);

// Next button click.
nextBtn.addEventListener("click", validate);
