let x = (function () {
    let id = 0
    return class Extensible {
        constructor() {
            this.id = id++;
        }

        extend(template) {
            this['id'] = this.id;

            for (let prop in template) {
                if (typeof template[prop] == "function") {
                    Object.getPrototypeOf(this)[prop] = template[prop];
                } else {
                    this[prop] = template[prop]
                }
            }

            return this;
        }
    }
})()

let obj1 = new x()
let obj2 = new x();
let obj3 = new x();
console.log(obj1);
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);
