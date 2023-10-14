// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "title",
        message: "What is your project's name?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project."
    },
    {
        type: "checkbox",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "What are some examples and instructions for use?"
    },
    {
        type: "input",
        name: "credits",
        message: "Who did you collaborate with on this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?",
    },
    {
        type: "input",
        name: "contribute",
        message: "What does the user need to know about contributing to the repo?",
    },
];

const generateReadme = ({ username, email, title, description, license, installation, usage, credits, tests, contribute }) =>
    `
# ${title}

## Description 

${description}

## Table of Contents

    - [License](#license)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)

## License 

${license}

## Installation 

${installation}

## Usage

${usage}

## Credits

${credits}

## How to Contribute

${contribute}

## tests

${tests}

## Questions 

If you have any additional questions, please refer to the my github profile at[${username}](https://github.com/${username}) or email me at ${email}. Thank you.
`;

inquirer
.prompt(questions)
    .then((data) => {
        const readmeCont = generateReadme(data);

        fs.writeFile('./sandbox/README.md', readmeCont, (err) =>
            err ? console.log(err) : console.log('Successfully created your README.md!')
        );
    });

