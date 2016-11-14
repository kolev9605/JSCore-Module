function solve() {
    let typesCount = new Map()
    for (let argument of arguments) {
        let typeOfArg = typeof(argument)
        let obj = argument
        console.log(typeOfArg + ': ' + obj);
        if (!typesCount.has(typeOfArg)) {
            typesCount.set(typeOfArg, 0)
        }

        typesCount.set(typeOfArg, typesCount.get(typeOfArg) + 1)
    }

    [...typesCount].sort((a, b)=> b[1] - a[1])
        .map(x => console.log(x[0] + ' = ' + x[1]))
}

solve({ name: 'bob'}, 3.333, 9.999);