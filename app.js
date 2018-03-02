const makeDeck = require('./make-deck');
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

/*
 * Create an object that contains the sums of the card values for each suit.
 * This uses Array.prototype.reduce, which loops through an array, runs a
 * function that's given each member of the array, and outputs a single
 * value based on the output of the callback function:
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 */
const stats = deck.reduce((result, { suit, value }) => {
  value = parseInt(value) || faceValues[value];

  if (suit) {
    if (!result.hasOwnProperty(suit)) result[suit] = 0;
    result[suit] += value;
  }

  return result;
}, { total: 0 });

console.log(stats);

const lowValue = Math.min(...stats.values());
