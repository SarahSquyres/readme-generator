# README Generator Challenge 9


## Description

With the README generator, users have the ability to create a README file by using a command-line application.  All the user has to do is open the application and answer the prompts.  It's that simple. A high-quality README is dynamically generated with little effort.


## Installation

The application uses NPM Inquirer v8.2.4.

Run the following command in the terminal to install inquirer:

```bash
npm i inquirer
```

The application requires the following packages:

```javascript

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

```


## Usage

![Video Demo](https://drive.google.com/file/d/1ERXn8-cRmDUHD6Ket9tqrEGAc5wIowdK/view)

Usage for this application is simple.  Run the command: node index.js, as shown in the video.  Answer the prompts and the README will generate for the user.


## Credits

I would like to thank my tutors Faran and Erik for helping me with this project.

I also used Google's Bard to guide me through the project.

The license badge was obtained through https://opensource.org/licenses/.


## License

Licensed under the MIT license.
