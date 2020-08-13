const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

// const questions = 

// array of questions for user
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title",
            default: "Project_Title"
        },
        {
            type: "input",
            message: "Provide a description of your project here:",
            name: "description",
            default: "This is a github project repository."
        },
        {
            type: "input",
            message: "Installation instructions:",
            name: "install",
            default: "You will only need an active browser to view this portfolio correctly. No installations requried! :+1:"
        },
        {
            type: "input",
            message: "Usage information:",
            name: "usage", 
            default: "No specifics."
        },
        {
            type: "list",
            message: "How is your project licensed?",
            choices: ["Apache", "GNU GPLv3", "MIT", "Mozilla Public 2.0"],
            name: "license",
            default: "MIT"
        },
        {
            type: "input",
            message: "Contributing guidelines:",
            name: "contributing",
            default: "Feel free to fork this repository, and open a pull request to suggest changes. Please provide a short note on your updates and/or additions!"
        },
        {
            type: "input",
            message: "Test instructions:",
            name: "tests"
        },
        {
            type: "input",
            message: "Enter your github username:",
            name: "questionsUserName",
            default: "hihellos"
        },
        {
            type: "input",
            message:"Enter your email:",
            name: "questionsEmail",
            default: "hihellos@github.com"
        },
    ]);
}

promptUser()
    .then(function(content) {
    console.log("this is our content: ", content);
    const readme = generateMarkdown(content);

    return writeFileAsync(`README_${content.title}.md`, readme);
    })
    .then(function() {
        console.log("Successfully wrote README!");
    })
    .catch(function(err) {
        console.log(err);
    });



// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
