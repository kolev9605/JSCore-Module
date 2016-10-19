function solve([text]) {
    return text.match(/\w+/g)
        .join('|')
}