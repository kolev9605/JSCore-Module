function solve() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new Error('Melon class cannot be instantiated.')
            }

            this.weight = weight;
            this.melonSort = melonSort;
            this.type = ''
        }

        get elementIndex() {
            return this.weight * this.melonSort.length
        }

        toString() {
            let result = `Element: ${this.type}\n`
            result += `Sort: ${this.melonSort}\n`
            result += `Element Index: ${this.elementIndex}\n`

            return result.trim();
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.type = 'Water'
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort)
            this.type = 'Fire'
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort)
            this.type = 'Earth'
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort)
            this.type = 'Air'
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort)
            this._elements = ['Water', 'Fire', 'Earth', 'Air']
            this._index = 0;
        }

        morph() {
            let currentIndex = ++this._index % this._elements.length;
            this.type = this._elements[currentIndex]
        }
    }

    return {
        Melon,
        Watermelon,
        Firemelon,
        Earthmelon,
        Airmelon,
        Melolemonmelon
    }
}



let watermelon = new Watermelon(12.5, "Kingsize");
//console.log(watermelon.toString());

let pedal = new Melolemonmelon(10, 'bastun')
console.log(pedal.toString());
pedal.morph()
console.log(pedal.toString());
