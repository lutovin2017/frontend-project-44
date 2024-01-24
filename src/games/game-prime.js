#!/usr/bin/env node

import index from '../index.js';
import getRandom from '../random.js';

const gameRuls =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = (count) => {
  if (count < 2) {
    return false;
  }
  for (let i = 2; i ** 2 <= count; i += 1) {
    if (count % i === 0) {
      return false;
    }
  }
  return true;
};

const check = () => {
  const question = getRandom();
  const rightAnswer = prime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const brainPrime = () => index(gameRuls, check);

export default brainPrime;
