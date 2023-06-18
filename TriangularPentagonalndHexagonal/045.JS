function findNextTrianglePentagonalHexagonalNumber() {
  let n = 285; // Starting point given in the problem
  
  while (true) {
    n++;
    const triangle = n * (n + 1) / 2;
    
    if (isPentagonal(triangle) && isHexagonal(triangle)) {
      return triangle;
    }
  }
}

function isPentagonal(number) {
  const inverse = (Math.sqrt(24 * number + 1) + 1) / 6;
  return inverse === Math.floor(inverse);
}

function isHexagonal(number) {
  const inverse = (Math.sqrt(8 * number + 1) + 1) / 4;
  return inverse === Math.floor(inverse);
}

const nextTrianglePentagonalHexagonal = findNextTrianglePentagonalHexagonalNumber();
console.log("The next triangle number that is also pentagonal and hexagonal is:", nextTrianglePentagonalHexagonal);
