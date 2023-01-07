#!/usr/bin/env node

import { game } from "../../src/index.js";

const getQuestion = () => {
  const getRandomInt = (min, max) => {
    return Math.floor(min + Math.random() * (max - min));
  };
  const operator = getRandomInt(1, 4);
  const firstOperand = getRandomInt(1, 100);
  const secondOperand = getRandomInt(1, 100);

  let rightAnswer = '';
  let question = '';
  switch (operator) {
    case 1:
      rightAnswer = `${firstOperand + secondOperand}`;
      question = `${firstOperand} + ${secondOperand}`;
      break;
    case 2:
      rightAnswer = `${firstOperand - secondOperand}`;
      question = `${firstOperand} - ${secondOperand}`;
      break;
    case 3:
      rightAnswer = `${firstOperand * secondOperand}`;
      question = `${firstOperand} * ${secondOperand}`;
      break;
  }
  return [question, rightAnswer];
};

game('What is the result of the expression?', getQuestion);
