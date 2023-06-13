var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function getLexicographicPermutation(digits, position) {
    var factorial = function (n) {
        if (n <= 1) {
            return 1;
        }
        return n * factorial(n - 1);
    };
    var remainingDigits = __spreadArray([], digits, true);
    var permutation = '';
    position--; // Adjust position to 0-based index
    while (remainingDigits.length > 0) {
        var n = remainingDigits.length;
        var index = Math.floor(position / factorial(n - 1));
        var digit = remainingDigits[index];
        permutation += digit;
        remainingDigits.splice(index, 1);
        position %= factorial(n - 1);
    }
    return permutation;
}
// Example usage
var digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var position = 1000000;
var permutation = getLexicographicPermutation(digits, position);
console.log("The ".concat(position, "th lexicographic permutation is: ").concat(permutation));
