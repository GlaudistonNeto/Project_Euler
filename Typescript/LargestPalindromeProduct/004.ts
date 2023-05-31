function isPalindrome(num: number): boolean {
  const numStr = num.toString();
  const reversedStr = numStr.split('').reverse().join('');
  return numStr === reversedStr;
}

function findLargestPalindrome(): number {
  let largestPalindrome = 0;
  for (let i = 999; i >= 100; i--) {
    for (let j = i; j >= 100; j--) {
      const product = i * j;
      if (product <= largestPalindrome) {
        // No need to continue if the product is smaller or equal to the largest palindrome found so far
        break;
      }
      if (isPalindrome(product) && product > largestPalindrome) {
        largestPalindrome = product;
      }
    }
  }
  return largestPalindrome;
}

const largestPalindrome = findLargestPalindrome();
console.log(`The largest palindrome made from the product of two 3-digit numbers is ${largestPalindrome}.`);

// You should run tsc 004.ts then run 004.js
