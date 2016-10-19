function solve(args) {
    let pattern = /^([A-Z][A-Za-z]*) - (\d+) - ([A-Za-z0-9- ]+)$/g
    let match;
    for (let line of args) {
        while (match = pattern.exec(line)) {
            console.log(`Name: ${match[1]}`)
            console.log(`Position: ${match[3]}`)
            console.log(`Salary: ${match[2]}`)
        }
    }
}

solve([
    'Isacc - 1000 - CEO',
    'Ivan - 500 - Employee',
    'Peter - 500 - Employee'
])