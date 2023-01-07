#!/usr/bin/env node

import game from '../../src/index.js';

const getSequence = (first, step, length) => {
  const result = [];
  let i = 0;
  let item = first;
  while (i < length) {
    result.push(item);
    item += step;
    i += 1;
  }
  return result;
};

const createQuestion = (sequence, missedIndex) => {
  let result = '';
  for (let i = 0; i < sequence.length; i += 1) {
    if (i === missedIndex) {
      result = `${result} ..`;
    } else {
      result = `${result} ${sequence.at(i)}`;
    }
  }
  return result.trim();
};

const getQuestion = () => {
  const getRandomInt = (min, max) => Math.floor(min + Math.random() * (max - min));

  const first = getRandomInt(0, 20);
  const step = getRandomInt(1, 11);
  const length = getRandomInt(5, 11);
  const sequence = getSequence(first, step, length);
  const missedIndex = getRandomInt(0, length);

  const question = createQuestion(sequence, missedIndex);
  const rightAnswer = `${sequence.at(missedIndex)}`;
  return [question, rightAnswer];
};

game('What number is missing in the progression?', getQuestion);
