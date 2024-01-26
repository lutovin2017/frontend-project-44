import index from '../index.js';
import getRandom from '../random.js';
import randomeRange from '../randomeRange.js';

const gameRuls = 'What number is missing in the progression?';

const check = () => {
  const arrLenght = randomeRange(5, 10);
  const firstCount = getRandom();
  const step = randomeRange(1, 10);
  const hiddenEl = randomeRange(0, arrLenght - 1);
  const arr = [firstCount];
  let i = 1;
  let result = firstCount;
  while (i < arrLenght) {
    result += step;
    arr.push(result);
    i += 1;
  }
  const findElem = arr[hiddenEl];
  const finalArr = arr;
  finalArr[hiddenEl] = '..';
  let question = '';
  for (let j = 0; j < finalArr.length; j += 1) {
    if (j === 0) {
      question = `${finalArr[j]}`;
    } else {
      question = `${question} ${finalArr[j]}`;
    }
  }
  const rightAnswer = String(findElem);
  return [question, rightAnswer];
};

const brainProgression = () => index(gameRuls, check);

export default brainProgression;
