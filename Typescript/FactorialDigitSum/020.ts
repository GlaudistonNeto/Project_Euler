function factorialSumDigits(n: number): number {
  let factorial = BigInt(1);

  for (let i = 2; i <= n; i++) {
    factorial *= BigInt(i);
  }

  const digitSum = factorial.toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);

  return digitSum;
}

const n = 100;
const sumOfDigits = factorialSumDigits(n);
console.log(`Sum of the digits in the number ${n}!: ${sumOfDigits}`);

// run tsc 020.ts to get the nodejs file
