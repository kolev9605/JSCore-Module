"use strict";

function solve(args) {
    let n = Number(args[0]);
    let html = "<ul>";
    for (let i = 1; i <= n; i++) {
        let color = 'blue';
        if (i % 2 !== 0) {
            color = 'green';
        }

        html += `<li><span style='color:${color}'>${i}</span></li>`
    }

    html += "</ul>";

    return html;
}