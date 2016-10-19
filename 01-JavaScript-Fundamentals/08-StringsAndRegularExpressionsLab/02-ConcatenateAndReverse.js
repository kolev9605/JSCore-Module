function solve(args) {
    return args.map(x => x.split("").reverse().join(""))
        .reverse()
        .join("");
}