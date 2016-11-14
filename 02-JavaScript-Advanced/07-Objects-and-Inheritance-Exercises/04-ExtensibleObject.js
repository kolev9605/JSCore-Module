function solve() {
    let obj = Object.create({})
    obj.extend = function (template) {
        for (let prop in template) {
            if (typeof template[prop] == "function") {
                Object.getPrototypeOf(obj)[prop] = template[prop];
            } else {
                obj[prop] = template[prop]
            }
        }
    }

    return obj;
}

var template = {
    extensionMethod: function () {
        console.log("From extension method")
    }
};
let obj = {}
obj = solve(template)

console.log(obj);

