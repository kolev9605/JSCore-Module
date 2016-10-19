function solve(args) {

    let result = []
    for (let email of args) {
        let domain = email.split('@').slice(1)[0];
        let username = email.split('@')[0] + '.' +
            domain.split('.')
                .map(x => x = x[0])
                .reduce((a, b) => a + b);

        result.push(username);
    }

    return result.join(', ');
}

console.log(solve(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']));