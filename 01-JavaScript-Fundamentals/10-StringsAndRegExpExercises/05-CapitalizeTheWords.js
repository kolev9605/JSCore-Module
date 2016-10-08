function solve([words]) {
    return words.split(' ')
        .map(x => x[0].toUpperCase() + x.substr(1).toLowerCase())
        .join(' ')
}