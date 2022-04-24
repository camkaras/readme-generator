
// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/template');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Name',
            message: 'What is your name? (Required)',
                
        }, 
        {
            type: 'input',
            name: 'Github',
            message: 'Enter your GitHub Username'
        },
        {
            type: 'input',
            name: 'Email',
            message: 'Enter your Email Address:'
        },
        {
            type: 'input',
            name: 'Project Name',
            message: 'What is the name of your project:'
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Enter your Project Description'
        },
        {
            type: 'input',
            name: 'Intsallation Instructions',
            message: 'Enter the Installation Instructions:'
        },
        {
            type: 'input',
            name: 'Test Instructions',
            message: 'Enter the Test Instructions:'
        },
        {
            type: 'input',
            name: 'Usage Information',
            message: 'Enter Usage Information'
        },
        {
            type: 'input',
            name: 'Contribution Guidelines',
            message: 'Enter the Contribution Guidelines:'
        },
        {
            type: 'checkbox',
            name: 'License',
            message: 'Select License (Check)',
            choices: ['Apache', 'Boost', 'BSD', 'Creative Commons', 'Eclipse', 'GNU', 'IBM']
        },
        {
            type: 'link',
            name: 'Github Repository',
            message: 'Enter the link to Github Repository:'
        },
        {
            type: 'link',
            name: 'Deployed Application',
            message: 'Enter the link to Deployed Application'
        },
        
    ]);
};


// TODO: Create a function to write README file
questions().then(answers => console.log(answers));
