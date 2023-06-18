function generatePrimes(limit) {
  const sieve = new Array(limit).fill(true);
  sieve[0] = false; // 0 is not prime
  sieve[1] = false; // 1 is not prime

  for (let i = 2; i * i < limit; i++) {
    if (sieve[i]) {
      for (let j = i * i; j < limit; j += i) {
        sieve[j] = false;
      }
    }
  }

  const primes = [];
  for (let i = 0; i < limit; i++) {
    if (sieve[i]) {
      primes.push(i);
    }
  }

  return primes;
}

function findLongestConsecutivePrimeSum(limit) {
  const primes = generatePrimes(limit);
  let maxLength = 0;
  let maxPrime = 0;

  for (let i = 0; i < primes.length; i++) {
    let sum = primes[i];
    let length = 1;

    for (let j = i + 1; j < primes.length; j++) {
      sum += primes[j];
      length++;

      if (sum >= limit) {
        break;
      }

      if (length > maxLength && primes.includes(sum)) {
        maxLength = length;
        maxPrime = sum;
      }
    }
  }

  return maxPrime;
}

const limit = 1000000;
const result = findLongestConsecutivePrimeSum(limit);
console.log(result);
