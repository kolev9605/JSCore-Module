function solve([word, text]) {
    let currentIndex = -1;
    let count = 0;

    while(true) {
        currentIndex = text.indexOf(word, currentIndex+1);
        if(currentIndex == -1) {
            break;
        }

        count++;
    }

    return count;
}