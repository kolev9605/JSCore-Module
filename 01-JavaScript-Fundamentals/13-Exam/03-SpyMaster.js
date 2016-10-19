function solve(args) {
    let key = args[0]; //???
    let text = args.slice(1);

    let regex = new RegExp('(?:^| )' + key + '\\s+([!%$#[A-Z]{8,})(?: |\\.|,|$)', 'gi');
    for (let i = 0; i < text.length; i++) {
        let match;
        while (match = regex.exec(text[i])) {
            if (match[1] == match[1].toUpperCase()) {
                let matched = match[1];
                //console.log(match[1]);
                matched = match[1].toLowerCase()
                matched = matched.replace(/!/g, 1)
                matched = matched.replace(/%/g, 2)
                matched = matched.replace(/#/g, 3)
                matched = matched.replace(/\$/g, 4)

                text[i] = text[i].replace(match[1], matched)

            }
        }
    }

    return text.join('\n')
}

console.log(solve([
    'specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!'

]));

// console.log('--------------------');
// console.log(solve([
//     'enCode',
//     'Some messages are just not encoded what can you do?',
//     'RE - ENCODE THEMNOW! - he said.',
//     'Damn encode, ITSALLHETHINKSABOUT, eNcoDe BULL$#!%.'
// ]));