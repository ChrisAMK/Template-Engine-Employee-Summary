const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlRenderer");

const employeeQuestions = [
    {
        type: "input",
        message: "Enter the Employee's name: ",
        name: "employeeName"
    },
    {
        type: "input",
        message: "Enter the Employee's ID number: ",
        name: "employeeId"
    },
    {
        type: "input",
        message: "Enter the Employee's E-mail address: ",
        name: "employeeEmail"
    }
]

const introQuestions = [
    {
        type: "input",
        message: "Enter the Manager's Name: ",
        name: "managerName"
    },
    {
        type: "input",
        message: "Enter Employee's ID number: ",
        name: "managerId"
    },
    {
        type: "input",
        message: "Enter the Employee's E-mail: ",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "How many Employee's do you want to Enter? ",
        name: "employeeAmount"
    }
]

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
inquirer.prompt(introQuestions).then(function(response) {
    const {managerName, managerId, managerEmail, employeeAmount} = response;

    
    
    promptEmployees(employeeAmount);
})

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


async function promptEmployees(employeeAmount) {
    let returnedEmployeeQuestions = [];
    let employeeInt = parseInt(employeeAmount);
    for (i = 0; i < employeeInt; i++) {
        await inquirer.prompt(employeeQuestions).then(function(response) {

            // console.log("This is working")
            returnedEmployeeQuestions.push(response);
            console.log(response)
            console.log(returnedEmployeeQuestions)
        })
    }
    //console.log(response[0])

}