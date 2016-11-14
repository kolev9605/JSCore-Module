let expect = require("chai").expect
let SortedList = require("../02-sorted-list").SortedList

describe("Sorted list", function () {
    let list;
    beforeEach(function () {
        list = new SortedList()
    });

    function fillListWith100RandomElements() {
        let array = [];
        for (let i = 0; i < 100; i++) {
            array.push(i)
        }

        let tmp, current, top = array.length;
        if (top) {
            while (--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
        }

        for (let item of array) {
            list.add(item)
        }
    }

    describe('Add/remove/get elements with valid input. The list should remain sorted.', function () {
        it('Expect initial size to be 0', () => {
            expect(list.size).equal(0)
        })

        it('Add 3 elements. Check the size after each add', ()=> {
            expect(list.size).equal(0)
            list.add(1)
            expect(list.size).equal(1)
            list.add(14)
            expect(list.size).equal(2)
            list.add(-20)
            expect(list.size).equal(3)
        })

        it('Add 3 elements. Check if the list is sorted', ()=> {
            list.add(1)
            list.add(14)
            list.add(-20)
            expect(list.get(0)).equal(-20)
            expect(list.get(1)).equal(1)
            expect(list.get(2)).equal(14)
        })

        it('Add 3 elements. Remove at index 0. Should update size. Should sort correctly.', ()=> {
            list.add(1)
            list.add(14)
            list.add(-20)
            list.remove(0)
            expect(list.size).equal(2)
            expect(list.get(0)).equal(1)
        })

        it('Add 3 elements. Remove at index 2. Should update size. Should sort correctly.', ()=> {
            list.add(1)
            list.add(14)
            list.add(-20)
            list.remove(2)
            expect(list.size).equal(2)
            expect(list.get(1)).equal(1)
        })

        it('Add and remove elements. Check if the list is sorted after each add/remove.', ()=> {
            list.add(1)
            list.add(14)
            expect(list.get(0)).equal(1)
            expect(list.get(list.size - 1)).equal(14)
            list.add(-20)
            expect(list.get(0)).equal(-20)
            list.add(300)
            expect(list.get(list.size - 1)).equal(300)
            list.remove(list.size - 1);
            expect(list.get(list.size - 1)).equal(14)
        })


        it('Fill the list with 1000 random numbers. Size should be 1000, list should be sorted.', ()=> {
            fillListWith100RandomElements()
            expect(list.size).equal(100)
            expect(list.get(0)).equal(Math.min(...list.list))
            expect(list.get(list.size - 1)).equal(Math.max(...list.list))
        })
    })

    describe('Add/remove/get with invalid input. Should throw errors.', function () {
        it('Get at invalid index (> length). Should throw error', ()=> {
            list.add(1)
            list.add(14)
            list.add(-20)
            expect(()=> {
                list.get(5)
            }).to.throw(Error)
        })

        it('Get at invalid index (< 0). Should throw error', ()=> {
            list.add(1)
            list.add(14)
            list.add(-20)
            expect(()=> {
                list.get(-5)
            }).to.throw(Error)
        })

        it('Remove at invalid index (i>length). Should throw error', ()=> {
            list.add(1)
            list.add(14)
            list.add(-20)
            expect(()=> {
                list.remove(10)
            }).to.throw(Error)
            expect(list.size).equal(3)
        })

        it('Remove at invalid index (i<0). Should throw error', ()=> {
            expect(()=> {
                list.remove(-20)
            }).to.throw(Error)
            expect(list.size).equal(0)
        })

        it('Remove from empty list. Should throw error. Size should be 0.', ()=> {
            expect(()=> {
                list.get(-20)
            }).to.throw(Error)
            expect(list.size).equal(0)
        })
    })

    describe('Check if the list has all described properties/functions', function () {
        it('Check if the list has property size', ()=> {
            expect(SortedList.prototype.hasOwnProperty('size')).equal(true)
        })

        it('Check if the list has function add', ()=> {
            expect(SortedList.prototype.hasOwnProperty('add')).equal(true)
        })

        it('Check if the list has function remove', ()=> {
            expect(SortedList.prototype.hasOwnProperty('remove')).equal(true)
        })

        it('Check if the list has property get', ()=> {
            expect(SortedList.prototype.hasOwnProperty('get')).equal(true)
        })
    })
})