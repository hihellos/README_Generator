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
            choices: ["Apache", "GPLv3", "MIT", "MozillaPublic2.0"],
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
    if (content.license === "Apache") {
        content.badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
    if (content.license === "GPLv3") {
        content.badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }
    if (content.license === "MIT") {
        content.badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" 
    }
    if (content.license === "MPL2.0") {
        content.badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }

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
