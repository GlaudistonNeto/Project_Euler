function countDistinctTerms() {
    const distinctTerms = new Set();
  
    for (let a = 2; a <= 100; a++) {
      for (let b = 2; b <= 100; b++) {
        const term = BigInt(a) ** BigInt(b);
        distinctTerms.add(term);
      }
    }
  
    return distinctTerms.size;
  }
  
  // Example usage:
  const result = countDistinctTerms();
  console.log(result);
  