// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt([
        /* Pass your questions in here */
            {
                type: 'input',
                name: 'title',
                message: 'What is the Title of the project readme?'
            },
            {
                type: 'input',
                name: 'last',
                message: 'what is your last name?'
            },
        ])
        .then((answers) => {
            console.log("Dataset: ", answers)
            // Use user feedback for... whatever!!

            let tempObj = {
                firstName: answers.first,
                lastName: answers.last
            }
        })
        .catch((error) => {
            if (error) {
            // Prompt couldn't be rendered in the current environment
            } else {
            // Something else went wrong
            }
        });
    }

// Function call to initialize app
init();
