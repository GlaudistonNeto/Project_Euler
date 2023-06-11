function findGreatestProduct(grid: number[][], size: number): number {
  const rows = grid.length;
  const cols = grid[0].length;
  let maxProduct = 0;

  // Check horizontally and vertically
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols - size + 1; col++) {
      // Calculate product horizontally
      let productHorizontal = 1;
      for (let i = 0; i < size; i++) {
        productHorizontal *= grid[row][col + i];
      }
      maxProduct = Math.max(maxProduct, productHorizontal);

      // Calculate product vertically
      let productVertical = 1;
      for (let i = 0; i < size; i++) {
        productVertical *= grid[row + i][col];
      }
      maxProduct = Math.max(maxProduct, productVertical);
    }
  }

  // Check diagonally (top-left to bottom-right)
  for (let row = 0; row < rows - size + 1; row++) {
    for (let col = 0; col < cols - size + 1; col++) {
      let productDiagonal = 1;
      for (let i = 0; i < size; i++) {
        productDiagonal *= grid[row + i][col + i];
      }
      maxProduct = Math.max(maxProduct, productDiagonal);
    }
  }

  // Check diagonally (bottom-left to top-right)
  for (let row = size - 1; row < rows; row++) {
    for (let col = 0; col < cols - size + 1; col++) {
      let productDiagonal = 1;
      for (let i = 0; i < size; i++) {
        productDiagonal *= grid[row - i][col + i];
      }
      maxProduct = Math.max(maxProduct, productDiagonal);
    }
  }

  return maxProduct;
}

// Grid data (without leading zeros)
const gridData: number[][] = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  // Rest of the grid data...
];

const gridSize = 20;
const adjacentSize = 4;

const greatestProduct = findGreatestProduct(gridData, adjacentSize);
console.log("The greatest product of four adjacent numbers in the grid is:", greatestProduct);
