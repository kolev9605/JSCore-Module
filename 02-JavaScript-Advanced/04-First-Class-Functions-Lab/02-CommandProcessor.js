function solve(input) {
    let closure = (function () {
        let text = '';
        return {
            append: (newText) => text += newText,
            removeStart: (count) => text = text.slice(count),
            removeEnd: (count) => text = text.slice(0, text.length - count),
            print: () => console.log(text)
        }
    })()

    for (let item of input) {
        [command, val] = item.split(' ');
        closure[command](val);

    }
}

solve(['append 123',
    'append 45',
    'removeStart 2',
    'removeEnd 1',
    'print']
)