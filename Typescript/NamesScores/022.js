const fs = require('fs');

// Read the names from the file
const names = fs.readFileSync('names.txt', 'utf-8')
  .replace(/"/g, '') // Remove double quotes
  .split(',');

// Sort the names in alphabetical order
const sortedNames = names.sort();

// Function to calculate the alphabetical value of a name
function calculateAlphabeticalValue(name) {
  let value = 0;
  for (let i = 0; i < name.length; i++) {
    value += name.charCodeAt(i) - 64; // A=1, B=2, ..., Z=26
  }
  return value;
}

// Calculate the name scores
let totalScore = 0;
for (let i = 0; i < sortedNames.length; i++) {
  const name = sortedNames[i];
  const score = calculateAlphabeticalValue(name) * (i + 1);
  totalScore += score;
}

console.log('Total name score:', totalScore);
