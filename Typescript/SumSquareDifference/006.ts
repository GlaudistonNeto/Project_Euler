(function () {
  function calculateDifference(n: number): number {
    let sumOfSquares = 0;
    let squareOfSum = 0;

    for (let i = 1; i <= n; i++) {
      sumOfSquares += i * i;
      squareOfSum += i;
    }

    squareOfSum *= squareOfSum;

    const difference = Math.abs(sumOfSquares - squareOfSum);
    return difference;
  }

  const difference = calculateDifference(100);
  console.log(difference);
})();

// You should run tsc 006.ts then run 006.js
