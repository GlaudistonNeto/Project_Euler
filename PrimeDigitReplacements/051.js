function generatePrimes(limit) {
  const primes = [];
  const sieve = new Array(limit).fill(true);
  sieve[0] = false;
  sieve[1] = false;

  for (let i = 2; i < Math.sqrt(limit); i++) {
    if (sieve[i]) {
      for (let j = i * i; j < limit; j += i) {
        sieve[j] = false;
      }
    }
  }

  for (let i = 2; i < limit; i++) {
    if (sieve[i]) {
      primes.push(i);
    }
  }

  return primes;
}

function replaceDigits(number, digitPositions, digit) {
  const numberString = number.toString();
  let replacedNumberString = "";

  for (let i = 0; i < numberString.length; i++) {
    if (digitPositions.includes(i)) {
      replacedNumberString += digit.toString();
    } else {
      replacedNumberString += numberString[i];
    }
  }

  return parseInt(replacedNumberString);
}

function findSmallestPrimeFamily() {
  const limit = 1000000;
  const primes = generatePrimes(limit);

  for (const prime of primes) {
    const primeString = prime.toString();

    for (let digit = 0; digit <= 9; digit++) {
      const digitPositions = [];

      for (let i = 0; i < primeString.length; i++) {
        if (primeString[i] === digit.toString()) {
          digitPositions.push(i);
        }
      }

      if (digitPositions.length >= 3) {
        let primeFamilyCount = 0;

        for (let replacementDigit = digit; replacementDigit <= 9; replacementDigit++) {
          const replacedNumber = replaceDigits(prime, digitPositions, replacementDigit);

          if (primes.includes(replacedNumber)) {
            primeFamilyCount++;
          }
        }

        if (primeFamilyCount === 8) {
          return prime;
        }
      }
    }
  }

  return -1; // If no solution found
}

const smallestPrimeFamily = findSmallestPrimeFamily();
console.log(`The smallest prime which is part of an eight prime value family is: ${smallestPrimeFamily}`);
