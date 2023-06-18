function getDistinctPrimeFactorsCount(number) {
  const factors = new Set();

  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      factors.add(i);

      while (number % i === 0) {
        number /= i;
      }
    }
  }

  if (number > 1) {
    factors.add(number);
  }

  return factors.size;
}

function findConsecutiveIntegers() {
  let consecutiveCount = 0;
  let number = 1;

  while (true) {
    if (getDistinctPrimeFactorsCount(number) === 4) {
      consecutiveCount++;
      if (consecutiveCount === 4) {
        return number - 3; // Return the first number of the four consecutive integers
      }
    } else {
      consecutiveCount = 0;
    }

    number++;
  }
}

const firstNumber = findConsecutiveIntegers();
console.log("The first number of the four consecutive integers with four distinct prime factors is:", firstNumber);
