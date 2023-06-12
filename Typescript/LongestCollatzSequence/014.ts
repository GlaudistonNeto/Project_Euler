function getCollatzChainLength(n: number): number {
  let count = 1;

  while (n !== 1) {
    if (n % 2 === 0) {
      // n is even
      n = n / 2;
    } else {
      // n is odd
      n = 3 * n + 1;
    }
    count++;
  }

  return count;
}

function findLongestChainUnderLimit(limit: number): number {
  let maxLength = 0;
  let startingNumber = 0;

  for (let i = 1; i < limit; i++) {
    const chainLength = getCollatzChainLength(i);

    if (chainLength > maxLength) {
      maxLength = chainLength;
      startingNumber = i;
    }
  }

  return startingNumber;
}

const limit = 1000000;
const result = findLongestChainUnderLimit(limit);
console.log(`The starting number under ${limit} that produces the longest chain is: ${result}`);

// tsc 014.ts
