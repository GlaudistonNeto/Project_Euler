function isPandigital(n) {
  const digits = String(n);
  if (digits.length !== 9) {
    return false;
  }
  const uniqueDigits = new Set(digits);
  return uniqueDigits.size === 9 && !uniqueDigits.has('0');
}

function findLargestPandigital() {
  let maxPandigital = 0;

  for (let i = 9; i < 98765; i++) {
    let concatenatedProduct = '';

    for (let n = 1; ; n++) {
      concatenatedProduct += (i * n);
      if (concatenatedProduct.length === 9) {
        const pandigitalNum = parseInt(concatenatedProduct);
        if (isPandigital(pandigitalNum)) {
          maxPandigital = Math.max(maxPandigital, pandigitalNum);
        }
        break;
      } else if (concatenatedProduct.length > 9) {
        break;
      }
    }
  }

  return maxPandigital;
}

const largestPandigital = findLargestPandigital();
console.log('Largest pandigital:', largestPandigital);
