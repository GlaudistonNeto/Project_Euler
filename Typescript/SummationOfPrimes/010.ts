function sumPrimesBelow(limit: number): number {
  const sieve = new Array(limit).fill(true);
  sieve[0] = false; // 0 is not prime
  sieve[1] = false; // 1 is not prime

  // Use Sieve of Eratosthenes to generate prime numbers
  for (let i = 2; i <= Math.sqrt(limit); i++) {
    if (sieve[i]) {
      for (let j = i * i; j < limit; j += i) {
        sieve[j] = false;
      }
    }
  }

  // Calculate the sum of primes
  let sum = 0;
  for (let i = 2; i < limit; i++) {
    if (sieve[i]) {
      sum += i;
    }
  }

  return sum;
}

const limit = 2000000;
const sum = sumPrimesBelow(limit);

console.log(`The sum of all prime numbers below ${limit} is ${sum}.`);

// run tsc 010.ts
