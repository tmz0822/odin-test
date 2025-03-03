function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

const calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  divide(a, b) {
    return a / b;
  },

  multiply(a, b) {
    return a * b;
  },
};

function caesarCipher(string, shiftFactor) {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';

  const shiftedStr = string
    .split('')
    .map((str) => {
      const isUpperCase = str.charAt(0) === str.charAt(0).toUpperCase();
      const index = alphabets.indexOf(str.charAt(0).toLowerCase());

      if (index === -1) {
        // For non-alphabetical
        return str;
      }

      let shiftedCharIndex =
        index + shiftFactor > alphabets.length - 1
          ? index + shiftFactor - alphabets.length
          : index + shiftFactor;

      return isUpperCase
        ? alphabets.charAt(shiftedCharIndex).toUpperCase()
        : alphabets.charAt(shiftedCharIndex);
    })
    .join('');

  return shiftedStr;
}

function analyzeArray(array) {
  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;

  const sum = array.reduce((acc, currentValue) => {
    if (min > currentValue) {
      min = currentValue;
    }
    if (max < currentValue) {
      max = currentValue;
    }
    return acc + currentValue;
  }, 0);

  return {
    average: sum / array.length,
    min: min,
    max: max,
    length: array.length,
  };
}

const object = analyzeArray([1, 8, 3, 4, 2, 6]);
console.log(object);
export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
