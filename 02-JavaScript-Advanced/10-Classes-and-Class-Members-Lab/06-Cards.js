let cardCreator = (function () {

    let Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣'
    }

    let faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(value) {
            if(faces.indexOf(value) < 0) {
               throw new Error('Invalid value.')
            }

            this._face = value;
        }

        get suit() {
            return this._suit;
        }

        set suit(value) {
            if (!Object.keys(Suits).map(k => Suits[k]).includes(value)) {
                throw new Error('Invalid suit.')
            }

            this._suit = value;
        }
    }

    return {
        Suits: Suits,
        Card: Card
    }
})()

let Suits = cardCreator.Suits;
let Card = cardCreator.Card;

console.log(Suits);
console.log(Card);

let card = new Card("2",Suits.SPADES);

