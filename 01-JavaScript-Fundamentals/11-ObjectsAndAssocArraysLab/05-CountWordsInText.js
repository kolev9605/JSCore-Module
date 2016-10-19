function solve([input]) {
    let words = input.split(/\W+/g).filter(x => x!='');
    let obj = {};

    for (let entry of words) {
        obj[entry] = obj[entry] | 0;
        obj[entry]++;
    }

    return JSON.stringify(obj)
}

console.log(solve(
    ["Far too slow, you're far too slow."]
));