const fs = require("fs");
const inquirer = require("inquirer")

function init(){
inquirer.prompt ([
    {
        message: "Please enter the Project Managers Name",
        type: "input",
        name: "managerName",
    },
    {
        message: "Please enter the Project Managers Employee ID",
        type: "input",
        name: "managerID",
    },
    {
        message: "Please enter the Project Managers E-mail Address",
        type: "email",
        name: "managerEmail",
    },
    {
        message: "Please enter the Project Managers Office Number",
        type: "input",
        name: "managerOffice",
    },
    {
        message: "Would you like to add another member to the the team?",
        type: "list",
        name: "choice1",
        choices: ["Add an Engineer to the Team","Add an Intern to the team","Finish building the team",]
    },
    {
        message: "Please enter the Enginer's Name",
        type: "input",
        name: "engineerName",
    },
    {
        message: "Please enter the Engineer's Employee ID",
        type: "input",
        name: "engineerID",
    },
    {
        message: "Please enter the Engineer's E-mail Address",
        type: "email",
        name: "engineerEmail",
    },    {
        message: "Please enter the Engineers GitHub Name",
        type: "input",
        name: "engineerGithub",
    },
    {
        message: "Would you like to add another member to the the team?",
        type: "list",
        name: "choice1",
        choices: ["Add an Engineer to the Team","Add an Intern to the team","Finish building the team",]
    },
    {
        message: "Please enter the Interns Name",
        type: "input",
        name: "internName",
    },
    {
        message: "Please enter the Interns Employee ID",
        type: "input",
        name: "internID",
    },
    {
        message: "Please enter the Interns E-mail Address",
        type: "email",
        name: "internEmail",
    },    {
        message: "Please enter the Interns School Name",
        type: "input",
        name: "internSchool",
    },
]).then((ans) => {
    const renderHTML = createHTML(ans)
    fs.writeFile("index.HTML",renderHTML, function(err){
        if (err) console.log("error", err)
    })
})
}

init()
