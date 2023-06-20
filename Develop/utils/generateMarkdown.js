function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `[![GitHub License](https://img.shields.io/badge/license-${license}-yellow.svg)](https://opensource.org/licenses/)`;
  }
  return '';
}

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
<br>
## Description
${data.description}
<br>
## Installation
${data.installation}
<br>
## Usage
${data.usage}
<br>
## License
Licensed under the ${data.license} license.
<br>
## How to Contribute
${data.contributing}
<br>
## Testing
${data.test}
<br>
## Questions
${data.questions}
<br>
Please feel free to email me at: 
<br>
${data.email} 

Check out my GitHub repos!
<br>
Here's the link to my GitHub:
<br>
 [${data.github}](https://github.com/${data.github}/)
`;
}

module.exports = generateMarkdown;
