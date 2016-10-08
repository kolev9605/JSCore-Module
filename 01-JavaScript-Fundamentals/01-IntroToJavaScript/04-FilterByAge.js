"use strict";

function solve(args) {
    let minAge = Number(args[0]);
    let firstPersonName = args[1];
    let firstPersonAge = Number(args[2]);
    let secondPersonName = args[3];
    let secondPersonAge = Number(args[4]);

    let firstPerson = {name: firstPersonName, age: firstPersonAge};
    let secondPerson = {name: secondPersonName, age: secondPersonAge};

    let persons = [firstPerson, secondPerson];

    for (let person of persons) {
        if(person.age >= minAge) {
            console.log(person);
        }
    }
}

solve(['12', 'Ivan', '15', 'Asen', '9']);