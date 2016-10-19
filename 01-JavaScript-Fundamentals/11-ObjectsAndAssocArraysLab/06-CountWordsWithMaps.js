function solve([input]) {
    let words = input.split(/\W+/g).filter(x => x != '').map(x => x.toLowerCase());
    let map = new Map();

    for (let entry of words) {
        if (map.has(entry)) {
            map.set(entry, map.get(entry) + 1)
        } else {
            map.set(entry, 1)
        }
    }

    let allWords = Array.from(map.keys()).sort();


    for (let word of allWords) {
        console.log(`'${word}' -> ${map.get(word)} times`);
    }
}

console.log(solve(
    ["Far too slow, you're far too slow."]
));