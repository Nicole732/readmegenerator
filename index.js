var inquirer = require("inquirer");
var fs = require("fs");

//The question about license should allow the user to pick a license 
//from a list of choices. The 2 questions about "What command should be run..." 
//should have a default answer in case the user just presses "enter"

const questions = [
    {
        type: "input",
        name: "githubusername",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "projectname",
        message: "What is your project name?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your prpject:"
    },
    {
        type: "checkbox",
        name: "license",
        message: "What kind of license should your project have?",
        choices: [
            "MIT", 
            "CGNU AGPLv3", 
        ]
    },
    {
        type: "list",
        name: "runcommand",
        message: "What command should be run to install dependencies?",
        choices: [
            "npm i",
            "other"
        ]
     },
     {
        type: "list",
        name: "testcommand",
        message: "What command should be run to run tests?",
        choices: [
            "npm test",
            "other"
        ]
            
    },
    {
        type: "input",
        name: "repo",
        message: "What does the user need to know about using the repo?"
    },
    {
        type: "input",
        name: "contributions",
        message: "What does the use need to know about contributing to the repo?"
    }
];

var filename = "Readme.md";

inquirer.prompt(questions).then(function writeToFile(fileName, data) {

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

        if (err) {
          return console.log(err);
        }
    
        console.log("Success!");
    
      });

});
    




function init() {

}

init();
