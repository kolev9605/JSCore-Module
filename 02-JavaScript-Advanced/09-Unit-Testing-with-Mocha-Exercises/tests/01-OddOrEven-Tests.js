let expect = require("chai").expect
let isOddOrEven = require("../01-OddOrEven").isOddOrEven

describe("isOddOrEven -> Checks if the length is odd or even", function () {
    it("Should return 'even' for 'asdf'", function () {
        expect('even').equal(isOddOrEven("asdf"))
    })

    it("Should return 'odd' for 'asd'", function () {
        expect('odd').equal(isOddOrEven("asd"))
    })

    it("Should return undefined for {zdr: 'kp'}", function () {
        expect(undefined).equal(isOddOrEven({zdr: 'kp'}))
    })
})