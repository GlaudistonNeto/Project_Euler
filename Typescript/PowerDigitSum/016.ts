function calculateSumOfDigits(power: number): number {
  const base = BigInt(2);
  const number = base ** BigInt(power);

  let sum = 0;
  const numberString = number.toString();

  for (let i = 0; i < numberString.length; i++) {
    sum += parseInt(numberString.charAt(i), 10);
  }

  return sum;
}

const power = 1000;
const sumOfDigits = calculateSumOfDigits(power);

console.log(`Sum of the digits of 2^${power}: ${sumOfDigits}`);

// tsc 016.tj to get the node code
