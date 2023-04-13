function sumMultiples(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

// Example usage
// console.log(sumMultiples(10)); // Output: 23
// console.log(sumMultiples(100)); // Output: 2318
console.log(sumMultiples(1000)); // Output: 233168
