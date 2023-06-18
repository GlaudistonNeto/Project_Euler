function sieveOfEratosthenes(n) {
  const primes = new Array(n + 1).fill(true);
  primes[0] = primes[1] = false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (primes[i]) {
      for (let j = i * i; j <= n; j += i) {
        primes[j] = false;
      }
    }
  }

  return primes;
}

function arePermutations(a, b, c) {
  const digitsA = a.toString().split("").sort().join("");
  const digitsB = b.toString().split("").sort().join("");
  const digitsC = c.toString().split("").sort().join("");
  return digitsA === digitsB && digitsB === digitsC;
}

function findArithmeticSequence() {
  const primes = sieveOfEratosthenes(10000);
  const delta = 3330;

  for (let a = 1489; a <= 3339; a++) {
    if (primes[a] && primes[a + delta] && primes[a + 2 * delta]) {
      if (arePermutations(a, a + delta, a + 2 * delta)) {
        return [a, a + delta, a + 2 * delta];
      }
    }
  }

  return null;
}

function concatenateNumbers(numbers) {
  return numbers.map(String).join("");
}

const sequence = findArithmeticSequence();

if (sequence !== null) {
  const answer = concatenateNumbers(sequence);
  console.log("The 12-digit number formed by the three terms is:", answer);
} else {
  console.log("No sequence found.");
}
