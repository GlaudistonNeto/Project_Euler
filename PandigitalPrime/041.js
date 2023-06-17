function isPrime(num) {
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

function generatePermutations(digits) {
  const results = [];

  function permute(arr, m = []) {
    if (arr.length === 0) {
      results.push(m.join(""));
    } else {
      for (let i = 0; i < arr.length; i++) {
        const curr = arr.slice();
        const next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  }

  permute(digits);
  return results;
}

function findLargestPandigitalPrime() {
  let largestPandigitalPrime = 0;

  // Generate pandigital numbers in descending order
  for (let n = 9; n >= 1; n--) {
    const digits = Array.from({ length: n }, (_, index) => index + 1);
    const permutations = generatePermutations(digits.sort((a, b) => b - a));

    for (let i = 0; i < permutations.length; i++) {
      const pandigitalNumber = parseInt(permutations[i]);
      if (isPrime(pandigitalNumber)) {
        largestPandigitalPrime = pandigitalNumber;
        break;
      }
    }

    if (largestPandigitalPrime > 0) {
      break;
    }
  }

  return largestPandigitalPrime;
}

const result = findLargestPandigitalPrime();
console.log(result);
