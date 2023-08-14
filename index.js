// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "Title",
    },
    {
        type: "input",
        message: "Provide a description of your project and what it does.",
        name: "Description",
    },
    {
        type: "input",
        message: "Provide the steps needed to install your project and get the development environment running.",
        name: "Installation",
    },
    {
        type: "input",
        message: "Provide instructions and examples for how to use your project.",
        name: "Usage",
    },
    {
        type: "input",
        message: "List any collaborators or third-party assets with their name and a link to reach them.",
        name: "Credits",
    },
    {
        type: "input",
        message: "What type of licensing does your project have?",
        name: "License",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
