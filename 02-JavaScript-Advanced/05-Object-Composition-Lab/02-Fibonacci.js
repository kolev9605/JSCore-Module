function solve(n) {
    let fib = (function () {
        let f1 = 0;
        let f2 = 1;

        return function () {
            let newF1 = f2;
            let newF2 = f1+f2;
            f1 = newF1;
            f2 = newF2

            return f1;
        }
    })()

    let result = []
    for (let i = 0; i < n; i++) {
        result.push(fib())
    }

    return result
}

console.log(
solve(5)
)