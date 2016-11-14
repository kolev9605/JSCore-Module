let expect = require("chai").expect
let isSymmetric = require("../02-CheckForSymmetry").isSymmetric

describe("isSymmetric(arr) -> Checks if the array is symmetric.", function () {
    it("Should return true for [1,2,1] (odd number of elements)", function () {
        expect(isSymmetric([1,2,1])).equal(true)
    })

    it("Should return false for [1,2,2] (odd number of elements)", function () {
        expect(isSymmetric([1,2,2])).equal(false)
    })

    it("Should return true for [1,2,2,1] (even number of elements)", function () {
        expect(isSymmetric([1,2,2,1])).equal(true)
    })

    it("Should return false for [1,2,2,3] (even number of elements)", function () {
        expect(isSymmetric([1,2,2,3])).equal(false)
    })

    it("Should return false for non array input", function () {
        expect(isSymmetric('zdrkp')).equal(false)
    })

    it("Should return false with missing input", function () {
        expect(isSymmetric()).equal(false)
    })

    it("Should return true for [1]", function () {
        expect(isSymmetric([1])).equal(true)
    })

    it("Should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", function () {
        expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])).equal(true)
    })

})