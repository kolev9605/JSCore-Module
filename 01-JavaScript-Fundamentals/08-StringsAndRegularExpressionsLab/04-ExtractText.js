function solve([text]) {
    let result = []
    let index = -1
    let secondIndex = -1;
    while (true) {
        index = text.indexOf('(', secondIndex + 1);
        secondIndex = text.indexOf(')', index);

        if(index == -1 || secondIndex == -1) {
            break;
        }

        result.push(text.substring(index+1, secondIndex));
    }

    return result.join(', ');
}


console.log(solve([
    'Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)'
]));