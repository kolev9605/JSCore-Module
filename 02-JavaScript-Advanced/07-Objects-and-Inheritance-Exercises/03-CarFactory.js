function carFactory(obj) {

    function getEngine(power) {
        let smallEngineDiff = Math.abs(power - 90)
        let mediumEngineDiff = Math.abs(power - 120)
        let largeEngineDiff = Math.abs(power - 200)

        let closest = Math.min(smallEngineDiff, mediumEngineDiff, largeEngineDiff)

        let obj = {}
        if (closest == smallEngineDiff) {
            obj.power = 90
            obj.volume = 1800
        } else if (closest == mediumEngineDiff) {
            obj.power = 120
            obj.volume = 2400
        } else {
            obj.power = 200
            obj.volume = 3500
        }

        return obj
    }

    function getWheels(wheelsize) {
        if (wheelsize % 2 === 0) {
            wheelsize--;
        }

        return [wheelsize, wheelsize, wheelsize, wheelsize]
    }

    return {
        model: obj.model,
        engine: getEngine(obj.power),
        carriage: {
            type: obj.carriage,
            color: obj.color
        },
        wheels: getWheels(obj.wheelsize)
    }
}

console.log(carFactory(
    {
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
));