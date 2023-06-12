function calculateRoutes(gridSize: number): bigint {
  // Calculate the central binomial coefficient
  const n = BigInt(gridSize);
  const k = BigInt(gridSize);

  let coefficient = BigInt(1);
  for (let i = BigInt(0); i < k; i++) {
    coefficient = (coefficient * (n + i + BigInt(1))) / (i + BigInt(1));
  }

  return coefficient;
}

const gridSize = 20;
const routes = calculateRoutes(gridSize);

console.log(`Number of routes in a ${gridSize}x${gridSize} grid: ${routes}`);

// run tsc 015.ts to get the node file
