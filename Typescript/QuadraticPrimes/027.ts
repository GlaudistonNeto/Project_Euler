function isPrime(num: number): boolean {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function findQuadraticCoefficientsProduct(): number {
  let maxPrimes = 0;
  let product = 0;

  for (let a = -999; a < 1000; a++) {
    for (let b = -1000; b <= 1000; b++) {
      let n = 0;
      let quadratic = n * n + a * n + b;
      let primesCount = 0;

      while (isPrime(Math.abs(quadratic))) {
        primesCount++;
        n++;
        quadratic = n * n + a * n + b;
      }

      if (primesCount > maxPrimes) {
        maxPrimes = primesCount;
        product = a * b;
      }
    }
  }

  return product;
}

const coefficientsProduct = findQuadraticCoefficientsProduct();
console.log(coefficientsProduct);
