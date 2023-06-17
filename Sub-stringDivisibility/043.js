function isSubStringDivisible(number) {
  const primes = [2, 3, 5, 7, 11, 13, 17];
  const numberString = number.toString();
  
  for (let i = 1; i <= 7; i++) {
    const substring = Number(numberString.substr(i, 3));
    
    if (substring % primes[i - 1] !== 0) {
      return false;
    }
  }
  
  return true;
}

function generatePandigitalNumbers() {
  const pandigitalNumbers = [];
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  function generateNumberHelper(currentNumber, remainingDigits) {
    if (remainingDigits.length === 0) {
      if (isSubStringDivisible(currentNumber)) {
        pandigitalNumbers.push(currentNumber);
      }
      return;
    }
    
    for (let i = 0; i < remainingDigits.length; i++) {
      const updatedNumber = currentNumber * 10 + remainingDigits[i];
      const updatedDigits = remainingDigits.filter((_, index) => index !== i);
      
      generateNumberHelper(updatedNumber, updatedDigits);
    }
  }
  
  generateNumberHelper(0, digits);
  
  return pandigitalNumbers;
}

function findSumOfPandigitalNumbers() {
  const pandigitalNumbers = generatePandigitalNumbers();
  const sum = pandigitalNumbers.reduce((total, num) => total + num, 0);
  
  return sum;
}

const sumOfPandigitalNumbers = findSumOfPandigitalNumbers();
console.log("The sum of all 0 to 9 pandigital numbers with the given property is:", sumOfPandigitalNumbers);
