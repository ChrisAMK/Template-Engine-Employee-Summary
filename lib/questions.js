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
];

module.exports = {
    internQuestions,
    introQuestions,
    engineerQuestions
}