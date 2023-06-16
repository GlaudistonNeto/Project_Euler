function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
function isCuriousNumber(num) {
    var digits = String(num).split('');
    var sum = digits.reduce(function (acc, digit) { return acc + factorial(Number(digit)); }, 0);
    return sum === num;
}
function findSumOfCuriousNumbers() {
    var sum = 0;
    for (var i = 3; i <= 99999; i++) {
        if (isCuriousNumber(i)) {
            sum += i;
        }
    }
    return sum;
}
var sumOfCuriousNumbers = findSumOfCuriousNumbers();
console.log("Sum of curious numbers:", sumOfCuriousNumbers);
