function fibonacciIndex(digits: number): number {
  let prev = BigInt(1);
  let curr = BigInt(1);
  let index = 2;

  while (curr.toString().length < digits) {
    const next = prev + curr;
    prev = curr;
    curr = next;
    index++;
  }

  return index;
}

// Example usage
const digits = 1000;
const index = fibonacciIndex(digits);
console.log(`The index of the first Fibonacci term with ${digits} digits is: ${index}`);

// run tsc 025.ts to get .js file
