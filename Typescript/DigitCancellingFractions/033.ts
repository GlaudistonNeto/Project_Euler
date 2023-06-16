function gcd(a: number, b: number): number {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

function solution(): number {
  let dp = 1;
  let np = 1;

  for (let c = 1; c <= 9; c++) {
    for (let d = 1; d < c; d++) {
      for (let n = 1; n < d; n++) {
        if ((n * 10 + c) * d === (c * 10 + d) * n) {
          np *= n;
          dp *= d;
        }
      }
    }
  }

  return dp / gcd(np, dp);
}

const denominator: number = solution();
console.log("Value of the denominator:", denominator);

// run tsc 033.ts to get the nodejs file
