import readlineSync from 'readline-sync';
import { greeting } from "./cli.js";

const ROUNDS = 3;

const game = (commonQuestion, getQuestion) => {
  console.log('Welcome to the Brain Games!');
  const name = greeting();
  console.log(commonQuestion);

  let countRightAnswers = 0;
  while (true) {
    const [ question, rightAnswer ] = getQuestion();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === rightAnswer) {
      countRightAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (countRightAnswers === ROUNDS) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  }
}

export { game };