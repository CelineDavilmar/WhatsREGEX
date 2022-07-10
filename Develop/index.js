import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown";


const questions = [
    {
        type: 'input',
        message: "What is the gist title?",
        name: 'title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid Project Title is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please enter Intro Paragraph",
        name: 'introductoryParagraph',
        default: 'introductoryParagraph',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A introductory paragraph is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Provide a summary of the REGEX featured",
        name: 'Summary',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid response is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Regex Components",
        name: 'regex components',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid response is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Anchors",
        name: 'anchors',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid response is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Quantifiers",
        name: 'Quantifiers',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid response is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Operators",
        name: 'Operator',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid response is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Character Classes",
        name: 'classes',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid response is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Flags",
        name: 'Flags',
        default: 'test instructions',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid response is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Grouping and Capturing",
        name: 'grouping',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid response is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Bracket Expressions",
        name: 'bracketExpressions',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid response is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Greedy and Lazy Match",
        name: 'greedy',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid response is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Boundaries",
        name: 'boundaries',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid response is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Back-references",
        name: 'ref',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid response is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Look-ahead and Look-behind",
        name: 'aheadbehind',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid response is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Author",
        name: 'author',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid response is required.");
            }
            return true;
        }
    },

];

function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err)
        }
        console.log('REGEX.md generated')
    })
}

function init() {
    inquirer.prompt(questions)
        .then(function (inquirerResponse, data) {
            console.log("Creating Gist");
            writeToFile("../gist-template.md", generateMarkdown(inquirerResponse, data));
        })
        .catch((err) => {
            console.log(err);
        })
}

init();