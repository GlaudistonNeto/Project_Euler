function factorial(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function isCuriousNumber(num: number): boolean {
  const digits = String(num).split('');
  const sum = digits.reduce((acc, digit) => acc + factorial(Number(digit)), 0);
  return sum === num;
}

function findSumOfCuriousNumbers(): number {
  let sum = 0;

  for (let i = 3; i <= 99999; i++) {
    if (isCuriousNumber(i)) {
      sum += i;
    }
  }

  return sum;
}

const sumOfCuriousNumbers: number = findSumOfCuriousNumbers();
console.log("Sum of curious numbers:", sumOfCuriousNumbers);

// run tsc 034.ts to get the nodejs file
