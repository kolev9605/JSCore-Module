function solve(args) {
    let arr = args.map(x => x.split(/\s*<->\s*/g))

    let population = new Map();

    for (let line of arr) {
        let town = line[0];
        let currPopulation = Number(line[1]);

        if (!population.has(town)) {
            population.set(town, 0);
        }

        population.set(town, population.get(town) + currPopulation);
    }

    for (let [k,v] of population) {
        console.log(`${k} : ${v}`);
    }
}

console.log(solve(
    [
        'Sofia <-> 1200000',
        'Montana <-> 20000',
        'New York <-> 10000000',
        'Washington <-> 2345000',
        'Las Vegas <-> 1000000'
    ]
));