function solve(args) {
    return args.slice(0,args.length-1).join(args[args.length-1]);
}

console.log(solve(['asd', 'asdasd', '-']));