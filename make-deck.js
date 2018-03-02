const suits = [ 'hearts', 'spades', 'clubs', 'diamonds' ];
const faceCards = [ 'jack', 'king', 'queen', 'ace' ];

function makeDeck() {
  const deck = [];

  for (const suit of suits) {
    for (let i = 2; i <= 10; i++) {
      deck.push({ suit, value: `${i}` });
    }

    for (const face of faceCards) {
      deck.push({ suit, value: face });
    }
  }

  return deck;
}

module.exports = makeDeck;
