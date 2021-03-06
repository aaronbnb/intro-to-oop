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

    this.rank = RANKS[rank]
    this.suit = SUITS[suit]
    
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

export default Card;
