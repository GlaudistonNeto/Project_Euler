function sumPrimesBelow(limit) {
    var sieve = new Array(limit).fill(true);
    sieve[0] = false; // 0 is not prime
    sieve[1] = false; // 1 is not prime
    // Use Sieve of Eratosthenes to generate prime numbers
    for (var i = 2; i <= Math.sqrt(limit); i++) {
        if (sieve[i]) {
            for (var j = i * i; j < limit; j += i) {
                sieve[j] = false;
            }
        }
    }
    // Calculate the sum of primes
    var sum = 0;
    for (var i = 2; i < limit; i++) {
        if (sieve[i]) {
            sum += i;
        }
    }
    return sum;
}
var limit = 2000000;
var sum = sumPrimesBelow(limit);
console.log("The sum of all prime numbers below ".concat(limit, " is ").concat(sum, "."));
