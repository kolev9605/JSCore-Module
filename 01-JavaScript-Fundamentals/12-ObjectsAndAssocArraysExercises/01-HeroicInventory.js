function solve(input) {
    let result = [];

    for (let line of input) {
        let args = line.split(/\s*\/\s*/g)
        let heroName = args[0];
        let level = Number(args[1]);
        let items = []
        if(args.length > 2) {
            items = args[2].split(", ")
        }

        let obj = {name:heroName, level: level, items: items};
        result.push(obj);
    }

    return JSON.stringify(result)
}