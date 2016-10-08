function solve(args) {
    args.sort((a, b)=> {
        if (a.length - b.length == 0) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        }

        return a.length - b.length;
    });

    return args.join('\n');
}

console.log(solve(['test',
    'Deny',
    'omen',
    'default']));
