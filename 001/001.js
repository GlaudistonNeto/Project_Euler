let num = 1000;

let sum = 0;

console.time('Method 1')
for (let i =0; i < num; i++) {
  if (i % 3 === 0 || i % 5 === 0)
    sum += i;
}

console.log(sum);
console.timeEnd('Method 1')

console.time('Method 2')

num--
const no3 = 3 * Math.floor(num/3) * (Math.floor(num/3) +1) / 2
const no5 = 5 * Math.floor(num/5) * (Math.floor(num/5) +1) / 2
const no15 = 15 * Math.floor(num/15) * (Math.floor(num/15) +1) / 2

console.log(no3 + no5- no15);
console.timeEnd('Method 2')