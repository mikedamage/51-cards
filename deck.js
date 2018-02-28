const suits = [ 'hearts', 'spades', 'clubs', 'diamonds' ];
const faceCards = [ 'jack', 'king', 'queen', 'ace' ];
const deck = [];

function makeDeck() {
  for (const suit of suits) {
    for (let i = 2; i <= 10; i++) {
      deck.push({ suit, value: `${i}` });
    }

    for (const face of faceCards) {
      deck.push({ suit, value: face });
    }
  }
}

module.exports = deck;
