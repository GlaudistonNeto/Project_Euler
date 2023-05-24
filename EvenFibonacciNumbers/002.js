
// const x = 1;
// const y = 2;
// sum = 0;

// function fibonacci() {
//   for (let y = 1; y <= 4000000; y++){
//     if (y != 2){
//       y++
//     }
//     sum = x + y;
//     console.log(sum);
//     // only counting even numbers
//   }

//   return sum;
// } // finish it

// fibonacci();

// // tudo
// // function sequence() {
// //   fibonacci() + y;
// // }

const sumEvenFibonacci = (limit) => {
  let sum = 0;
  let prev = 1;
  let current = 2;

  while (current <= limit) {
    if (current % 2 === 0) {
      sum += current;
    }

    const next = prev + current;
    prev = current;
    current = next;
  }

  return sum;
};

const limit = 4000000;
const sum = sumEvenFibonacci(limit);
console.log(sum);

