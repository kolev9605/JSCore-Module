function solve(arr) {
    arr = arr.map(Number);
    let count = arr.splice(0, 1);

    let firstK = [];
    for (let i = 0; i < count; i++) {
        firstK.push(arr[i]);
    }

    let lastK = [];
    for (let i = arr.length-1; i >= arr.length-count ; i--) {
        lastK.unshift(arr[i]);
    }

    return firstK.join(' ') + '\n' + lastK.join(' ');
}

console.log(solve(
    ['2', '7', '8', '9']
));