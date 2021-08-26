// TODO: Include packages needed for this application
const gen = require("./utils/generateMarkdown.js")
const inquirer = require("inquirer")
// TODO: Create an array of questions for user input
const questions = [];
function Question(type,message,name){
	this.type = type;
	this.meassage = message;
	this.name = name;
	this.mess = () => {
		inquirer
		.prompt([
		{
			type: type,
			message: message,
			name: name,
		}
		])
			.then((respones)=>
				console.log(respon)
			);
	}
};
const title = new Question("input","title here\n","user");
const descr = new Question("input","Enter a breif discription of your project\n","descrption");
const table = new Question(); 
title.mess();
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	fs.writeFile("README.md")
}

// TODO: Create a function to initialize app
function init = () =>{

}
// Function call to initialize app
init();
