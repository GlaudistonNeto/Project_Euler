function findPythagoreanTriplet(targetSum) {
    for (var a = 1; a < targetSum / 3; a++) {
        for (var b = a + 1; b < targetSum / 2; b++) {
            var c = targetSum - a - b;
            if (a * a + b * b === c * c) {
                return a * b * c;
            }
        }
    }
    return -1; // If no Pythagorean triplet is found
}
var targetSum = 1000;
var product = findPythagoreanTriplet(targetSum);
if (product !== -1) {
    console.log("The product of the Pythagorean triplet with a sum of ".concat(targetSum, " is ").concat(product, "."));
}
else {
    console.log("No Pythagorean triplet found with a sum of ".concat(targetSum, "."));
}
// You should run cd then run 009.js
