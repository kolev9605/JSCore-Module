function solve([email]) {
    return /\b[A-Za-z0-9]+@[a-z]+\.[a-z]+\b/
        .test(email) ? 'Valid' : 'Invalid'
}