let expect = require("chai").expect
let sum = require("../01-SumOfNumbers").sum

describe("sum(arr) -> Sum array of numbers", function () {
    it("should return 3 for [1,2]", function () {
        expect(sum([1,2])).equal(3)
    })

    it("should return 0 for [] (empty array)", function () {
        expect(sum([])).equal(0)
    })

    it("should return 4 for [4]", function () {
        expect(sum([4])).equal(4)
    })

    it("should return NaN for non number values", function () {
        expect(sum(['pesho', 'gosho'])).to.be.NaN
    })

    it("should return 5.2 for [1.4, 2.5, 0.3, 1]", function () {
        expect(sum([1.4, 2.5, 0.3, 1])).equal(5.2)
    })
})