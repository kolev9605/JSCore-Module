function solve(input) {
    let args = input.map(x => JSON.parse(x))

    let html = '<table>\n';

    for (let object of args) {
        html += '\t<tr>\n'
        html += `\t\t<td>${object['name']}</td>\n`
        html += `\t\t<td>${object['position']}</td>\n`
        html += `\t\t<td>${Number(object['salary'])}</td>\n`
        html += '\t<tr>\n'
    }

    html += '</table>'

    return html;
}

console.log(solve(
    [
        '{"name":"Pesho","position":"Promenliva","salary":100000}',
        '{"name":"Teo","position":"Lecturer","salary":1000}',
        '{"name":"Georgi","position":"Lecturer","salary":1000}'
    ]
));