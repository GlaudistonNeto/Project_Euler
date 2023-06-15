function getDigitPowersSum(power) {
    var sum = 0;
    // Iterate through all numbers starting from 2
    for (var i = 2; i <= 999999; i++) {
        var digits = String(i).split('').map(Number);
        var digitPowersSum = digits.reduce(function (acc, digit) { return acc + Math.pow(digit, power); }, 0);
        if (i === digitPowersSum) {
            sum += i;
        }
    }
    return sum;
}
// Example usage:
var power = 5;
var result = getDigitPowersSum(power);
console.log(result);
