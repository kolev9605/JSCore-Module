(function () {
    String.prototype.ensureStart = function (str) {
        if (this.startsWith(str)) {
            return this + ''
        } else {
            return str + this;
        }
    }

    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)) {
            return this + ''
        } else {
            return this + str;
        }
    }

    String.prototype.isEmpty = function () {
        if (this.length == 0) {
            return true
        }

        return false
    }

    String.prototype.truncate = function (n) {
        if (this.length < n) {
            return this + ''
        }

        let temp = this.slice(0, n);
        temp = temp.split(' ')


        let result = ''
        if (temp.length > 1) {
            result = temp.slice(0, temp.length - 1).join(' ') + '...'
        } else {
            if (temp[0].length >= 4) {
                result = temp[0].slice(0, temp.length-4) + '...'
            } else {
                result = '.'.repeat(temp[0].length)
            }
        }

        return result
    }

    String.format = function () {
        let format = arguments[0];
        let params = [...arguments].slice(1)
        let pattern = /{(\d)}/g;
        let match;

        let result = format;
        while (match = pattern.exec(result)) {
            if (params[match[1]]) {
                result = result.replace(match[0], params[match[1]])
            }
        }

        return result
    }

})()

let str = 'my string'
console.log(str = str.ensureStart('my'))
console.log(str = str.ensureStart('hello '))
console.log(str = str.truncate(16))
console.log(str = str.truncate(14))
console.log(str = str.truncate(8))
console.log(str = str.truncate(4))
console.log(str = str.truncate(2))
console.log(str = String.format('The {0} {1} fox', 'quick', 'brown'))
console.log(str = String.format('jumps {0} {1}', 'dog'))


