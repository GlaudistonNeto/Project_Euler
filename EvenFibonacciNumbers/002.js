
const x = 1;
const y = 2;
sum = 0;

function fibonacci() {
  for (let y = 1; y <= 4000000; y++){
    if (y != 2){
      y++
    }
    sum = x + y;
    console.log(sum);
    // only counting even numbers
  }

  return sum;
} // finish it

fibonacci();

// tudo
// function sequence() {
//   fibonacci() + y;
// }
