let solution = (function () {
    let obj = {
        add: ([x1, x2], [y1, y2]) => {
            return [x1 + x2, y1 + y2]
        },

        multiply: ([x1, x2], scale) => {
            return [x1 * scale, x2 * scale]
        },

        length: ([x1, x2]) => {
            return Math.sqrt(x1 * x1 + x2 * x2)
        },

        dot: ([x1, x2], [y1,y2]) => {
            return x1 * y1 + x2 * y2
        },

        cross: ([x1, x2], [y1,y2]) => {
            return x1 * y2 - x2 * y1
        }
    };

    return obj
})()

console.log(solution.add([1, 1], [1, 0]))       //[2, 1]
console.log(solution.multiply([3.5, -2], 2))    //[7, -4]
console.log(solution.length([3, -4]))	        //5
console.log(solution.dot([1, 0], [0, -1]));	    //0
console.log(solution.cross([3, 7], [1, 0]));    //-7
