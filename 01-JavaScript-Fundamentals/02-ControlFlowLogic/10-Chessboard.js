"use strict";

function solve(args) {
    let n = Number(args[0]);
    let currentColor = 'black';
    let html = '<div class="chessboard">\n';
    for (let row = 0; row < n; row++) {
        let firstCellColor = currentColor;
        html += '   <div>\n';
        for (let col = 0; col < n; col++) {
            html+=`        <span class="${currentColor}"></span>\n`;
            currentColor = alternateColors(currentColor);
        }

        currentColor = alternateColors(firstCellColor);
        html += '   </div>\n';
    }

    html+='</div>';

    return html;

    function alternateColors(color) {
        if(color == 'black') {
            return 'white';
        } else {
            return 'black';
        }
    }
}

console.log(solve(['4']));

