function sumDiagonalNumbers(spiralSize: number): number {
  let sum = 1; // Initialize sum with center value (1x1 spiral)
  let currentNum = 1;
  let stepSize = 2;

  for (let i = 1; i <= spiralSize / 2; i++) {
    for (let j = 0; j < 4; j++) {
      currentNum += stepSize;
      sum += currentNum;
    }
    stepSize += 2;
  }

  return sum;
}

const spiralSize = 1001;
const sum = sumDiagonalNumbers(spiralSize);

console.log(`The sum of the numbers on the diagonals in a ${spiralSize}x${spiralSize} spiral is: ${sum}`);
