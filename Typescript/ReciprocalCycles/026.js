function findLongestRecurringCycle() {
    var maxLength = 0;
    var result = 0;
    for (var d = 2; d < 1000; d++) {
        var remainders = new Array(d).fill(0);
        var numerator = 1;
        var position = 0;
        while (remainders[numerator] === 0 && numerator !== 0) {
            remainders[numerator] = position;
            numerator = (numerator * 10) % d;
            position++;
        }
        if (position - remainders[numerator] > maxLength) {
            maxLength = position - remainders[numerator];
            result = d;
        }
    }
    return result;
}
var longestRecurringCycle = findLongestRecurringCycle();
console.log(longestRecurringCycle);
