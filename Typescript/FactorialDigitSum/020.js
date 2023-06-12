function factorialSumDigits(n) {
    var factorial = BigInt(1);
    for (var i = 2; i <= n; i++) {
        factorial *= BigInt(i);
    }
    var digitSum = factorial.toString().split('').reduce(function (sum, digit) { return sum + parseInt(digit, 10); }, 0);
    return digitSum;
}
var n = 100;
var sumOfDigits = factorialSumDigits(n);
console.log("Sum of the digits in the number ".concat(n, "!: ").concat(sumOfDigits));
// run tsc 0.20.ts to get the nodejs file
