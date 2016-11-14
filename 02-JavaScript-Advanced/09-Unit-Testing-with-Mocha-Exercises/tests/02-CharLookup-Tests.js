let expect = require("chai").expect
let lookupChar = require("../02-CharLookup").lookupChar

describe("Finds a char at given position", function () {
    it("Should return 'a' for lookupChar('asd',0)", function () {
        expect('a').equal(lookupChar('asd', 0))
    })

    it("Should return ' ' for lookupChar('hi there',2)", function () {
        expect(' ').equal(lookupChar('hi there', 2))
    })

    it("Should return undefined for lookupChar({asd:2},2)", function () {
        expect(undefined).equal(lookupChar({asd: 2}, 2))
    })

    it("Should return undefined for lookupChar('asdasd',{asd:2})", function () {
        expect(undefined).equal(lookupChar('asdasd', {asd: 2}))
    })
    it("Should return \"Incorrect _index\" for lookupChar('asdasd',-2)", function () {
        expect("Incorrect _index").equal(lookupChar('asdasd', -2))
    })

    it("Should return \"Incorrect _index\" for lookupChar('asdasd',8)", function () {
        expect("Incorrect _index").equal(lookupChar('asdasd', 8))
    })

    it("Should return undefined for lookupChar()", function () {
        expect(undefined).equal(lookupChar())
    })

    it("Should return undefined for lookupChar(23,23)", function () {
        expect(undefined).equal(lookupChar(23,23))
    })

    it("Should return undefined for lookupChar('asd',2.3))", function () {
        expect(undefined).equal(lookupChar("asd",2.3))
    })
})