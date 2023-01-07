#!/usr/bin/env node

import { game } from '../../src/index.js';

const calcGCD = (a, b) => {
  if (!b) {
    return a;
  }
  return calcGCD(b, a % b);
};

const getQuestion = () => {
  const getRandomInt = (min, max) => Math.floor(min + Math.random() * (max - min));

  const a = getRandomInt(10, 101);
  const b = getRandomInt(10, 101);
  const question = `${a} ${b}`;
  const rightAnswer = `${calcGCD(a, b)}`;
  return [question, rightAnswer];
};

game('Find the greatest common divisor of given numbers.', getQuestion);
