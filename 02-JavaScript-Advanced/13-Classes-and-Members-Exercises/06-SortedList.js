let result = (function () {
    return (class {
        constructor() {
            this.arr = [];
            this.size = 0;
        }

        add(element) {
            this.arr.push(element)
            this.arr.sort((a, b) => a - b)
            this.size++;
        }

        remove (index) {
            if (this.isValidIndex(index)) {
                this.arr.splice(index, 1)
                this.arr.sort((a, b) => a - b)
                this.size--
            } else {
                throw new Error
            }
        }

        isValidIndex (index) {
            return index >= 0 && index < this.arr.length
        }

        get(index) {
            if (!(index < 0 || index >= this.arr.length)) {
                return this.arr[index]
            }
        }
    })
})()

var myList = new result();

myList.add(5);

myList.add(3);

myList.remove(0);

console.log(myList.size);

console.log(myList.hasOwnProperty('size'));