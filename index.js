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
            default: "Project Title"
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
            name: "installation",
        },
        {
            type: "input",
            message: "Usage information:",
            name: "usage", 
        },
        {
            type: "list",
            message: "How is your project licensed?",
            choices: ["Apache", "GNU GPLv3", "MIT", "Mozilla Public License 2.0", "Unlicensed"],
            name: "license"
        },
        {
            type: "input",
            message: "Contributing guidelines:",
            name: "contributing",
            default: "Please fork the repo and open a pull request to make contribution suggestions."
        },
        {
            type: "input",
            message: "Test instructions:",
            name: "tests"
        },
        {
            type: "input",
            message: "Enter your github username:",
            name: "questionsUserName"
        },
        {
            type: "input",
            message:"Enter your email:",
            name: "questionsEmail"
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



// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
