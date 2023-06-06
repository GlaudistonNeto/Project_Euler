function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
function findNthPrime(n) {
    var count = 0;
    var number = 2;
    while (count < n) {
        if (isPrime(number)) {
            count++;
        }
        number++;
    }
    return number - 1;
}
var n = 10001;
var nthPrime = findNthPrime(n);
console.log("The ".concat(n, "th prime number is ").concat(nthPrime, "."));
// You should run tsc 007.ts then run 007.js
