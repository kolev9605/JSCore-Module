class Stringer {
    constructor(str, lenght) {
        this.innerString = str;
        this.innerLength = lenght;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength -= length;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        return this.innerString.slice(0, this.innerLength) + '...'
    }
}


let x = new Stringer("gosho", 5)
x.decrease(3)
console.log(''+x);