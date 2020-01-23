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
const progress = document.querySelector("#progress-bar");
