#!/usr/bin/env node

import index from '../index.js';
import getRandom from '../random.js';

const gameRuls = 'What is the result of the expression?';
const arrSign = ['+', '-', '*'];
const expressions = (firstRound, secondRound, operator) => {
  let answer = 0;
  if (operator === '+') {
    answer = firstRound + secondRound;
  }
  if (operator === '-') {
    answer = firstRound - secondRound;
  }
  if (operator === '*') {
    answer = firstRound * secondRound;
  }
  return answer;
};
const check = () => {
  const firstCount = getRandom();
  const secondCount = getRandom();
  const operator = arrSign[Math.floor(Math.random() * arrSign.length)];
  const question = `${firstCount} ${operator} ${secondCount}`;
  const rightAnswer = String(expressions(firstCount, secondCount, operator));
  return [question, rightAnswer];
};

const brainCalc = () => index(gameRuls, check);

export default brainCalc;
