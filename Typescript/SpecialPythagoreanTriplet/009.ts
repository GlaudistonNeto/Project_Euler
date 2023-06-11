function findPythagoreanTriplet(targetSum: number): number {
  for (let a = 1; a < targetSum / 3; a++) {
    for (let b = a + 1; b < targetSum / 2; b++) {
      const c = targetSum - a - b;
      if (a * a + b * b === c * c) {
        return a * b * c;
      }
    }
  }
  return -1; // If no Pythagorean triplet is found
}

const targetSum = 1000;
const product = findPythagoreanTriplet(targetSum);

if (product !== -1) {
  console.log(`The product of the Pythagorean triplet with a sum of ${targetSum} is ${product}.`);
} else {
  console.log(`No Pythagorean triplet found with a sum of ${targetSum}.`);
}

// You should run tsc 09.ts then run 009.js
