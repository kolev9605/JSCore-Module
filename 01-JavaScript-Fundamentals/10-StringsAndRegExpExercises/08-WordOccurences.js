function solve([text, word]) {
    let strRegExPattern = '\\b' + word + '\\b';
    let result = text.match(new RegExp(strRegExPattern, 'gi'));

    if(result != null) {
        return result.length;
    }

    return 0;
}

console.log(solve(['The waterfall was so high, that the child couldn’t see its peak.', 'thesss']));