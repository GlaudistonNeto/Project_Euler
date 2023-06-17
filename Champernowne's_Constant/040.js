function findFractionalDigit(n) {
  let fractionalPart = "";
  let i = 1;

  while (fractionalPart.length < n) {
    fractionalPart += i.toString();
    i++;
  }

  return parseInt(fractionalPart.charAt(n - 1));
}

const result = findFractionalDigit(1) * findFractionalDigit(10) * findFractionalDigit(100) *
  findFractionalDigit(1000) * findFractionalDigit(10000) * findFractionalDigit(100000) *
  findFractionalDigit(1000000);

console.log(result);
