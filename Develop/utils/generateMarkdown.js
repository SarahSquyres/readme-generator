// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `[![GitHub License](https://img.shields.io/badge/license-${license}-yellow.svg)](https://opensource.org/licenses/)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [How to Contribute](#how-to-contribute)
* [Testing](#tests)
* [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## How to Contribute
${data.contributing}

## Testing
${data.test}

## Questions
${data.questions}

Please feel free to email me at: ${data.email} 

Check out my GitHub repos!
Here's the link to my GitHub: [${data.github}](https://github.com/${data.github}/)
`;
}

module.exports = generateMarkdown;
