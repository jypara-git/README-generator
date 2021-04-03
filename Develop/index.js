// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { resolve } = require('path');
const { rejects } = require('assert');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Title',
            message: "What is your project's title? (Required)",
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log('Please enter project title!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Description',
            message: 'What is the project about? Provide detailed description of your project.(Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide a description of your project!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'What needs to be installed in order to run this application? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide a valid answer!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'How is the application used? Provide instructions. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide a valid answer!')
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'License',
            message: 'What license is being used?',
            choices: ['MIT', 'GNU GPL v3', 'Apache 2.0', 'BSD 3-Clause','ISC', 'IBM', 'N/A']
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'Who contributed to this project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide a valid answer!')
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'Tests',
            message: 'What commands are needed to test this application? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide a valid answer!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Username',
            message: 'What is your GitHub username? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide a valid username!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide an email address!')
                    return false;
                }
            }
        }
    ])
};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data,(err)=> {
        if (err) {
            console.log(err)
        } else {
            console.log('File created!')
        }
    })
}
// TODO: Create a function to initialize app
function init() {
    questions()
    .then(answersData => {
        writeToFile('README',generateMarkdown(answersData));
    });
};
// Function call to initialize app
init();
