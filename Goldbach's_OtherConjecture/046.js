function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function findSmallestOddComposite() {
  let number = 9; // Starting from the first odd composite number

  while (true) {
    if (!isPrime(number)) {
      let found = false;

      for (let i = 1; 2 * i * i < number; i++) {
        const remainder = number - 2 * i * i;

        if (isPrime(remainder)) {
          found = true;
          break;
        }
      }

      if (!found) {
        return number;
      }
    }

    number += 2; // Moving to the next odd number
  }
}

const smallestOddComposite = findSmallestOddComposite();
console.log("The smallest odd composite that cannot be written as the sum of a prime and twice a square is:", smallestOddComposite);
