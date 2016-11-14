let expect = require("chai").expect
let mathEnforcer = require("../03-MathEnforcer").mathEnforcer

describe("Math Enforcer tests", function () {
    describe("Test addFive function", function () {
        it("Should return 10 for addFive(5)", function () {
            expect(10).equal(mathEnforcer.addFive(5))
        })

        it("Should return 10.4 for addFive(5.4)", function () {
            expect(10.4).closeTo(mathEnforcer.addFive(5.4), 0.01)
        })

        it("Should return 3.5 for addFive(-2.5)", function () {
            expect(2.5).closeTo(mathEnforcer.addFive(-2.5), 0.01)
        })

        it("Should return -20.5 for addFive(-25.5)", function () {
            expect(-20.5).closeTo(mathEnforcer.addFive(-25.5), 0.01)
        })

        it("Should return undefined for addFive({asd:2})", function () {
            expect(undefined).equal(mathEnforcer.addFive({asd: 2}))
        })

        it("Should return undefined for addFive()", function () {
            expect(undefined).equal(mathEnforcer.addFive())
        })

        it("Should return undefined for addFive('a')", function () {
            expect(undefined).equal(mathEnforcer.addFive('a'))
        })
    })

    describe("Test subtractTen function", function () {
        it("Should return 10 for subtractTen(20)", function () {
            expect(10).equal(mathEnforcer.subtractTen(20))
        })

        it("Should return 7.8 for subtractTen(17.8)", function () {
            expect(7.8).closeTo(mathEnforcer.subtractTen(17.8), 0.01)
        })

        it("Should return -8.2 for subtractTen(8.2)", function () {
            expect(-8.2).closeTo(mathEnforcer.subtractTen(1.8), 0.01)
        })

        it("Should return -89.4 for subtractTen(-79.4)", function () {
            expect(-89.4).closeTo(mathEnforcer.subtractTen(-79.4), 0.01)
        })

        it("Should return undefined for subtractTen({asd:2})", function () {
            expect(undefined).equal(mathEnforcer.subtractTen({asd: 2}))
        })

        it("Should return undefined for subtractTen()", function () {
            expect(undefined).equal(mathEnforcer.subtractTen())
        })

        it("Should return undefined for subtractTen('a')", function () {
            expect(undefined).equal(mathEnforcer.subtractTen('a'))
        })
    })

    describe("Test sum function", function () {
        it("Should return 10 for sum(2,8)", function () {
            expect(10).equal(mathEnforcer.sum(2,8))
        })

        it("Should return -18 for sum(-5,-13)", function () {
            expect(-18).equal(mathEnforcer.sum(-5,-13))
        })

        it("Should return 8.2 for sum(1.1, 7.1)", function () {
            expect(8.2).closeTo(mathEnforcer.sum(1.1, 7.1), 0.01)
        })

        it("Should return undefined for sum('asd',4)", function () {
            expect(undefined).equal(mathEnforcer.sum('asd',4))
        })

        it("Should return undefined for sum('asd','asd')", function () {
            expect(undefined).equal(mathEnforcer.sum('asd','asd'))
        })

        it("Should return undefined for sum(2.2,'asd')", function () {
            expect(undefined).equal(mathEnforcer.sum(2.2,'asd'))
        })

        it("Should return undefined for sum(2.2,'asd')", function () {
            expect(undefined).equal(mathEnforcer.sum('nqma kak da feilne toq pyt bate',{asd:23}))
        })

        it("Should return undefined for sum()", function () {
            expect(undefined).equal(mathEnforcer.sum())
        })
    })
})