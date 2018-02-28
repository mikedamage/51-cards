const makeDeck = require('./deck');
const removeIdx = Math.floor(Math.random() * deck.length);

// Generate a full deck of cards:
const deck = makeDeck();

// Remove one random card from the deck:
const [ removed ] = deck.splice(removeIdx, 1);

// Assign face cards numerical values:
const faceValues = {
  ace: 11,
  jack: 12,
  queen: 13,
  king: 14,
};

// Create an object that sums up the numerical value of
// each suit:
const stats = deck.reduce((result, { suit, value }) => {
  value = parseInt(value) || faceValues[value];

  if (suit) {
    if (!result.hasOwnProperty(suit)) result[suit] = 0;
    result[suit] += value;
  }
  result.total += value;

  return result;
}, { total: 0 });
