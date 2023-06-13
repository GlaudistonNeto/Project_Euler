function fibonacciIndex(digits) {
    var prev = BigInt(1);
    var curr = BigInt(1);
    var index = 2;
    while (curr.toString().length < digits) {
        var next = prev + curr;
        prev = curr;
        curr = next;
        index++;
    }
    return index;
}
// Example usage
var digits = 1000;
var index = fibonacciIndex(digits);
console.log("The index of the first Fibonacci term with ".concat(digits, " digits is: ").concat(index));
// run tsc 025.ts to get .js file
