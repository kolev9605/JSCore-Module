function solve(args) {
    let pattern = /\d+/gm;

    return args.join(' ').match(pattern).join(' ');
}

console.log(solve(['The300 What is \n \n that? I think it’s  3rd movie.Lets watch it at 22:45']));