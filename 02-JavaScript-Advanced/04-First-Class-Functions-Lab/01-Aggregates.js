function solve(array) {
    console.log("Sum = " + reduce(array, (a, b) => Number(a) + Number(b)));
    console.log("Min = " + reduce(array, (a, b) => Math.min(Number(a), Number(b))));
    console.log("Max = " + reduce(array, (a, b) => Math.max(Number(a), Number(b))));
    console.log("Product = " + reduce(array, (a, b) => Number(a) * Number(b)));
    console.log("Join = " + reduce(array, (a, b) => '' + a + b));


    function reduce(array, func) {
        let result = array[0];
        for (let item of array.slice(1)) {
            result = func(result, item)
        }

        return result;
    }
}

solve([1, 2, 3, 4, 5, -20])