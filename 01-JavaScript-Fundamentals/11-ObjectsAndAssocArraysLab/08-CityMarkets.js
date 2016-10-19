function solve(input) {

    let sales = new Map();

    for (let line of input) {
        let args = line.split(/\s*->\s*/g);
        let town = args[0];
        let product = args[1];
        let priceArgs = args[2].split(/\s*:\s*/g).map(Number)
        let totalPrice = priceArgs[0] * priceArgs[1];

        if (!sales.has(town)) {
            sales.set(town, new Map());
        }

        if (!sales.get(town).has(product)) {
            sales.get(town).set(product, 0);
        }

        sales.get(town).set(product, sales.get(town).get(product) + totalPrice);

    }

    for (let [k,v] of sales) {
        console.log(`Town - ${k}`);
        for (let [innerk, innerv] of sales.get(k)) {
            console.log(`$$$${innerk} : ${innerv}`);
        }
    }
}

console.log(solve(
    [
        'Sofia -> Laptops HP -> 200 : 2000',
        'Sofia -> Raspberry -> 200000 : 1500',
        'Sofia -> Audi Q7 -> 200 : 100000',
        'Montana -> Portokals -> 200000 : 1',
        'Montana -> Qgodas -> 20000 : 0.2',
        'Montana -> Chereshas -> 1000 : 0.3'

    ]))