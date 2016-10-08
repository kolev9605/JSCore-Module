function solve(args) {
    let arr = args.splice(0, args.length - 1);
    for (let i = 0; i < Number(args[args.length - 1]) % arr.length; i++) {
        arr.unshift(arr.pop());
    }

    return arr.join(' ');
}

console.log(solve([1, 2, 3, 4, 5, 2]));