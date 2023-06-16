function isPandigital(n) {
    const digits = String(n).split('').sort();
    const expectedDigits = Array.from({ length: digits.length }, (_, i) => String(i + 1));
    return digits.join('') === expectedDigits.join('');
  }
  
  function findPandigitalProductsSum() {
    const pandigitalProducts = new Set();
  
    for (let multiplicand = 1; multiplicand < 10000; multiplicand++) {
      for (let multiplier = 1; multiplier < 10000; multiplier++) {
        const product = multiplicand * multiplier;
        const concatenated = String(multiplicand) + String(multiplier) + String(product);
  
        if (concatenated.length === 9 && isPandigital(concatenated)) {
          pandigitalProducts.add(product);
        }
      }
    }
  
    let sum = 0;
    for (const product of pandigitalProducts) {
      sum += product;
    }
  
    return sum;
  }
  
  const sumOfPandigitalProducts = findPandigitalProductsSum();
  console.log("Sum of all products: ", sumOfPandigitalProducts);
  