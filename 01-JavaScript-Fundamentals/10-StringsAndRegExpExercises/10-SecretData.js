function solve(text) {
    let pattern = /(\*[A-Z][a-zA-Z]*(?= |\t|\n|$))|(\+[0-9-]{10}(?= |\t|\n|$))|(\![a-zA-Z0-9]+(?= |\t|\n|$))|(\_[a-zA-Z0-9]+(?= |\t|\n|$))/g;

    let match;
    for (let i = 0; i < text.length; i++) {
        while (match = pattern.exec(text[i])) {
            text[i] = text[i].replace(match[0], "|".repeat(match[0].length))
        }
    }

    return text.join('\n');
}

console.log(solve(["Agent *Ivankov was in the room when it all happened.",
    "    The person in the room was heavily armed.",
    "        Agent *Ivankov had to act quick in order.",
    "        He picked up his phone and called some unknown number.",
    "        I think it was +555-49-796",
    "   I can't really remember...",
    "    He said something about \"finishing work\" with subject !2491a23BVB34Q and returning to Base _Aurora21",
    "Then after that he disappeared from my sight.",
    "    As if he vanished in the shadows.",
    "    A moment, shorter than a second, later, I saw the person flying off the top floor.",
    "   I really don't know what happened there.",
    "This is all I saw, that night.",
    "    I cannot explain it myself..."
]));