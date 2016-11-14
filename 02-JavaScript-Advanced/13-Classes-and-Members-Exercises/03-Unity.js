class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    unite(otherRat) {
        if(otherRat.constructor.name == 'Rat') {
            this.unitedRats.push(otherRat)
        }
    }

    getRats() {
        return this.unitedRats;
    }

    toString() {
        let result = this.name + '\n'
        result += this.unitedRats
            .map(x => '##'+ x.name)
            .join('\n')

        return result
    }
}

r1 = new Rat('kolio')
r2 = new Rat('asen')
r3 = new Rat('avera')
r4 = new Rat('jaka')

r1.unite(r2)
r1.unite(r3)
console.log(r1.getRats())
console.log('' + r1);