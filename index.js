// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser (){
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of this project?"
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of the porject: "
        },
        {
            type: "input",
            name: "installation",
            message: "Describe installation process or skip: "
        },
        {
            type: "input",
            name: "usage",
            message: "What is the purpose of this project?"
        },
		{
            type: "input",
            name: "built",
            message: "How was this project built?"
        },
        {
            type: "input",
            name: "contributing",
            message: "Who contributed to this project?"
        },
        {
            type: "input",
            name: "tests",
            message: "Is a test included?"
        },
        {
            type: "input",
            name: "username",
            message: "Enter GitHub username here: "
        },
        {
            type: "input",
            name: "email",
            message: "Enter email here: "
        }
    ]);
}
// TODO: Create a function to initialize app
async function init() {
    try {
        const data = await promptUser();
        const generateContent = generateMarkdown(data);
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('Successful');
    }   catch(err) {
        console.log(err);
    }
}

// Function call to initialize app
init();
