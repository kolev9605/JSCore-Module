function solve(args) {
    let usernamePattern = /<![A-Za-z]+!>/g
    let emailPattern = /<@[A-Za-z]+@>/g
    let phonePattern = /<\+[A-Za-z]+\+>/g

    let text = args.splice(3);
    let username = args[0];
    let email = args[1];
    let phone = args[2];

    let match;
    for (let index in text) {
        while (match = usernamePattern.exec(text[index])) {
            text[index] = text[index].replace(match[0], username)
        }

        while (match = emailPattern.exec(text[index])) {
            text[index] = text[index].replace(match[0], email)
        }

        while (match = phonePattern.exec(text[index])) {
            text[index] = text[index].replace(match[0], phone)
        }
    }

    return text.join('\n')
}

console.log(
    solve([
        'Pesho',
        'pesho@softuni.bg',
        '90-60-90',
        'Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)',
    ])
);