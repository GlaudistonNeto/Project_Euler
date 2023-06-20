function hasSameDigits(n1, n2) {
  const digits1 = n1.toString().split('').sort();
  const digits2 = n2.toString().split('').sort();
  return digits1.join('') === digits2.join('');
}

function findSmallestInteger() {
  let x = 1;
  while (true) {
    if (
      hasSameDigits(x, 2 * x) &&
      hasSameDigits(x, 3 * x) &&
      hasSameDigits(x, 4 * x) &&
      hasSameDigits(x, 5 * x) &&
      hasSameDigits(x, 6 * x)
    ) {
      return x;
    }
    x++;
  }
}

const smallestInteger = findSmallestInteger();
console.log("The smallest positive integer is:", smallestInteger);
