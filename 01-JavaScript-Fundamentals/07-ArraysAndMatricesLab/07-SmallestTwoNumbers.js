function solve(args) {
    return args.map(Number)
        .sort((a,b) => a-b)
        .filter((el,index) => index < 2)
        .join(' ')
}