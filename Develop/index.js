// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
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
    name: 'Table of Contents',
    message: 'Table of Contents'
},
{
    type: 'input',
    name: 'Installation',
    message: 'What needs to be installed in order to run this application?(ex: Dependencies)'
},
{
    type: 'input',
    name: 'Usage',
    message: 'How is the application used? Provide instructions.'
},
{
    type: 'input',
    name: 'Licence',
    message: 'What licence is being used?'
},
{
    type: 'input',
    name: 'Contributing',
    message: 'Who contributed to this project?'
}, 
{
    type: 'input',
    name: 'Tests',
    message: 'What commands are needed to test this application?'
},
{
    type:'input',
    name: 'Questions',
    message: 'Contact info for inquiries.'
},
{
    type: 'input',
    name: 'Username',
    message: 'What is your GitHub username?'
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
}
])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
