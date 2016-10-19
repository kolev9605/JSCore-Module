function solve([input]) {
    function htmlEscape(text) {
        if (typeof(text) == "string") {
            return text.replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        }

        return text;
    }

    let array = JSON.parse(input);
    let keys = Object.keys(array[0]);

    let html = '<table>\n';
    html+='  <tr>';
    for (let key of keys) {
        html += `<th>${key}</th>`;
    }

    html+='</tr>\n'
    for (let obj of array) {
        html+='  <tr>';
        for (let key of keys) {
            let entry = htmlEscape(obj[`${key}`]);
            html += `<td>${entry}</td>`;
        }

        html+='</tr>\n'
    }
    html+= '</table>';

    return html;
}

console.log(solve([
    '[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'
]));