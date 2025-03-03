import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from './index.js';

test('capitalize function capitals the first character of the string', () => {
  expect(capitalize('apple')).toBe('Apple');
  expect(capitalize('Orange')).toBe('Orange');
  expect(capitalize('lemoN')).toBe('LemoN');
});

test('reverseString reverses the string', () => {
  expect(reverseString('Apple')).toBe('elppA');
});

test('calculator adds two numbers correctly', () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test('calculator subtracts two numbers correctly', () => {
  expect(calculator.subtract(2, 2)).toBe(0);
});

test('calculator divide two numbers correctly', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('calculator multiply two numbers correctly', () => {
  expect(calculator.multiply(3, 3)).toBe(9);
});

test('caesarCipher shifts the plaintext correctly', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('caesarCipher ignores non-alphabetical characters', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('analyzeArray returns correct object', () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);

  expect(object).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
