this.jsdom = require('jsdom-global')();
let $ = require('jquery');
let expect = require('chai').expect;

let sharedObject = require('../04-SharedObject').sharedObject

describe('shared object test', function () {
    let testObject;
    beforeEach('init the object', function () {
        testObject = Object.create(sharedObject);
        document.body.innerHTML =
            `<div id="wrapper">
                <input type="text" id="name">
                <input type="text" id="income">
            </div>`;
    });

    it('Name should be null initially', function () {
        expect(testObject.name).equal(null)
    })

    it('Income should be null initially', function () {
        expect(testObject.income).equal(null)
    })

    it('Should change the name with valid value (\'pesho\')', function () {
        testObject.changeName('pesho')

        expect(testObject.name).equal('pesho')
        expect($('#name').val()).equal('pesho')
    })

    it('Should change the income with valid value (20)', function () {
        testObject.changeIncome(20)

        expect(testObject.income).equal(20)
        expect(Number($('#income').val())).equal(20)
    })

    it('Should not change the name with empty string', function () {
        testObject.changeName('')

        expect(testObject.name).equal(null)
        expect($('#name').val()).equal('')
    })

    it('Should not change the income with negative integer value', function () {
        testObject.changeIncome(-20)

        expect(testObject.income).equal(null)
        expect($('#income').val()).equal('')
    })

    it('Should not update the name with empty textbox', function () {
        testObject.updateName()

        expect(testObject.name).equal(null)
        expect($('#name').val()).equal('')
    })

    it('Should not update the income with empty textbox', function () {
        testObject.updateIncome()

        expect(testObject.income).equal(null)
        expect($('#income').val()).equal('')
    })

    it('Should update the name with valid textbox value', function () {
        $('#name').val('pesho')
        testObject.updateName()

        expect(testObject.name).equal('pesho')
        expect($('#name').val()).equal('pesho')
    })

    it('Should update the income with valid textbox value', function () {
        $('#income').val(20)
        testObject.updateIncome()

        expect(testObject.income).equal(20)
        expect(Number($('#income').val())).equal(20)
    })
})