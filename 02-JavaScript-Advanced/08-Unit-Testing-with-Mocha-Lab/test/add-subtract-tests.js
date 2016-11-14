let expect = require("chai").expect
let createCalculator = require("../04-AddSubtract").createCalculator

describe("createCalculator, test each function inside", function () {
    it("should return 0 for get", function () {
        let calc = createCalculator()
        let result = calc.get()

        expect(result).equal(0)
    })

    it("should return 5 for add(2) add(3); get", function () {
        let calc = createCalculator()
        calc.add(2)
        calc.add(3)
        let result = calc.get()

        expect(result).equal(5)
    })

    it("should return -5 for subtract(3); subtract(2); get", function () {
        let calc = createCalculator()
        calc.subtract(3)
        calc.subtract(2)
        let result = calc.get()

        expect(result).equal(-5)
    })

    it("should return 4.2 for add(5.3); subtract(1.1); get", function () {
        let calc = createCalculator()
        calc.add(5.3)
        calc.add(1.1)
        let result = calc.get()

        expect(result).equal(5.3 + 1.1)
    })

    it("should return 2 for add(10); subtract('7'); add('-2'); subtract(-1); get", function () {
        let calc = createCalculator()
        calc.add(10)
        calc.subtract(7)
        calc.add(-2)
        calc.subtract(-1)
        let result = calc.get()

        expect(result).equal(2)
    })

    it("should return NaN for add('hello'); get", function () {
        let calc = createCalculator()
        calc.add('hello')
        let result = calc.get()

        expect(result).to.be.NaN
    })

    it("should return NaN for subtract('hello'); get", function () {
        let calc = createCalculator()
        calc.subtract('hello')
        let result = calc.get()

        expect(result).to.be.NaN
    })
})