function numberToWords(n: number): string {
  const unitsMap: Record<number, string> = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
  };

  const tensMap: Record<number, string> = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety'
  };

  if (n === 1000) {
    return 'one thousand';
  }

  let words = '';

  if (n >= 100) {
    words += unitsMap[Math.floor(n / 100)] + ' hundred';

    if (n % 100 !== 0) {
      words += ' and ';
    }
  }

  const remainder = n % 100;

  if (remainder > 0 && remainder < 20) {
    words += unitsMap[remainder];
  } else if (remainder >= 20) {
    words += tensMap[Math.floor(remainder / 10)];

    if (remainder % 10 !== 0) {
      words += '-' + unitsMap[remainder % 10];
    }
  }

  return words;
}

function countLettersUsed(): number {
  let count = 0;

  for (let i = 1; i <= 1000; i++) {
    const words = numberToWords(i);
    const letters = words.replace(/[-\s]/g, ''); // Remove spaces and hyphens
    count += letters.length;
  }

  return count;
}

const totalLettersUsed = countLettersUsed();
console.log(`Total letters used: ${totalLettersUsed}`);

// run tsc 017.ts to get the nodejs file
