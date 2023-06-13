function getDivisorsSum(num) {
    var sum = 0;
    for (var i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== 1 && i !== num / i) {
                sum += num / i;
            }
        }
    }
    return sum;
}
function isAbundantNumber(num) {
    return getDivisorsSum(num) > num;
}
function getAbundantNumbers(limit) {
    var abundantNumbers = [];
    for (var i = 1; i <= limit; i++) {
        if (isAbundantNumber(i)) {
            abundantNumbers.push(i);
        }
    }
    return abundantNumbers;
}
function getNonAbundantSum(limit) {
    var abundantNumbers = getAbundantNumbers(limit);
    var isSumOfAbundant = Array(limit + 1).fill(false);
    for (var i = 0; i < abundantNumbers.length; i++) {
        for (var j = i; j < abundantNumbers.length; j++) {
            var sum_1 = abundantNumbers[i] + abundantNumbers[j];
            if (sum_1 <= limit) {
                isSumOfAbundant[sum_1] = true;
            }
            else {
                break;
            }
        }
    }
    var sum = 0;
    for (var i = 1; i <= limit; i++) {
        if (!isSumOfAbundant[i]) {
            sum += i;
        }
    }
    return sum;
}
// Example usage
var limit = 28123;
var sum = getNonAbundantSum(limit);
console.log("The sum of all positive integers that cannot be written as the sum of two abundant numbers is: ".concat(sum));
// run tsc 023.ts to get the .js file
