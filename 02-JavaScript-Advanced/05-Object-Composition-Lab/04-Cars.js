function createCar(commands) {
    let map = new Map();

    let carManager = {
        create: function (actions) {
            let parent = map.get(actions[2]) || null;
            let name = actions[0];

            let newObj = Object.create(parent);
            map.set(name, newObj)

            return newObj
        },

        set: function ([name, key, value]) {
            let obj = map.get(name)
            obj[key] = value;
            map.set(name, obj)
        },

        print: function ([name]) {
            let output = []
            let obj = map.get(name)
            for (let property of Object.keys(obj)) {
                output.push(`${property}:${obj[property]}`)
            }

            let proto = Object.getPrototypeOf(obj);
            while (proto) {
                let keys = Object.keys(proto);
                for (let property of Object.keys(proto)) {
                    if (!Object.prototype.hasOwnProperty.call(obj, property)) {
                        output.push(`${property}:${obj[property]}`)
                    }
                }

                proto = Object.getPrototypeOf(proto)
            }

            console.log(output.join(', '));
        }
    }

    for (let command of commands) {
        let commandName = command.split(' ')[0]
        let actions = command.split(' ').slice(1)
        carManager[commandName](actions)
    }
}


createCar(['create pesho',
    'create gosho inherit pesho',
    'create stamat inherit gosho',
    'set pesho rank number1',
    'set gosho nick goshko',
    'print stamat'])