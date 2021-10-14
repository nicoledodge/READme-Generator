// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

//notes from class
// starter code!!!
//how to get a license badge from markdown to git hub ?
// actually renders markdown with badge and link
//open back ticks for the temperate literal
//object notation to go inside and get what we need (data.title)
//inside index.js writeTofile - we need data
// function writeToFile(fileName, generateMarkdown(data)) {}
//HUGE HINT/HELP ^^


// write individual functions for different questions and label them a variable of "questions"
// if left blank, throw error message for user to put at least a place holder? or create placeholder if user leaves blank?
//function to call every function in a row - possibly with for each loop
//append markdown file to something and add gitignore files
//functions to edit the format of markdown - include social & deployed page links, place holder for gif demo, table of contents
//Create a .gitignore file and include node_modules/ and .DS_Store/ so that your node_modules directory isn't tracked or uploaded to GitHub. Be sure to create your .gitignore file before installing any npm dependencies.
//Make sure that your repo includes a package.json



//use write to file from lesson 13 & 14 to append everything to readme file!! - find out how to append to markdown
function init() {
    const inquirer = require('inquirer');
    const fs = require('fs');
    const generateMarkdown = require('./generateMarkdown');
// const generateMarkdown;

    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is your GitHub username?",
                name: 'github',
            },
            {
                type: 'input',
                message: "What is the name of your GitHub repo?",
                name: 'repo',
            },
            {
                type: 'input',
                message: "What is the title of your project?",
                name: 'title',
            },
            {
                type: 'link',
                message: "What is your email?",
                name: 'email'
            },
            {
                type: 'input',
                message: "Write a description of your project.",
                name: 'description',
            },
            {
                type: 'input',
                message: "If applicable, describe the steps required to install your project for the Installation section.",
                name: 'installation'
            },
            {
                type: 'input',
                message: "Provide instructions and examples of your project in use for the Usage section.",
                name: 'usage'
            },
            {
                type: 'input',
                message: "If applicable, provide guidelines on how other developers can contribute to your project.",
                name: 'contributing'
            },
            {
                type: 'input',
                message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
                name: 'tests'
            },
            {
                type: 'list',
                message: "Choose a license for your project.",
                choices: ["MIT", 'Mozilla Public 2.0', "GNU General Public License 2.0", "Apache 2.0", "GNU General Public License 3.0", 'Boost Software License 1.0', 'BSD 3-Clause License','BSD 2-Clause License'],
                name: 'license'
            },
        ])
        .then((data) => {
            // Create Markdown from data
            // const markdown = generateMarkdown(data);
            console.log(data);
            fs.writeFile('README.md', generateMarkdown(data), (err) =>
                err ? console.error(err) : console.log('Success!')
            );
        });
}

init();
//     .then(function writeToFile(fileName, data)) => {
//     console.log(data);
//     fs.writeFile(fileName, data, err => {
//         if (err) {
//             return console.log(err);
//         }
//         console.log("Success! Your README.md file has been generated")
//     });
// }
