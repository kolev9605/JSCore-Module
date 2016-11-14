let expect = require("chai").expect
let rgbToHexColor = require("../03-RGBToHex").rgbToHexColor

describe("rgbToHexColor(red,green,blue) - RGB Convertor", function () {
    it("should return #FFFFFF for (255,255,255)", function () {
        expect(rgbToHexColor(255,255,255)).equal('#FFFFFF')
    })

    it("should return #000000 for (0,0,0)", function () {
        expect(rgbToHexColor(0,0,0)).equal('#000000')
    })

    it("should return #0C0D0E for (12, 13, 14)", function () {
        expect(rgbToHexColor(12, 13, 14)).equal('#0C0D0E')
    })

    it("should return undefined for (-2,0,0)", function () {
        expect(rgbToHexColor(-2,0,0)).equal(undefined)
    })

    it("should return undefined for (0,256,0)", function () {
        expect(rgbToHexColor(0,256,0)).equal(undefined)
    })

    it("should return undefined for empty input", function () {
        expect(rgbToHexColor()).equal(undefined)
    })

    it("should return undefined for string  input", function () {
        expect(rgbToHexColor("asd")).equal(undefined)
    })

    it("should return undefined for floating numbers", function () {
        expect(rgbToHexColor(2.5, 200, 2.5621)).equal(undefined)
    })

    it("should return undefined for invalid input", function () {
        expect(rgbToHexColor({'asd':2}, [], new Map)).equal(undefined)
    })

    it("should return undefined for NaN", function () {
        expect(rgbToHexColor(NaN, NaN, NaN)).equal(undefined)
    })
})