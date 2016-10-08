function solve([n, k]) {
    [n, k] = [n, k].map(Number);

    let result = [1];

    for (let i = 0; i < n-1; i++) {
        let currentNumToAdd = 0;

        for (let j = 0; j < k; j++) {
            currentNumToAdd += result[i - j] || 0;
        }

        result.push(currentNumToAdd);
    }


    return result;
}

console.log(
solve(['8', '2'])
)