function solve(args) {
    args = args.map(Number);
    let result = [];
    for (let num of args) {
        if(num < 0) {
            result.unshift(num)
        } else {
            result.push(num);
        }
    }

    return result.join('\n');
}