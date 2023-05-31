function findSmallestDivisibleNumber(start, end) {
    var result = start;
    for (var i = start + 1; i <= end; i++) {
        result = lcm(result, i);
    }
    return result;
}
function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}
var smallestDivisible = findSmallestDivisibleNumber(1, 20);
console.log(smallestDivisible); // Output: 232792560

// You should run tsc 005.ts then run 005.js
