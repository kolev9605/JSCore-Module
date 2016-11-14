function solve(input) {
    let listProcessor = function () {
        let result = []
        return {
            add: (newText) => result.push(newText),
            remove: (text) => result = result.filter(x => x != text),
            print: () => console.log(result.join(','))
        }
    }()


    for (let command of input) {
        [command, arg] = command.split(' ')
        listProcessor[command](arg)
    }
}

console.log(
    solve(['add pesho', 'add gosho', 'add pesho', 'remove pesho','print'])
)