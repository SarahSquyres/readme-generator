// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the Title of the project README?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project'
        },
        {
            type: 'input',
            name: 'table',
            message: 'List your Table of Contents'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install your dependencies?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use your code?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license does your project have?',
            choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3', 'None']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who contributed to the project?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'How do you run tests?'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Possible questions from users'
        },
    ]) 

.then((answers) => {
    const readmePageContent = generateMarkdown(answers);
    fs.writeFile('readme.md', readmePageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created readme.md!'));
});
// function writeToFile(filename, data) {
    
// }

// TODO: Create a function to initialize app
// function init() {

//     inquirer.prompt()
//         .then((answers) => {
           
//             console.log("Dataset: ", answers)
//             // Use user feedback for... whatever!!

//             let tempObj = {
//                 firstName: answers.first,
//                 lastName: answers.last
//             }
//         })
//         .catch((error) => {
//             if (error) {
//             // Prompt couldn't be rendered in the current environment
//             } else {
//             // Something else went wrong
//             }
//         });
//     }

// // Function call to initialize app
// init();
