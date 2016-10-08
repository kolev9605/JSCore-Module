"use strict";

function solve(args) {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<quiz>\n';

    for (let i = 0; i < args.length; i += 2) {
        let question = args[i];
        let answer = args[i + 1];

        xml += "  <question>\n";
        xml += `    ${question}\n`;
        xml += "  </question>\n";
        xml += "  <answer>\n";
        xml += `    ${answer}\n`;
        xml += "  </answer>\n";
    }

    xml += '</quiz>';

    return xml;
}


console.log(solve(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]
));