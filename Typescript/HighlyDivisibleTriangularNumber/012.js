function getTriangleNumberWithDivisors(targetDivisors) {
    var triangleNumber = 0;
    var index = 1;
    while (true) {
        triangleNumber += index;
        index++;
        var divisors = getDivisorsCount(triangleNumber);
        if (divisors > targetDivisors) {
            return triangleNumber;
        }
    }
}
function getDivisorsCount(number) {
    var count = 0;
    var sqrt = Math.floor(Math.sqrt(number));
    for (var i = 1; i <= sqrt; i++) {
        if (number % i === 0) {
            count += 2;
        }
    }
    // If the number is a perfect square, subtract one divisor
    if (sqrt * sqrt === number) {
        count--;
    }
    return count;
}
var targetDivisors = 500;
var triangleNumber = getTriangleNumberWithDivisors(targetDivisors);
console.log("The first triangle number with over", targetDivisors, "divisors is:", triangleNumber);
// You should run tsc 012.ts then run 012.js
