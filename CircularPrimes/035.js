function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function isCircularPrime(n) {
  const digits = String(n).split('');
  const rotations = [n];

  for (let i = 1; i < digits.length; i++) {
    const rotation = parseInt(digits.slice(i).concat(digits.slice(0, i)).join(''), 10);
    rotations.push(rotation);
  }

  for (const rotation of rotations) {
    if (!isPrime(rotation)) {
      return false;
    }
  }

  return true;
}

function countCircularPrimes() {
  let count = 0;

  for (let n = 2; n < 1000000; n++) {
    if (isCircularPrime(n)) {
      count++;
    }
  }

  return count;
}

const circularPrimesCount = countCircularPrimes();
console.log('Number of circular primes below one million:', circularPrimesCount);
