import Card from '../card';
// this Deck constructor needs a method which builds card objects and fills out a deck

SUITS = {
    clubs   :    "♣",
    diamonds:    "♦",
    hearts  :    "♥",
    spades  :    "♠"
}    

VALUES = {
    two     :   2,
    three   :   3,
    four    :   4,
    five    :   5,
    six     :   6,
    seven   :   7,
    eight   :   8,
    nine    :   9,
    ten     :   10,
    jack    :   10,
    queen   :   10,
    king    :   10
}

RANKS = {
    two     :   '2',
    three   :   '3',
    four    :   '4',
    five    :   '5',
    six     :   '6',
    seven   :   '7',
    eight   :   '8',
    nine    :   '9',
    ten     :   '10',
    jack    :   'J',
    queen   :   'Q',
    king    :   'K',
    ace     :   'A'
}

const Deck = function() {
    this.cards = this.allCards();

    this.length = this.cards.length;
    
}

Deck.prototype.allCards = function() {
    let allCards = [];

    let dealer = new Card();

    dealer.suits.forEach( suit => {

        dealer.ranks.forEach( rank => {

            allCards.push(new Card(rank, suit))

        })

    })

    return allCards;
}

Deck.prototype.deal = function() {
    return this.cards.splice(0, 2);
}

Deck.prototype.shuffle = function() {
    for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
    return this.cards;
}