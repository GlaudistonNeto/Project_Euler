function findSmallestDivisibleNumber(start: number, end: number): number {
  let result = start;

  for (let i = start + 1; i <= end; i++) {
    result = lcm(result, i);
  }

  return result;
}

function gcd(a: number, b: number): number {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b);
}

const smallestDivisible = findSmallestDivisibleNumber(1, 20);
console.log(smallestDivisible); // Output: 232792560

// You should run tsc 005.ts then run 005.js
