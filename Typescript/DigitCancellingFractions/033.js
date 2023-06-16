function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}
function solution() {
    var dp = 1;
    var np = 1;
    for (var c = 1; c <= 9; c++) {
        for (var d = 1; d < c; d++) {
            for (var n = 1; n < d; n++) {
                if ((n * 10 + c) * d === (c * 10 + d) * n) {
                    np *= n;
                    dp *= d;
                }
            }
        }
    }
    return dp / gcd(np, dp);
}
var denominator = solution();
console.log("Value of the denominator:", denominator);
