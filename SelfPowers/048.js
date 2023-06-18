function getLastTenDigitsSeries() {
  let sum = 0n; // Use BigInt to handle large numbers
  const modulo = 10n ** 10n; // 10^10

  for (let i = 1; i <= 1000; i++) {
    let term = BigInt(i) ** BigInt(i);
    sum = (sum + term) % modulo;
  }

  return sum.toString();
}

const lastTenDigits = getLastTenDigitsSeries();
console.log("The last ten digits of the series are:", lastTenDigits);
