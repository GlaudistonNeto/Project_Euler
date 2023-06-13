function getDivisorsSum(num: number): number {
  let sum = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== 1 && i !== num / i) {
        sum += num / i;
      }
    }
  }
  return sum;
}

function isAbundantNumber(num: number): boolean {
  return getDivisorsSum(num) > num;
}

function getAbundantNumbers(limit: number): number[] {
  const abundantNumbers: number[] = [];
  for (let i = 1; i <= limit; i++) {
    if (isAbundantNumber(i)) {
      abundantNumbers.push(i);
    }
  }
  return abundantNumbers;
}

function getNonAbundantSum(limit: number): number {
  const abundantNumbers = getAbundantNumbers(limit);
  const isSumOfAbundant: boolean[] = Array(limit + 1).fill(false);

  for (let i = 0; i < abundantNumbers.length; i++) {
    for (let j = i; j < abundantNumbers.length; j++) {
      const sum = abundantNumbers[i] + abundantNumbers[j];
      if (sum <= limit) {
        isSumOfAbundant[sum] = true;
      } else {
        break;
      }
    }
  }

  let sum = 0;
  for (let i = 1; i <= limit; i++) {
    if (!isSumOfAbundant[i]) {
      sum += i;
    }
  }

  return sum;
}

// Example usage
const limit = 28123;
const sum = getNonAbundantSum(limit);
console.log(`The sum of all positive integers that cannot be written as the sum of two abundant numbers is: ${sum}`);

// run tsc 023.ts to get the .js file
