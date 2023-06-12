function calculateRoutes(gridSize) {
    // Calculate the central binomial coefficient
    var n = BigInt(gridSize);
    var k = BigInt(gridSize);
    var coefficient = BigInt(1);
    for (var i = BigInt(0); i < k; i++) {
        coefficient = (coefficient * (n + i + BigInt(1))) / (i + BigInt(1));
    }
    return coefficient;
}
var gridSize = 20;
var routes = calculateRoutes(gridSize);
console.log("Number of routes in a ".concat(gridSize, "x").concat(gridSize, " grid: ").concat(routes));
// run tsc 015.ts to get the node file
