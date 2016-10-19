function solve(args) {
    String.prototype.htmlEscape = function() {
        return this.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    let html = '<ul>\n';

    for (let line of args) {
        html += `  <li>${line.htmlEscape()}</li>\n`
    }

    html += '</ul>';

    return html;
}

console.log(solve(
    ['<b>unescaped text</b>', 'normal text']
));