function sumMultiples(n) {
  const num3 = Math.floor((n - 1) / 3);
  const num5 = Math.floor((n - 1) / 5);
  const num15 = Math.floor((n - 1) / 15);
  return 3 * num3 * (num3 + 1) / 2 +
         5 * num5 * (num5 + 1) / 2 -
         15 * num15 * (num15 + 1) / 2;
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let t;
let n = [];

rl.on('line', (input) => {
  if (!t) {
    t = parseInt(input);
  } else {
    n.push(parseInt(input));
    if (n.length === t) {
      rl.close();
    }
  }
}).on('close', () => {
  for (let i = 0; i < t; i++) {
    console.log(sumMultiples(n[i]));
  }
  process.exit(0);
});


// it fucking fails in test 3 and 4