function calculateFactorial(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

function countBinomialCoefficients() {
  let count = 0;
  for (let n = 1; n <= 100; n++) {
    for (let r = 1; r <= n; r++) {
      const binomialCoefficient = calculateFactorial(n) / (calculateFactorial(r) * calculateFactorial(n - r));
      if (binomialCoefficient > 1000000) {
        count++;
      }
    }
  }
  return count;
}

const result = countBinomialCoefficients();
console.log("The number of values greater than one million is:", result);
