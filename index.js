const inquirer = require('inquirer');   // package required to install on command line npm init -y then : npm i inquirer
const fs = require('fs');  /// file system is required for this to run 


//// below we prompt the user for each item with the exception of the license where they select the license (or no license) from a set of choices
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
                "Eclipse Public License 1.0",
                "GNU Affero General Public License v3.0",
                "GNU General Public License v2.0",
                "Mozilla Public License 2.0",
                "None"
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


//// this function called magicUrl uses a switch statement to assign the proper url for the badge based on the license the user slected
/// badgeUrl is first set to '' (nothing) then depending on the license the user selected is given the proper format to show up as
/// a license badge in markdown

const magicUrl = (badge) => {

    let badgeUrl = '';

    switch (badge) {
        case "Apache License 2.0":
            badgeUrl = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]`;

            break;
        case "GNU General Public License v3.0":
            badgeUrl = `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)`;

            break;
        case "MIT License":
            badgeUrl = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;

            break;
        case "BSD 2-Clause Simplified License":
            badgeUrl = `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;

            break;
        case "Boost Software License 1.0":
            badgeUrl = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;

            break;
        case "Eclipse Public License 1.0":
            badgeUrl = `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;

            break;
        case "GNU Affero General Public License v3.0":
            badgeUrl = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)`;

            break;
        case "GNU General Public License v2.0":
            badgeUrl = `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`;

            break;
        case "Mozilla Public License 2.0":
            badgeUrl = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;

            break;
        default:
            break;
    }

    return badgeUrl
};

//// based on what the user answered during the prompts this is where the actual markdown (README.md) text is generated in proper format so 
//it displays and functions correctly 

const generateMd = (answers) => `  # ${answers.title} 

${magicUrl(answers.license)}

## Description
${answers.description}

## Table of Contents
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contribution](#contribution)
[Tests](#tests)
[Questions](#questions)


## Installation
${answers.install}

## Usage
${answers.user}

## License
This application is covered under the ${answers.license}.

## Contribution 
${answers.contribution}

## Tests
${answers.testing}

## Questions
${answers.question}

### Contact Information
Please address inquiries to me on Github: [${answers.githubName}](https://github.com/${answers.githubName})

Reach me by e mail at: ${answers.email}`;











/// function init is the function that is called on line 202 below and prompts the user to answer various
/// questions about the file they want generated , this it uses writeFileSync to write that file to 
// a directory called output - it will console log success or any error 



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

//// found resource https://shields.io/category/license for all badges 

/// note since i am niether an authority or a lawyer and am not personally
/// familiar with various licenses and the badges that represent them I used these pages
/// as sources for the badges and license information and assume it is correct
/// https://naereen.github.io/badges/
///  https://gist.github.com/artem-solovev/e1602722f84835f35daef4dfb3df5500
///  https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
///  https://choosealicense.com/
/// 