// Requiring all neccersary information and modules from external files
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

const render = require("./lib/htmlRenderer");

// Array of object questions for the inquirer Prompts
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

init()

// This function is called as the program starts, it starts of with a prompt to get the initial information for the second round of questions
function init() {
    inquirer.prompt(introQuestions).then(async function(response) {
        const {managerName, managerId, managerEmail, managerNumber, engineerAmount, internAmount} = response;
        // Creating an Array containing the Manager Object that is later concattenated to the Final Array
        const managerArray = [];
        managerArray[0] = new Manager(managerName, managerId, managerEmail, managerNumber);

        // This function triggers a for loop so the user can enter however many Engineer's details that is needed
        // The info is then stored as a variable to pass into the generateEngineer function, Intern is identical
        const promptedEngineerObjects = await promptEngineers(engineerAmount);
        const promptedInternObjects = await promptInterns(internAmount);

        // This function passes in the PromptedInformation and in return gets Object's that are put through the contructor from the
        // appropriate classes. these newly generated Instances of their classes now contain all the functions.
        const generatedEngineerArray = await generateEngineers(promptedEngineerObjects);
        const generatedInternArray = await generateInterns(promptedInternObjects);

        // This line makes a new array that contains all employee information and functions, ready to be rendered to a html file.
        const employeeArray = managerArray.concat(generatedEngineerArray, generatedInternArray);
        
        // This function passes in all the Employee information in an array and outputs it to a HTML file, located in output folder.
        generateHTML(employeeArray)
    })
}
// This function simply gets the Final Employee array, renders it to HTML and then saves the inforamtion as a HTML File
function generateHTML(employeeArray) {
    fs.writeFile("output/team.html", render(employeeArray), function(err) {
        if (err) {
            return console.log(err);
        }
    });
}

// This function is taking in the amount of Engineers entered and looping through so the user can enter Individual Information
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
// Exactly the same as the promptEngineers function, also i should mention the array is then returned as a value
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
// This function takes in the user input array and then generates actual engineer class objects with the given info, also returns an array
function generateEngineers(promptedEngineerObjects) {
    let generatedEngineerArray = [];
    for (i = 0; i < promptedEngineerObjects.length; i++) {
        // Generating an array of all new Engineer Classes
        generatedEngineerArray[i] = new Engineer(promptedEngineerObjects[i].engineerName, promptedEngineerObjects[i].engineerId, promptedEngineerObjects[i].engineerEmail, promptedEngineerObjects[i].engineerGithub)
    }
    return generatedEngineerArray;
}
// Same as above
function generateInterns(promptedInternObjects) {
    let generatedInternArray = [];
    for (i = 0; i < promptedInternObjects.length; i++) {
        // Generating an array of all new Intern Classes
        generatedInternArray[i] = new Intern(promptedInternObjects[i].internName, promptedInternObjects[i].internId, promptedInternObjects[i].internEmail, promptedInternObjects[i].internSchool)
    }
    return generatedInternArray;
}