function solve(args) {
    return args.map(Number)
        .filter((el,index) => index % 2 != 0)
        .map(x => x *= 2)
        .reverse()
        .join(' ')
}