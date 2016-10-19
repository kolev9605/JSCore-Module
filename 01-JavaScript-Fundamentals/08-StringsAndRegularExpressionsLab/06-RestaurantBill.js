function solve(args) {
    let sum = args.filter((el, i)=>i % 2 != 0)
        .map(Number)
        .reduce((a,b)=>a+b);

    let products = args.filter((el, i)=>i % 2 == 0)
        .join(', ');

    return `You purchased ${products} for a total sum of ${sum}`
}