const inquirer = require('inquirer');   // package required to install on command line npm init -y then : npm i inquirer
const fs = require('fs');
const x = 555;


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
                "Creative Commons Zero v1.0 Universal",
                "Eclipse Public License 2.0",
                "GNU Affero General Public License v3.0",
                "GNU General Public License v2.0",
                "GNU Lesser General Public License v2.1",
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
## Description
${answers.description}

## Table of Contents


## Installation
${answers.install}

## Usage
${answers.user}

## Contribution Guidelines
${answers.contribution}

## Testing Directions
${answers.testing}

## Question Guidelines
${answers.question}

### Contact Information
Please address inquiries to me on Github: ${answers.githubName} (https://github.com/${answers.githubName})

Reach me by e mail at: ${answers.email}`;












console.log(x);

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

////  all possible licenses from github listed here

//None
//Apache License 2.0
//GNU General Public License v3.0
//MIT License
//BSD 2-Clause "Simplified" License
//BSD 3-Clause "New" or "Revised" License
//Boost Software License 1.0
//Creative Commons Zero v1.0 Universal
//Eclipse Public License 2.0
////GNU Affero General Public License v3.0
//GNU General Public License v2.0
//GNU Lesser General Public License v2.1
//Mozilla Public License 2.0 
