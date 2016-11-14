let adder = (function () {
    let currentSum = 0;

    return function sum(num) {
        currentSum += num
        sum.toString = () => currentSum
        return sum
    }
})()

console.log(adder(2)(21));