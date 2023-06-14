function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function findQuadraticCoefficientsProduct() {
    var maxPrimes = 0;
    var product = 0;
    for (var a = -999; a < 1000; a++) {
        for (var b = -1000; b <= 1000; b++) {
            var n = 0;
            var quadratic = n * n + a * n + b;
            var primesCount = 0;
            while (isPrime(Math.abs(quadratic))) {
                primesCount++;
                n++;
                quadratic = n * n + a * n + b;
            }
            if (primesCount > maxPrimes) {
                maxPrimes = primesCount;
                product = a * b;
            }
        }
    }
    return product;
}
var coefficientsProduct = findQuadraticCoefficientsProduct();
console.log(coefficientsProduct);
