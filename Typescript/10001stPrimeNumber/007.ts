function isPrime(number: number): boolean {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function findNthPrime(n: number): number {
  let count = 0;
  let number = 2;

  while (count < n) {
    if (isPrime(number)) {
      count++;
    }
    number++;
  }

  return number - 1;
}

const n = 10001;
const nthPrime = findNthPrime(n);

console.log(`The ${n}th prime number is ${nthPrime}.`);

// You should run tsc 007.ts then run 007.js
