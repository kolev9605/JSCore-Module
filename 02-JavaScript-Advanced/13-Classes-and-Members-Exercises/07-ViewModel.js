class Textbox{
    constructor(selector, regex) {
        this.selector = selector
        this._elements = $(selector);
        this._invalidSymbols = regex;

        let that = this
        $(selector).on('input change', function () {
            that.value = $(this).val()
        })
    }

    get elements() {
        return this._elements;
    }

    get value () {
        return $(this.selector).val()
    }

    set value (value) {
        $(this.selector).val(value)
    }

    isValid () {
        return !this._invalidSymbols.test($(this.selector).val())
    }
}


let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = $('.textbox');
console.log(textbox.elements);

inputs.on('input',function(){console.log(textbox.value);});
