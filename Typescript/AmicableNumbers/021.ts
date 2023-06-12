function properDivisorsSum(n: number): number {
  // Calculate the sum of proper divisors of n
  let divisorsSum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      divisorsSum += i;
    }
  }
  return divisorsSum;
}

function sumAmicableNumbers(limit: number): number {
  let amicableSum = 0;
  for (let a = 1; a < limit; a++) {
    const b = properDivisorsSum(a);
    if (a !== b && properDivisorsSum(b) === a) {
      amicableSum += a;
    }
  }
  return amicableSum;
}

const limit = 10000;
const result = sumAmicableNumbers(limit);
console.log(result);

// run tsc 021.ts to get the nodejs file
