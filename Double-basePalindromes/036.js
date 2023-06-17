function isPalindrome(str) {
  const length = str.length;
  const middle = Math.floor(length / 2);

  for (let i = 0; i < middle; i++) {
    if (str[i] !== str[length - 1 - i]) {
      return false;
    }
  }

  return true;
}

function findPalindromicSum() {
  let sum = 0;

  for (let n = 1; n < 1000000; n++) {
    const decimalPalindrome = isPalindrome(String(n));
    const binaryPalindrome = isPalindrome(n.toString(2));

    if (decimalPalindrome && binaryPalindrome) {
      sum += n;
    }
  }

  return sum;
}

const palindromicSum = findPalindromicSum();
console.log('Sum of palindromic numbers in base 10 and base 2 below one million:', palindromicSum);
