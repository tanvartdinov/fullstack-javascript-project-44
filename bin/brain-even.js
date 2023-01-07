#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greeting } from "../src/cli.js";

const getRandomInt = (min, max) => {
  return Math.floor(min + Math.random() * (max - min));
};

console.log('Welcome to the Brain Games!');
const name = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".')

let countRightAnswers = 0;
while (true) {
  const secretNumber = getRandomInt(1, 100);
  console.log(`Question: ${secretNumber}`);
  const answer = readlineSync.question('Your answer: ');
  const rightAnswer = (secretNumber % 2 === 0) ? 'yes' : 'no';
  if (answer === rightAnswer) {
    countRightAnswers += 1;
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
  if (countRightAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
    break;
  }
}