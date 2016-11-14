let expect = require("chai").expect
let createList = require("../02-list").createList

describe("", function () {
    let innedList;
    beforeEach(function () {
        innedList = createList()
    });

    describe('add/shift tests', function () {
        it('Add empty', () => {
            innedList.add()
            innedList.add()

            expect(innedList.toString()).equal((', '))
        })

        it('Add different types', () => {
            innedList.add(1)
            innedList.add('Gosho')
            innedList.add({str: 'Test'})

            expect(innedList.toString()).equal([1, 'Gosho', {str: 'Test'}].join(', '))
        })

        it('Empty', () => {
            expect(innedList.toString()).equal([].join(', '))
        })

        it('Add different types, shift left', () => {
            innedList.add(1)
            innedList.add(2.14)
            let date = new Date()
            innedList.add(date)
            innedList.add(4)

            innedList.shiftLeft()
            expect(innedList.toString()).equal([2.14, date, 4, 1].join(', '))
        })

        it('Add different types, shift right', () => {
            innedList.add(1.1)
            innedList.add({})
            innedList.add(3.1444)
            innedList.add('stefan')

            innedList.shiftRight()
            expect(innedList.toString()).equal(['stefan', 1.1, {}, 3.1444].join(', '))
        })

        it('Add different types, shift right multiple times', () => {
            innedList.add(1)
            innedList.add(2)
            innedList.add(3)
            innedList.add('stefan')
            innedList.shiftRight()
            innedList.shiftRight()
            innedList.shiftRight()
            expect(innedList.toString()).equal([2, 3, 'stefan', 1].join(', '))
        })

        it('Add different types, shift left then right. Should not change', () => {
            innedList.add(1)
            innedList.add(2)
            innedList.add(3)
            innedList.add('stefan')
            innedList.shiftRight()
            innedList.shiftLeft()
            innedList.shiftRight()
            innedList.shiftLeft()
            expect(innedList.toString()).equal([1, 2, 3, 'stefan'].join(', '))
        })

        it('Shift on empty list, should return empty result', () => {
            innedList.shiftRight()
            innedList.shiftRight()
            innedList.shiftLeft()
            expect(innedList.toString()).equal([].join(', '))
        })

        it('Shift on empty list, should return empty result', () => {
            innedList.shiftLeft()
            expect(innedList.toString()).equal([].join(', '))
        })

        it('', () => {
            innedList.add(1)
            innedList.add(2)
            innedList.add(3)
            innedList.add({})

            for (let i = 0; i < 4 * 4 + 1; i++) {
                innedList.shiftLeft()
            }

            expect(innedList.toString()).equal([2, 3, {}, 1].join(', '))
        })

        it('', () => {
            innedList.add(1)
            innedList.add(2)
            innedList.add("")
            innedList.add(4)

            for (let i = 0; i < 4 * 4 + 1; i++) {
                innedList.shiftRight()
            }

            expect(innedList.toString()).equal([4, 1, 2, ""].join(', '))
        })

        it('', () => {
            innedList.add(1)
            expect(innedList.toString()).equal([1].join(', '))
            innedList.add('Gosho')
            expect(innedList.toString()).equal([1, 'Gosho'].join(', '))
            innedList.add({str: 'Test'})
            expect(innedList.toString()).equal([1, 'Gosho', {str: 'Test'}].join(', '))
        })
    })

    describe('tostring tests', function () {
        it('', () => {
            innedList.add(1)
            innedList.add(2)
            innedList.add(3)
            innedList.add(4)

            expect(innedList.toString()).equal([1, 2, 3, 4].join(', '))
        })

        it('', () => {
            innedList.add(1)
            innedList.add('Stefan')
            let date = new Date()
            innedList.add(3)
            innedList.add({})
            innedList.add(date)


            expect(innedList.toString()).equal([1, 'Stefan', 3, {}, date].join(', '))
        })

        it('', () => {
            expect(innedList.toString()).equal([].join(', '))
        })
    })

    describe('swap tests', function () {
        it('', () => {
            innedList.add(1)
            innedList.add(2)
            innedList.add(3.14)
            innedList.add('gosho')
            let result = innedList.swap(0, 2) // swap 1 with 3 [3,2,1,4]
            expect(innedList.toString()).equal([3.14, 2, 1, 'gosho'].join(', '))
            expect(result).equal(true)

        })

        it('', () => {
            innedList.add(1)
            innedList.add({a: 'asd'})
            innedList.add(3)
            innedList.add('tony montana')
            let result = innedList.swap(2, 0) // swap 1 with 3 [3,2,1,4]
            expect(innedList.toString()).equal([3, {a: 'asd'}, 1, 'tony montana'].join(', '))
            expect(result).equal(true)

        })

        it('', () => {
            innedList.add(1)
            innedList.add(2)
            innedList.add('asd')
            innedList.add(4)
            let result = false
            result = innedList.swap(2, 0)
            expect(result).equal(true)
            result = innedList.swap(1, 3)
            expect(result).equal(true)
            result = innedList.swap(3, 0)
            expect(result).equal(true)
            expect(innedList.toString()).equal([2, 4, 1, 'asd'].join(', '))
        })

        it('', () => {
            innedList.add(1)
            innedList.add(2.13)
            let result = innedList.swap(0, 1)
            expect(innedList.toString()).equal([2.13, 1].join(', '))
            expect(result).equal(true)
        })

        it('', () => {
            innedList.add(1)
            innedList.add(2)
            let result = innedList.swap(1, 0)
            expect(innedList.toString()).equal([2, 1].join(', '))
            expect(result).equal(true)
        })

        it('', () => {
            innedList.add(1)
            let result = innedList.swap(0, 1)
            expect(innedList.toString()).equal([1].join(', '))
            expect(result).equal(false)
        })

        it('', () => {
            innedList.add(1)
            innedList.add([])
            innedList.add(3)
            innedList.add(4)
            let result = innedList.swap(-20, 5, 300, 400, new Map())
            expect(innedList.toString()).equal([1, [], 3, 4].join(', '))
            expect(result).equal(false)
        })

        it('', () => {
            innedList.add(1)
            innedList.add(2)
            innedList.add(3)
            innedList.add(4)
            let result = innedList.swap(-20.2, {asd: "asd"})
            expect(innedList.toString()).equal([1, 2, 3, 4].join(', '))
            expect(result).equal(false)
        })

        it('', () => {
            innedList.add(1)
            innedList.add(2)
            innedList.add(3)
            innedList.add(4)

            let result = innedList.swap(2, 2)
            expect(innedList.toString()).equal([1, 2, 3, 4].join(', '))
            expect(result).equal(false)
        })

        it('', () => {
            innedList.add(1)
            innedList.add(2)
            innedList.add(3)
            innedList.add(4)

            let result = innedList.swap(3.14, 2.123213)
            expect(innedList.toString()).equal([1, 2, 3, 4].join(', '))
            expect(result).equal(false)
        })

        it('', () => {
            innedList.add(1)
            innedList.add(2)
            innedList.add(3)
            let result = innedList.swap('pesho', new Map())
            expect(innedList.toString()).equal([1, 2, 3].join(', '))
            expect(result).equal(false)
        })

        it('', () => {
            innedList.add(1)
            innedList.add(2)
            innedList.add(3)
            let result = innedList.swap('pesho')
            expect(innedList.toString()).equal([1, 2, 3].join(', '))
            expect(result).equal(false)
        })

        it('', () => {
            innedList.add(1.1)
            innedList.add(2)
            innedList.add(3)
            let result = innedList.swap()
            expect(innedList.toString()).equal([1.1, 2, 3].join(', '))
            expect(result).equal(false)
        })

        it('', () => {
            innedList.add(1)
            innedList.add(2.24)
            innedList.add(3)
            let result = innedList.swap(1)
            expect(innedList.toString()).equal([1, 2.24, 3].join(', '))
            expect(result).equal(false)
        })

        it('', () => {
            innedList.add(1)
            innedList.add(2)
            innedList.add(3)
            let result = innedList.swap(12, 3, 4)
            expect(innedList.toString()).equal([1, 2, 3].join(', '))
            expect(result).equal(false)
        })

        it('', () => {
            innedList.add(1)
            innedList.add(2)
            innedList.add(3)
            let result = innedList.swap({}, 'stefan', new Date(), new Map())
            expect(innedList.toString()).equal([1, 2, 3].join(', '))
            expect(result).equal(false)
        })
    })

    it('kur', function () {
        innedList.add(1)
        innedList.add('Gosho')
        innedList.add({str: 'Test'})
        innedList.swap(0,1)
        innedList.swap(1,3)
        innedList.swap(1,'')
        innedList.swap('pesho',2)
        innedList.shiftLeft()
        innedList.shiftLeft()
        innedList.add({sq:'ako ne stanesh ne znam'})
        innedList.add(Math.PI)
        innedList.shiftRight()
        innedList.swap()
        innedList.swap(Math.PI)
        innedList.swap(3.14)
        innedList.swap(3.14, {}, new Map())

        expect(innedList.toString()).equal(`${Math.PI}, ${{str: 'Test'}}, Gosho, 1, ${{sq:'ako ne stanesh ne znam'}}`)
    })
})