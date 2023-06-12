function getTriangleNumberWithDivisors(targetDivisors: number): number {
  let triangleNumber = 0;
  let index = 1;

  while (true) {
    triangleNumber += index;
    index++;

    const divisors = getDivisorsCount(triangleNumber);
    if (divisors > targetDivisors) {
      return triangleNumber;
    }
  }
}

function getDivisorsCount(number: number): number {
  let count = 0;
  const sqrt = Math.floor(Math.sqrt(number));

  for (let i = 1; i <= sqrt; i++) {
    if (number % i === 0) {
      count += 2;
    }
  }

  // If the number is a perfect square, subtract one divisor
  if (sqrt * sqrt === number) {
    count--;
  }

  return count;
}

const targetDivisors = 500;
const triangleNumber = getTriangleNumberWithDivisors(targetDivisors);

console.log("The first triangle number with over", targetDivisors, "divisors is:", triangleNumber);

// You should run tsc 012.ts then run 012.js
