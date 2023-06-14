function findLongestRecurringCycle(): number {
  let maxLength = 0;
  let result = 0;

  for (let d = 2; d < 1000; d++) {
    let remainders = new Array(d).fill(0);
    let numerator = 1;
    let position = 0;

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

const longestRecurringCycle = findLongestRecurringCycle();
console.log(longestRecurringCycle);
