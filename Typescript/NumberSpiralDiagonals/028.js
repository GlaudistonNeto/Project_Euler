function sumDiagonalNumbers(spiralSize) {
    var sum = 1; // Initialize sum with center value (1x1 spiral)
    var currentNum = 1;
    var stepSize = 2;
    for (var i = 1; i <= spiralSize / 2; i++) {
        for (var j = 0; j < 4; j++) {
            currentNum += stepSize;
            sum += currentNum;
        }
        stepSize += 2;
    }
    return sum;
}
var spiralSize = 1001;
var sum = sumDiagonalNumbers(spiralSize);
console.log("The sum of the numbers on the diagonals in a ".concat(spiralSize, "x").concat(spiralSize, " spiral is: ").concat(sum));
