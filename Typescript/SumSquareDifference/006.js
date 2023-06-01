(function () {
    function calculateDifference(n) {
        var sumOfSquares = 0;
        var squareOfSum = 0;
        for (var i = 1; i <= n; i++) {
            sumOfSquares += i * i;
            squareOfSum += i;
        }
        squareOfSum *= squareOfSum;
        var difference = Math.abs(sumOfSquares - squareOfSum);
        return difference;
    }
    var difference = calculateDifference(100);
    console.log(difference);
})();
// You should run tsc 006.ts then run 006.js
