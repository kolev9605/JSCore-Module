"use strict";

function solve([title,day]) {

    let listOfPrices = {};
    [title, day] = [title.toLowerCase(), day.toLowerCase()];
    listOfPrices["the godfather"] = {
        "monday": 12,
        "tuesday": 10,
        "wednesday": 15,
        "thursday": 12.5,
        "friday": 15,
        "saturday": 25,
        "sunday": 30
    };

    listOfPrices["schindler's list"] = {
        "monday": 8.5,
        "tuesday": 8.5,
        "wednesday": 8.5,
        "thursday": 8.5,
        "friday": 8.5,
        "saturday": 15,
        "sunday": 15
    };

    listOfPrices["casablanca"] = {
        "monday": 8,
        "tuesday": 8,
        "wednesday": 8,
        "thursday": 8,
        "friday": 8,
        "saturday": 10,
        "sunday": 10
    };

    listOfPrices["the wizard of oz"] = {
        "monday": 10,
        "tuesday": 10,
        "wednesday": 10,
        "thursday": 10,
        "friday": 10,
        "saturday": 15,
        "sunday": 15
    };

    if (listOfPrices[title] == undefined || listOfPrices[title][day] == undefined) {
        return "error";
    }

    return listOfPrices[title][day];

}

console.log(solve(['casablanca', 'SUNDAY']));