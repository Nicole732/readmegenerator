var fs = require("fs"); 
var inquirer = require("inquirer");
function generateMarkdown(data) {
  

  //creates a pre-readme.md file to store the response of the questions
  //(response,null,'\t')??
  fs.writeFile("pre-readme.md", JSON.stringify(data,null,'\t'), function (err) {
      //console.log(data.title + data.table);
      if (err) {
          return console.log(err);
        }
    
        console.log("Success!");
    
  });
  
  //creates an empty object to fill
  var text = Object.create(null);
  fs.readFile("pre-readme.md", "utf-8", function (error, response) {
     text = JSON.parse(response);
     //console.log(text);

      //write the title in the final readme with badge
      fs.writeFile("readmegenerator.md", "# " + text.title + "\n"+ "\n" +  "![badge](https://img.shields.io/badge/license-MIT-blue)" + "\n" + "\n", function(err) {
          if (err ) {
              console.log(err);
          }
      });

      fs.appendFile("readmegenerator.md", "Description"  + "\n" + "\n" + text.description +  "\n"+ "\n" , function(err) {
          if (err ) {
           
              console.log(err);
          }
      });
      fs.appendFile("readmegenerator.md", "Table of Content" + "\n" + "\n"+ text.table +  "\n"+ "\n" , function(err) {
          if (err ) {
              console.log(err);
          }
      });

      fs.appendFile("readmegenerator.md", "Installation" + "\n" + "\n"+ text.installation +  "\n"+ "\n" , function(err) {
          if (err ) {
              console.log(err);
          }
      });

      fs.appendFile("readmegenerator.md", "Usage" + "\n" + "\n" + text.usage +  "\n"+ "\n" , function(err) {
          if (err ) {
              console.log(err);
          }
      });
      fs.appendFile("readmegenerator.md", "License" + "\n" + "\n"+ text.licensing +  "\n"+ "\n" , function(err) {
          if (err ) {
              console.log(err);
          }
      });
      fs.appendFile("readmegenerator.md", "Contributions" + "\n" + "\n"+ text.contributing +  "\n"+ "\n" , function(err) {
          if (err ) {
              console.log(err);
          }
      });
      fs.appendFile("readmegenerator.md", "Questions" + "\n" + "\n"+ text.questioning +  "\n"+ "\n" , function(err) {
          if (err ) {
              console.log(err);
          }
      });
    }); 



}
module.exports = generateMarkdown;
