function solve(input) {
    let args = input.map(x=>x.split(/\s*\|\s*/g))
    let products = new Map();

    for (let line of args) {
        let town = line[0];
        let product = line[1];
        let price = Number(line[2]);

        if (!products.has(product)) {
            products.set(product, {town: town, price: price})
        } else {
            let currentPrice = products.get(product).price;
            if (price < currentPrice) {
                products.set(product, {town: town, price: price})
            }
        }
    }

    for (let [k,v] of products) {
        console.log(`${k} -> ${v.price} (${v.town})`);
    }
}

console.log(solve(
    [
        'Sofia City | Audi | 100000',
        'Sofia City | BMW | 100000',
        'Sofia City | Mitsubishi | 10000',
        'Sofia City | Mercedes | 10000',
        'Sofia City | NoOffenseToCarLovers | 0',
        'Mexico City | Audi | 1000',
        'Mexico City | BMW | 99999',
        'New York City | Mitsubishi | 10000',
        'New York City | Mitsubishi | 1000',
        'Mexico City | Audi | 100000',
        'Washington City | Mercedes | 1000',
    ]
));