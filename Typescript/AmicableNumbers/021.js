function properDivisorsSum(n) {
    // Calculate the sum of proper divisors of n
    var divisorsSum = 0;
    for (var i = 1; i < n; i++) {
        if (n % i === 0) {
            divisorsSum += i;
        }
    }
    return divisorsSum;
}
function sumAmicableNumbers(limit) {
    var amicableSum = 0;
    for (var a = 1; a < limit; a++) {
        var b = properDivisorsSum(a);
        if (a !== b && properDivisorsSum(b) === a) {
            amicableSum += a;
        }
    }
    return amicableSum;
}
var limit = 10000;
var result = sumAmicableNumbers(limit);
console.log(result);
