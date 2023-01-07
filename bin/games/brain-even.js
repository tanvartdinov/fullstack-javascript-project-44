#!/usr/bin/env node

import { game } from "../../src/index.js";

const getQuestion = () => {
  const getRandomInt = (min, max) => {
    return Math.floor(min + Math.random() * (max - min));
  };
  const secretNumber = getRandomInt(1, 100);
  const rightAnswer = (secretNumber % 2 === 0) ? 'yes' : 'no';
  return [secretNumber, rightAnswer];
};

game('Answer "yes" if the number is even, otherwise answer "no".', getQuestion);
