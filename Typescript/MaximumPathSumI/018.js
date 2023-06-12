function findMaximumTotal(triangle) {
    var rows = triangle.length;
    // Create a 2D array to store the maximum totals
    var dp = [];
    for (var i = 0; i < rows; i++) {
        dp.push(new Array(i + 1));
    }
    // Copy the values of the last row of the triangle
    for (var i = 0; i < rows; i++) {
        dp[rows - 1][i] = triangle[rows - 1][i];
    }
    // Start from the second last row and calculate the maximum total for each position
    for (var i = rows - 2; i >= 0; i--) {
        for (var j = 0; j <= i; j++) {
            dp[i][j] = triangle[i][j] + Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
        }
    }
    // The maximum total will be stored at the top of the dp array
    return dp[0][0];
}
// Define the triangle
var triangle = [
    [75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20, 4, 82, 47, 65],
    [19, 1, 23, 75, 3, 34],
    [88, 2, 77, 73, 7, 63, 67],
    [99, 65, 4, 28, 6, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]
];
var maximumTotal = findMaximumTotal(triangle);
console.log("Maximum total from top to bottom: ".concat(maximumTotal));
// run tsc 018.ts to get the nodejs file
