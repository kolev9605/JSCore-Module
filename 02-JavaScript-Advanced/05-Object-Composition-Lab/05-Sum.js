function sumator() {
    let firstSelector
    let secondSelector
    let resultSelector

    return {
        init: (firstSelector, secondSelector, resultSelector) => {
            sumator.firstSelector = $(firstSelector);
            sumator.secondSelector = $(secondSelector);
            sumator.resultSelector = $(resultSelector);
        },

        add: () => {
            sumator.resultSelector.val(
                Number(sumator.firstSelector.val()) +
                Number(sumator.secondSelector.val()))

        },

        subtract: () => {
            sumator.resultSelector.val(
                Number(sumator.firstSelector.val()) -
                Number(sumator.secondSelector.val()))
        }
    }
}

