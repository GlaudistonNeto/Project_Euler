function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function isTruncatablePrime(n) {
  let leftToRight = String(n);
  let rightToLeft = String(n);

  while (leftToRight.length > 0 && rightToLeft.length > 0) {
    if (!isPrime(Number(leftToRight)) || !isPrime(Number(rightToLeft))) {
      return false;
    }

    leftToRight = leftToRight.slice(1);
    rightToLeft = rightToLeft.slice(0, -1);
  }

  return true;
}

function findTruncatablePrimesSum() {
  let count = 0;
  let sum = 0;
  let number = 23; // Start with the smallest two-digit prime number

  while (count < 11) {
    if (isTruncatablePrime(number)) {
      count++;
      sum += number;
    }

    number++;
  }

  return sum;
}

const truncatablePrimesSum = findTruncatablePrimesSum();
console.log('Sum of truncatable primes:', truncatablePrimesSum);
