function solve([input]) {
    String.prototype.htmlEscape = function() {
        return this.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    let array = JSON.parse(input);
    let html = '<table>\n';
    html+='  <tr><th>name</th><th>score</th></tr>\n';
    for (let obj of array) {
        html+=`  <tr><td>${obj['name'].htmlEscape()}</td><td>${obj['score']}</td></tr>\n`;
    }

    html += '</table>';

    return html;
}

console.log(solve([
    '[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]'
]));