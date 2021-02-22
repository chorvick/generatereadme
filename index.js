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
            message: 'Please enter your user story for the project... ',
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
            name: 'githubName',
            message: 'Please enter your Github user name... ',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your e mail address... ',
        },
        {
            type: 'input',
            name: 'testing',
            message: 'Please provide testing instructions for the project... ',
        },




    ]);

const generateMd = (answers) => `  ${answers.title} `;


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


