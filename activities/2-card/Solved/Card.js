const Card = function(rank, suit) {
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

    // add the properties below 
    this.rank = RANKS[rank]
    this.suit = SUITS[suit]

    this.suits = SUITS.keys;
    this.ranks = RANKS.keys;

    // add methods below
    
    this.value = function() {
      if(this.isAce) {
        return 'ACE'
      }

      return VALUES[this.rank]
    }

    this.isAce = function() {
      this.rank === 'A'
    }

}


// Create a new card
let card = new Card('ace')

console.log(card)
