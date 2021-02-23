const inquirer = require('inquirer');   // package required to install on command line npm init -y then : npm i inquirer
const fs = require('fs');



const promptUser = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project ? ',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project ... ',
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please provide directions to install your project ... ',
        },
        {
            type: 'input',
            name: 'user',
            message: 'Please describe usage of the project... ',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select a license for the project... ',
            choices: [
                "Apache License 2.0",
                "GNU General Public License v3.0",
                "MIT License",
                "BSD 2-Clause Simplified License",
                "Boost Software License 1.0",
                "Eclipse Public License 2.0",
                "GNU Affero General Public License v3.0",
                "GNU General Public License v2.0",
                "Mozilla Public License 2.0",
            ]
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please explain the contribution guidelines for the project... ',
        },
        {
            type: 'input',
            name: 'testing',
            message: 'Please provide testing instructions for the project... ',
        },
        {
            type: 'input',
            name: 'question',
            message: 'Please provide directions for questions about the project... ',
        },
        {
            type: 'input',
            name: 'githubName',
            message: 'Please enter your Github user name... ',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your e mail address... ',
        },





    ]);

const generateMd = (answers) => `  # ${answers.title} 

![badge](https://img.shields.io/badge/License-${answers.license}-lightblue.svg)

## Description
${answers.description}

## Table of Contents
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contribution Guidelines](#contribution guidelines)
[Tests](#tests)
[Questions](#questions)


## Installation
${answers.install}

## Usage
${answers.user}

## License
This application is covered under the ${answers.license} license.

## Contribution Guidelines
${answers.contribution}

## Testing Directions
${answers.testing}

## Question Guidelines
${answers.question}

### Contact Information
Please address inquiries to me on Github: ${answers.githubName} (https://github.com/${answers.githubName})

Reach me by e mail at: ${answers.email}`;














const init = () => {
    promptUser().then((answers) => {
        try {
            const md = generateMd(answers);
            fs.writeFileSync('./output/README.md', md);
            console.log('Successfully wrote to read me');
        } catch (error) {
            console.log(error);


        }
    });
}
init();

////  licenses from github listed here

/// apache example of url for badge https://img.shields.io/badge/License-Apache%202.0-blue.svg
/// Boost Software License 1.0  (url for badge)
//[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)