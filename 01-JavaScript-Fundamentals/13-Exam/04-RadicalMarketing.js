function solve(args) {
    let people = new Map();
    for (let line of args) {
        let lineArgs = line.split('-');
        if (lineArgs.length > 1) {
            //subscribe
            let firstPerson = lineArgs[0];
            let secondPerson = lineArgs[1];
            if (//firstPerson != secondPerson &&
                people.has(secondPerson)) {
                people.get(secondPerson).subs.add(firstPerson);
                people.get(secondPerson).subscribed++;
            }
        } else {
            //register
            if (!people.has(lineArgs[0])) {
                people.set(lineArgs[0], {subscribed: 0, subs: new Set()})
            }
        }
    }
    let sorted = [...people].sort(secondSort);
    sorted = sorted.sort(customSort)

    //console.log(sorted);

    for (let entry of sorted) {
        console.log(entry[0]);
        let values = [...people.get(entry[0]).subs.values()]
        for (let i = 1; i <= values.length; i++) {
            console.log(`${i}. ${values[i-1]}`);
        }

        break;
    }

    function customSort(a, b) {
        let firstArr = [...a[1].subs.values()]
        let secondArr = [...b[1].subs.values()]
        if (secondArr.length - firstArr.length != 0) {
            return secondArr.length - firstArr.length
        }

        return 0;
    }

    function secondSort(a, b) {
        return people.get(b[0]).subscribed - people.get(a[0]).subscribed;
    }
}

solve([
    'A',
    'B',
    'C',
    'A-B',
    'D-A'
])