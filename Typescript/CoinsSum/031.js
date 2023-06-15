function countCoinCombinations(target, coins) {
    var combinations = new Array(target + 1).fill(0);
    combinations[0] = 1;
    for (var _i = 0, coins_1 = coins; _i < coins_1.length; _i++) {
        var coin = coins_1[_i];
        for (var i = coin; i <= target; i++) {
            combinations[i] += combinations[i - coin];
        }
    }
    return combinations[target];
}
// Example usage:
var coins = [1, 2, 5, 10, 20, 50, 100, 200];
var target = 200;
var result = countCoinCombinations(target, coins);
console.log(result);
