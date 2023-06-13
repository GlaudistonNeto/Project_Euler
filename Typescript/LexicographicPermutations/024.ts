function getLexicographicPermutation(digits: string[], position: number): string {
  const factorial = (n: number): number => {
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  };

  const remainingDigits = [...digits];
  let permutation = '';

  position--; // Adjust position to 0-based index
  while (remainingDigits.length > 0) {
    const n = remainingDigits.length;
    const index = Math.floor(position / factorial(n - 1));
    const digit = remainingDigits[index];

    permutation += digit;
    remainingDigits.splice(index, 1);

    position %= factorial(n - 1);
  }

  return permutation;
}

// Example usage
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const position = 1000000;

const permutation = getLexicographicPermutation(digits, position);
console.log(`The ${position}th lexicographic permutation is: ${permutation}`);
