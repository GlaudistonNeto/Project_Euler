function getCollatzChainLength(n) {
    var count = 1;
    while (n !== 1) {
        if (n % 2 === 0) {
            // n is even
            n = n / 2;
        }
        else {
            // n is odd
            n = 3 * n + 1;
        }
        count++;
    }
    return count;
}
function findLongestChainUnderLimit(limit) {
    var maxLength = 0;
    var startingNumber = 0;
    for (var i = 1; i < limit; i++) {
        var chainLength = getCollatzChainLength(i);
        if (chainLength > maxLength) {
            maxLength = chainLength;
            startingNumber = i;
        }
    }
    return startingNumber;
}
var limit = 1000000;
var result = findLongestChainUnderLimit(limit);
console.log("The starting number under ".concat(limit, " that produces the longest chain is: ").concat(result));
// tsc 014.ts
