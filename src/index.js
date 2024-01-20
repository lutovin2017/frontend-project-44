#!/usr/bin/env node

import readlineSync from 'readline-sync';

const round = 3;

const index = (gameRuls, check) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRuls);
  const comment = 'Correct!';
  let i = 1;
  while (i <= round) {
    const [question, rightAnswer] = check();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log(comment);
      i += 1;
    } else {
      return console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`,
      );
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default index;
