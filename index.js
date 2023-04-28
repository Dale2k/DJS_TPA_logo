//configuration

const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./lib/questions.js");
const fileName = "./examples/logo.svg";
const makeShape = require("./lib/makeShape.js");

// function to create new svg file using inquirer
function Logo(response) {
  const svg = makeShape(response);
  fs.writeFile(fileName, svg, () => console.log("Generated logo.svg"));
}

function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      Logo(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

init();
