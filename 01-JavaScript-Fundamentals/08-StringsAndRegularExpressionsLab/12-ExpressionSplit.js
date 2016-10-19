function solve([code]) {
    return code.split(/[\s();.,]+/g)
        .filter(x => x!='')
        .join('\n')
}
