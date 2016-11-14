function solve(input, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status =status;
        }
    }

    let result = []
    for (let line of input) {
        let args = line.split('|')
        let destination = args[0];
        let price = Number(args[1]);
        let status = args[2];

        let ticket = new Ticket(destination, price, status);
        result.push(ticket)
    }

    return result.sort((a,b) => a[criteria] > b[criteria])
}

console.log(solve(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));