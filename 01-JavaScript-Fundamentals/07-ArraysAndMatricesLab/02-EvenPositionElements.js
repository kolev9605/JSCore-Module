function solve(args) {
    return args.filter((el,i) => i % 2 == 0)
        .join(' ')
}