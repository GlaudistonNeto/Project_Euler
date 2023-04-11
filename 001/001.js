function sumMultiples(n) {
  const p3 = Math.floor((n - 1) / 3); // number of multiples of 3
  const p5 = Math.floor((n - 1) / 5); // number of multiples of 5
  const p15 = Math.floor((n - 1) / 15); // number of multiples of 15
  const sum3 = ((p3 * (p3 + 1)) / 2) * 3; // sum of multiples of 3
  const sum5 = ((p5 * (p5 + 1)) / 2) * 5; // sum of multiples of 5
  const sum15 = ((p15 * (p15 + 1)) / 2) * 15; // sum of multiples of 15
  return sum3 + sum5 - sum15; // sum of all multiples of 3 or 5
}

// Read input from stdin
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let t = 0; // number of test cases
let count = 0; // counter for number of inputs read
let n = 0; // input for each test case

rl.on('line', (input) => {
  if (count === 0) {
    t = parseInt(input);
    count++;
  } else {
    n = parseInt(input);
    console.log(sumMultiples(n));
    count++;
    if (count > t) {
      rl.close();
    }
  }
});


// it fucking fails in test 5