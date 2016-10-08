function solve(text) {
    text = text.join(' ');

    let pattern = /www\.[A-Za-z0-9-]+(\.[a-z]+)+/g;
    let result = [];
    let match;
    while (match = pattern.exec(text)) {
        result.push(match[0]);
    }

    return result.join('\n');
}