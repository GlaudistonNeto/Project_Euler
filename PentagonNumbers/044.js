function isPentagonal(number) {
  const inverse = (Math.sqrt(24 * number + 1) + 1) / 6;
  return inverse === Math.floor(inverse);
}

function findMinimizedDifference() {
  let minDifference = Infinity;
  
  for (let j = 1; ; j++) {
    const pentagonalJ = j * (3 * j - 1) / 2;
    
    for (let k = j - 1; k >= 1; k--) {
      const pentagonalK = k * (3 * k - 1) / 2;
      
      const sum = pentagonalJ + pentagonalK;
      const difference = pentagonalJ - pentagonalK;
      
      if (isPentagonal(sum) && isPentagonal(difference) && difference < minDifference) {
        minDifference = difference;
        return minDifference;
      }
    }
  }
}

const minimizedDifference = findMinimizedDifference();
console.log("The value of D, the minimized difference, is:", minimizedDifference);
