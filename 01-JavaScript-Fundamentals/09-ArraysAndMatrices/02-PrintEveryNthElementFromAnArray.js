function solve(args) {
    args.slice(0, args.length - 1)
        .filter((el,index) => index % Number(args[args.length-1]) == 0)
        .map(el => console.log(el))
}

solve([5,20,31,4,20,2])


