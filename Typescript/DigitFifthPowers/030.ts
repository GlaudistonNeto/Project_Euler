function getDigitPowersSum(power: number): number {
  let sum = 0;

  // Iterate through all numbers starting from 2
  for (let i = 2; i <= 999999; i++) {
    const digits = String(i).split('').map(Number);
    const digitPowersSum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);

    if (i === digitPowersSum) {
      sum += i;
    }
  }

  return sum;
}

// Example usage:
const power = 5;
const result = getDigitPowersSum(power);
console.log(result);

// tsc 030.ts toget the nodejs file
