"use strict";

function solve([prop1,val1,prop2,val2,prop3,val3]) {
    let obj = {};
    obj[prop1] = val1;
    obj[prop2] = val2;
    obj[prop3] = val3;

    return obj;
}


console.log(solve(['name', 'Pesho', 'age', '23', 'gender', 'male']));