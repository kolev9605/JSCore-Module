function solve(input) {
    input = input.map(x => x.split('|')
        .map(x => x.trim())
        .filter(x=> x != ''));

    let properties = input.splice(0,1);

    let result = [];
    for (let line of input) {
        let obj = {}
        obj["Town"] = line[0];
        obj["Latitude"] = Number(line[1]);
        obj["Longitude"] = Number(line[2]);

        result.push(obj);
    }

    return JSON.stringify(result)
}

console.log(solve(
    ['| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
        '| Beijing | 39.913818 | 116.363625 |']
));