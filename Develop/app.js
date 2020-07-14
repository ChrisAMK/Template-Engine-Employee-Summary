const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlRenderer");
const internQuestions = [
    {
        type: "input",
        message: "Enter the intern's name: ",
        name: "internName"
    },
    {
        type: "input",
        message: "Enter the intern's ID number: ",
        name: "internId"
    },
    {
        type: "input",
        message: "Enter the intern's E-mail address: ",
        name: "internEmail"
    },
    {
        type: "input",
        message: "Enter your School: ",
        name: "internSchool"
    }
]

const engineerQuestions = [
    {
        type: "input",
        message: "Enter the Engineer's name: ",
        name: "engineerName"
    },
    {
        type: "input",
        message: "Enter the Engineer's ID number: ",
        name: "engineerId"
    },
    {
        type: "input",
        message: "Enter the Engineer's E-mail address: ",
        name: "engineerEmail"
    },
    {
        type: "input",
        message: "Enter your Github Account: ",
        name: "engineerGithub"
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
        message: "Enter Manager's ID number: ",
        name: "managerId"
    },
    {
        type: "input",
        message: "Enter the Manager's E-mail: ",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "Enter the Manager's Office Number: ",
        name: "managerNumber"
    },
    {
        type: "input",
        message: "How many Engineers are on the team? ",
        name: "engineerAmount"
    },
    {
        type: "input",
        message: "how many Interns are on the team? ",
        name: "internAmount"
    }
]

introPrompt()

function introPrompt() {
    inquirer.prompt(introQuestions).then(async function(response) {
        const {managerName, managerId, managerEmail, managerNumber, engineerAmount, internAmount} = response;

        const managerArray = [];
        managerArray[0] = new Manager(managerName, managerId, managerEmail, managerNumber);

        const promptedEngineerObjects = await promptEngineers(engineerAmount);
        const promptedInternObjects = await promptInterns(internAmount);

        const generatedEngineerArray = await generateEngineers(promptedEngineerObjects);
        const generatedInternArray = await generateInterns(promptedInternObjects);

        const employeeArray = managerArray.concat(generatedEngineerArray, generatedInternArray);
        console.log(employeeArray);

    })
}
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


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

// This function is taking in the amount of Engineers entered and looping for each
async function promptEngineers(engineerAmount) {
    let engineersArray = [];
    let engineerInt = parseInt(engineerAmount);
    for (i = 0; i < engineerInt; i++) {
        await inquirer.prompt(engineerQuestions).then(function(response) {

            engineersArray.push(response);
        })
    }

    return engineersArray
}

async function promptInterns(internAmount) {
    let internArray = [];
    internInt = parseInt(internAmount);
    for (i = 0; i < internInt; i++) {
        await inquirer.prompt(internQuestions).then(function(response){
            internArray.push(response);
        })
    }
    return internArray;
}

function generateEngineers(promptedEngineerObjects) {
    let generatedEngineerArray = [];
    for (i = 0; i < promptedEngineerObjects.length; i++) {
        // Generating an array of all new Engineer Classes
        generatedEngineerArray[i] = new Engineer(promptedEngineerObjects[i].engineerName, promptedEngineerObjects[i].engineerId, promptedEngineerObjects[i].engineerEmail, promptedEngineerObjects[i].engineerGithub)
    }
    return generatedEngineerArray;
}

function generateInterns(promptedInternObjects) {
    let generatedInternArray = [];
    for (i = 0; i < promptedInternObjects.length; i++) {
        // Generating an array of all new Intern Classes
        generatedInternArray[i] = new Intern(promptedInternObjects[i].internName, promptedInternObjects[i].internId, promptedInternObjects[i].internEmail, promptedInternObjects[i].internSchool)
    }
    return generatedInternArray;
}