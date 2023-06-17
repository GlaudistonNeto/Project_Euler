function countRightTriangles(p) {
  let count = 0;

  for (let a = 1; a < p / 2; a++) {
    for (let b = a; b < (p - a) / 2; b++) {
      const c = p - a - b;
      if (c * c === a * a + b * b) {
        count++;
      }
    }
  }

  return count;
}

function findMaxSolutionsP() {
  let maxSolutions = 0;
  let maxP = 0;

  for (let p = 1; p <= 1000; p++) {
    const solutions = countRightTriangles(p);
    if (solutions > maxSolutions) {
      maxSolutions = solutions;
      maxP = p;
    }
  }

  return maxP;
}

const maxSolutionsP = findMaxSolutionsP();
console.log('Value of p with maximum solutions:', maxSolutionsP);
