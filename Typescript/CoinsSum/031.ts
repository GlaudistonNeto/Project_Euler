function countCoinCombinations(target: number, coins: number[]): number {
  const combinations = new Array(target + 1).fill(0);
  combinations[0] = 1;

  for (const coin of coins) {
    for (let i = coin; i <= target; i++) {
      combinations[i] += combinations[i - coin];
    }
  }

  return combinations[target];
}

// Example usage:
const coins = [1, 2, 5, 10, 20, 50, 100, 200];
const target = 200;
const result = countCoinCombinations(target, coins);
console.log(result);
