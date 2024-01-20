#!/usr/bin/env node

import index from '../index.js';
import getRandom from '../random.js';

const gameRuls = 'Find the greatest common divisor of given numbers.';
const gcd = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }
  return gcd(secondNumber, firstNumber % secondNumber);
};

const check = () => {
  const firstCount = getRandom();
  const secondCount = getRandom();
  const question = `${firstCount} ${secondCount}`;
  const rightAnswer = String(gcd(firstCount, secondCount));
  return [question, rightAnswer];
};

const brainGcd = () => index(gameRuls, check);

export default brainGcd;
