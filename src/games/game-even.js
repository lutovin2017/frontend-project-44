#!/usr/bin/env node

import index from '../index.js';
import getRandom from '../random.js';

const gameRuls = 'Answer "yes" if the number is even, otherwise answer "no".';
const check = () => {
  const question = getRandom();
  const rightAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, rightAnswer];
};

const brainEven = () => index(gameRuls, check);

export default brainEven;
