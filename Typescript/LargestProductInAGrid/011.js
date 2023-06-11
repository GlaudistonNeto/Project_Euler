function findGreatestProduct(grid, size) {
    var rows = grid.length;
    var cols = grid[0].length;
    var maxProduct = 0;
    // Check horizontally and vertically
    for (var row = 0; row < rows; row++) {
        for (var col = 0; col < cols - size + 1; col++) {
            // Calculate product horizontally
            var productHorizontal = 1;
            for (var i = 0; i < size; i++) {
                productHorizontal *= grid[row][col + i];
            }
            maxProduct = Math.max(maxProduct, productHorizontal);
            // Calculate product vertically
            var productVertical = 1;
            for (var i = 0; i < size; i++) {
                productVertical *= grid[row + i][col];
            }
            maxProduct = Math.max(maxProduct, productVertical);
        }
    }
    // Check diagonally (top-left to bottom-right)
    for (var row = 0; row < rows - size + 1; row++) {
        for (var col = 0; col < cols - size + 1; col++) {
            var productDiagonal = 1;
            for (var i = 0; i < size; i++) {
                productDiagonal *= grid[row + i][col + i];
            }
            maxProduct = Math.max(maxProduct, productDiagonal);
        }
    }
    // Check diagonally (bottom-left to top-right)
    for (var row = size - 1; row < rows; row++) {
        for (var col = 0; col < cols - size + 1; col++) {
            var productDiagonal = 1;
            for (var i = 0; i < size; i++) {
                productDiagonal *= grid[row - i][col + i];
            }
            maxProduct = Math.max(maxProduct, productDiagonal);
        }
    }
    return maxProduct;
}
// Grid data (without leading zeros)
var gridData = [
    [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
    [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
    // Rest of the grid data...
];
var gridSize = 20;
var adjacentSize = 4;
var greatestProduct = findGreatestProduct(gridData, adjacentSize);
console.log("The greatest product of four adjacent numbers in the grid is:", greatestProduct);
