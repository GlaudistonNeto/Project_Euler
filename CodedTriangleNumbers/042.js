const https = require('https');

// Function to check if a word is a triangular word
function isTriangular(word) {
  let sum = 0;
  for (let i = 0; i < word.length; i++) {
    sum += word.charCodeAt(i) - 64;
  }
  const n = (Math.sqrt(8 * sum + 1) - 1) / 2;
  return n === Math.floor(n);
}

// Read the contents of the words.txt file from the URL
https.get('https://projecteuler.net/project/resources/p042_words.txt', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const wordList = data.replace(/"/g, '');
    const words = wordList.split(',');
    let triangleWordCount = 0;
    for (let i = 0; i < words.length; i++) {
      const word = words[i].trim();
      if (isTriangular(word)) {
        triangleWordCount++;
      }
    }
    console.log('Number of triangle words:', triangleWordCount);
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
