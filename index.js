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

const inquirer = require('inquirer');
const fs = require('fs');

// const generateMarkdown;

const questions = [
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
    },
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
    },
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
    },
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
    },
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
    },
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
    },
]
//     .then(function writeToFile(fileName, data)) => {
//     console.log(data);
//     fs.writeFile(fileName, data, err => {
//         if (err) {
//             return console.log(err);
//         }
//         console.log("Success! Your README.md file has been generated")
//     });
// }
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Success! Your README.md file has been generated")
    });
}