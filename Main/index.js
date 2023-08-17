// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Provide a description of your project and what it does.",
        name: "description",
    },
    {
        type: "input",
        message: "Provide the steps needed to install your project and get the development environment running.",
        name: "installation",
    },
    {
        type: "input",
        message: "Provide instructions and examples for how to use your project.",
        name: "usage",
    },
    {
        type: "list",
        message: "What type of license does your project have?",
        name: "license",
        choices: ["MIT", "ISC", "GPL-2.0", "AFL-3.0", "WTFPL", "no license"]
    },
    {
        type: "input",
        message: "List any collaborators or third-party assets with their name and a link to reach them.",
        name: "credits",
    },
    {
        type: "input",
        message: "Provide instructions for running tests.",
        name: "tests",
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your e-mail address?",
        name: "email",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Success!') )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(response);
        writeToFile("README.md", response)
    }) 
}

// Function call to initialize app
init();
