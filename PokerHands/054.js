const https = require('https');

const file = 'https://projecteuler.net/project/resources/p054_poker.txt';

class Card {
  static suitNames = ['Diamonds', 'Clubs', 'Hearts', 'Spades'];
  static faceNames = ['2', '3', '4', '5', '6', '7', '8', '9', 'Ten', 'Jack', 'Queen', 'King', 'Ace'];

  constructor(cardStr = 'AS') {
    const face = cardStr[0];
    const suit = cardStr[1];
    this.suitIndex = Card.suitNames.indexOf(suit);
    this.faceIndex = Card.faceNames.indexOf(face);
    this.rank = this.faceIndex + 2;
  }
  
  valueOf() {
    return this.rank;
  }
}

function testStraight(hand) {
  const ranks = hand.map(card => card.rank).sort((a, b) => a - b);
  return ranks.every((rank, i) => rank === ranks[0] + i);
}

function testFlush(hand) {
  return hand.every(card => card.suitIndex === hand[0].suitIndex);
}

function testRoyal(hand) {
  return testFlush(hand) && hand.every(card => card.faceIndex >= 8);
}

function testStraightFlush(hand) {
  return testStraight(hand) && testFlush(hand);
}

function testFourKind(hand) {
  const ranks = hand.map(card => card.rank);
  return ranks.some(rank => ranks.filter(r => r === rank).length === 4);
}

function testFullHouse(hand) {
  const ranks = hand.map(card => card.rank);
  const counts = ranks.map(rank => ranks.filter(r => r === rank).length);
  return counts.includes(2) && counts.includes(3);
}

function testThreeKind(hand) {
  const ranks = hand.map(card => card.rank);
  return ranks.some(rank => ranks.filter(r => r === rank).length === 3);
}

function testTwoPairs(hand) {
  const ranks = hand.map(card => card.rank);
  const counts = ranks.map(rank => ranks.filter(r => r === rank).length);
  return counts.filter(count => count === 2).length === 2;
}

function testPair(hand) {
  const ranks = hand.map(card => card.rank);
  return ranks.some(rank => ranks.filter(r => r === rank).length === 2);
}

function compareSingleSets(hand1, hand2, n) {
  const l1 = hand1.map(card => card.rank);
  const l2 = hand2.map(card => card.rank);
  const t1 = Math.max(...l1.filter(rank => l1.filter(r => r === rank).length === n));
  const t2 = Math.max(...l2.filter(rank => l2.filter(r => r === rank).length === n));
  
  if (t1 > t2) {
    return hand1;
  } else if (t2 > t1) {
    return hand2;
  } else {
    const v1 = l1.filter(rank => l1.filter(r => r !== t1).includes(rank)).sort((a, b) => b - a);
    const v2 = l2.filter(rank => l2.filter(r => r !== t2).includes(rank)).sort((a, b) => b - a);
    
    if (v1 > v2) {
      return hand1;
    } else if (v2 > v1) {
      return hand2;
    } else {
      return compareHighestCard(hand1, hand2);
    }
  }
}

function comparePair(hand1, hand2) {
  return compareSingleSets(hand1, hand2, 2);
}

function compareTwoPairs(hand1, hand2) {
  return compareSingleSets(hand1, hand2, 2);
}

function compareThreeKind(hand1, hand2) {
  return compareSingleSets(hand1, hand2, 3);
}

function compareFullHouse(hand1, hand2) {
  return compareSingleSets(hand1, hand2, 3);
}

function compareFourKind(hand1, hand2) {
  return compareSingleSets(hand1, hand2, 4);
}

function compareStraight(hand1, hand2) {
  return Math.max(...hand1.map(card => card.rank)) > Math.max(...hand2.map(card => card.rank));
}

function compareHighestCard(hand1, hand2) {
  const l1 = hand1.map(card => card.rank).sort((a, b) => b - a);
  const l2 = hand2.map(card => card.rank).sort((a, b) => b - a);
  return l1 > l2;
}

const tests = [
  testPair,
  testTwoPairs,
  testThreeKind,
  testStraight,
  testFlush,
  testFullHouse,
  testFourKind,
  testStraightFlush,
  testRoyal
];

const compares = [
  comparePair,
  compareTwoPairs,
  compareThreeKind,
  compareStraight,
  compareHighestCard,
  compareFullHouse,
  compareFourKind,
  compareStraight,
  null
];

const compareMapping = Object.fromEntries(tests.map((test, i) => [test, compares[i]]));

let p1Pts = 0;

https.get(file, res => {
  let data = '';
  res.on('data', chunk => {
    data += chunk;
  });

  res.on('end', () => {
    const plays = data.trim().split('\n');
    for (const play of plays) {
      const playData = play.split(' ');
      const p1Hand = playData.slice(0, 5).map(cardStr => new Card(cardStr)).sort((a, b) => a.rank - b.rank);
      const p2Hand = playData.slice(5).map(cardStr => new Card(cardStr)).sort((a, b) => a.rank - b.rank);

      for (let i = tests.length - 1; i >= 0; i--) {
        const test = tests[i];
        const t1 = test(p1Hand);
        const t2 = test(p2Hand);
        if (t1 && !t2) {
          p1Pts++;
          break;
        } else if (!t1 && t2) {
          break;
        } else if (t1 && t2) {
          const compareFunc = compareMapping[test];
          const winner = compareFunc(p1Hand, p2Hand);
          if (winner === p1Hand) {
            p1Pts++;
          }
          break;
        }
      }
    }

    console.log('Player 1 pts:', p1Pts);
  });
}).on('error', err => {
  console.error('Error retrieving file:', err);
});
