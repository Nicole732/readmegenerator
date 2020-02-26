var inquirer = require("inquirer");
const axios = require("axios");
var fs = require("fs"); 
var  generateMarkdown = require("./utils/generateMarkdown.js");
const api = require("./utils/api.js");

//The question about license should allow the user to pick a license 
//from a list of choices. The 2 questions about "What command should be run..." 
//should have a default answer in case the user just presses "enter"

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project name?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your prpject:"
    },
    {
        type: "input",
        name: "table",
        message: "Table of content:"
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install your application?",
        default: "npm i"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage of your application?"
    },

    {
        type: "checkbox",
        name: "licensing",
        message: "What kind of license should your project have?",
        choices: [
            "MIT", 
            "CGNU AGPLv3", 
            "Apache License 2.0.",
            "Mozilla Public License 2.0"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the use need to know about contributing to the repo?"
    },
    
    {
        type: "input",
        name: "testcommand",
        message: "What command should be run to run tests?",
        default: "npm test",
    },
    {
        type: "input",
        message: "Please provide information on Questions:",
        name: "questioning"
    }
];



function writeToFile(fileName, data) {

    inquirer.prompt(questions).
    then(function(data){
        generateMarkdown(data);
       
         init();

    }); 
    

}
writeToFile()

function init(){
    inquirer.prompt({
        message: "Enter your GitHub username",
        name: "username"
    })
    .then(function ({username}) {
        
        //console.log(answer.username);

        const queryUrl = `https://api.github.com/users/${username}`;
        
        console.log(queryUrl);
        //api.
       axios
        .get(queryUrl) 
        .then(function (res){
                console.log(res.data);

                console.log(res.data.avatar_url); 

                fs.appendFile("readmegenerator.md", "### GitHub Avatar" + "\n" + "\n" + "![RepoOwner](" + res.data.avatar_url + "&s=48"+ ")" + "\n" + "\n", function (err) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log("Your generated readme is saved as readmegenarator.md");
                });
           
                fs.appendFile("readmegenerator.md", "### GitHub Email: " + res.data.email + "\n" + "\n", function (err) {
                    if (err) {
                        return console.log(err);
                    }
                    
                });
            
        })
        .catch(function (error) {
                console.log(error);
        })
        .finally(function () {
                    //always executed
        });  
    });

}
