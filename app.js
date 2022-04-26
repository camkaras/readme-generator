console.log(`
===================
README.MD GENERATOR
===================
`);
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
            type: 'confirm',
            name: 'feature',
            message: 'Please confirm personal information is correct',
            default: false
        },
        {
            type: 'input',
            name: 'ProjectName',
            message: 'What is the name of your project:'
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Enter your Project Description'
        },
        {
            type: 'input',
            name: 'IntsallationInstructions',
            message: 'Enter the Installation Instructions:'
        },
        {
            type: 'input',
            name: 'TestInstructions',
            message: 'Enter the Test Instructions:'
        },
        {
            type: 'input',
            name: 'UsageInformation',
            message: 'Enter Usage Information'
        },
        {
            type: 'input',
            name: 'ContributionGuidelines',
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
            name: 'GithubRepository',
            message: 'Enter the link to Github Repository:',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('You need to enter a GitHub link!');
                    return false;
                }
            }
        },
        {
            type: 'link',
            name: 'DeployedApplication',
            message: 'Enter the link to Deployed Application',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('You need to enter a link to Deployed App!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Please confirm project information is correct',
            default: false
        },
        
    ]);
};


// TODO: Create a function to write README file
questions().then(answers => console.log(answers));

fs.writeFile('./README.md', answers, err => {
    if (err) throw err;
    console.log('Portfolio complete! Check out index.html to see the output!');
});