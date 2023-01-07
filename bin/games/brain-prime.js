#!/usr/bin/env node

import { game } from '../../src/index.js';

const isPrime = (number) => {
  for(let i = 2, s = Math.sqrt(number); i <= s; i++) {
    if(number % i === 0) return false;
  }
  return number > 1;
};

const getQuestion = () => {
  const getRandomInt = (min, max) => Math.floor(min + Math.random() * (max - min));

  const number = getRandomInt(2, 100);
  const question = `${number}`;
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, rightAnswer];
};

game('Answer "yes" if given number is prime. Otherwise answer "no".', getQuestion);
