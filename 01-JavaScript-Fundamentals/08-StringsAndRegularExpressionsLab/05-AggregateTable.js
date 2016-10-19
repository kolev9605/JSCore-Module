function solve(args) {
    let array = args
        .map(x => x.split('|')
            .filter(x => x != '')
            .map(x => x.trim()))

    return array.map(x => x.filter((el, i)=> i == 0))
        .join(', ') + '\n' +
        array.map(x => x.filter((el, i)=> i == 1))
        .map(Number)
        .reduce((a,b)=>a+b);
}

console.log(solve(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
));