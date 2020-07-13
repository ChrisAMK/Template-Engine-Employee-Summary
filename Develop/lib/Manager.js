const Employee = require("./Employee");

// Created Manager Class that inherits from the Employee Class and adds it's own Functions and data
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager"
    }

    getOfficeNumber() {
        return this.officeNumber
    }

}

module.exports = Manager