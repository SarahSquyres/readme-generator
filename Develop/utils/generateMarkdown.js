// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// Triple ticks only to be used in javascript
function generateMarkdown(data) {
  return `# ${data.title}

\`\`\`javascript

function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Generating README...');
    writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
  });
}

\`\`\`
## Description
${data.description}

## Table of Contents
* [License](#license)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [How to Contribute](#how-to-contribute)
* [Tests](#tests)
* [Questions?](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Testing
${data.test}

## Questions
${data.questions}

`;
}

module.exports = generateMarkdown;
