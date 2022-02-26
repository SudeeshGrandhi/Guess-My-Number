'use strict';
//#Project 1 -- Guess My number
/*console.log(document.querySelector('.message').textContent);

//Whats the DOM and DOM Manipulation
/*It is structured representation of HTML Documents(Document tree). DOM allows JavaScript to access HTML elements and styles to manipulate them.
E.g:- It is used to change text,HTML attributes and even style CSS
schema—> document.queryselector(‘.class/#ID’) which will select element in HTML.

DOM!== Javascript(DOM is not a Javascript)

DOM methods and properties are part of Web Apis (Application programming Interface) 
Web APis Can interact With Javascript
*/

//Selecting and Manipulating Elements

/*document.querySelector('.message').textContent= '🎉 Correct Number!'
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=10;

document.querySelector('.guess').value=23
console.log(document.querySelector('.guess').value);//For input instead of text content we used Value*/

//Handling Click Events && Implementing Game logic
/*
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (message) {
  document.querySelector('.number').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess); //Type of guess is a string , shud change it to number

  if (!guess) {
    displayMessage('⛔️ No Number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 🎉Its correct...');
    displayNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High 🚇!!!' : 'Too Low 🛺!!!');

      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game ☹️');
      document.querySelector('.score').textContent = 0;
    }
  }
  /*else if(guess>secretNumber){
        if(score>1){
        document.querySelector('.message').textContent = 'Too High!!!';
        score=score-1//score--
        document.querySelector('.score').textContent=score
        }else{
            document.querySelector('.message').textContent='You lost the game ☹️'
            document.querySelector('.score').textContent=0
        }
        
    }else if(guess<secretNumber){
        if(score>1){
        document.querySelector('.message').textContent = 'Too Low!!!';
        score--;
        document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.message').textContent='You lost the game ☹️'
            document.querySelector('.score').textContent=0
        }

    }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('body').style.backgroundColor = '#222';
  displayNumber('?');
  displayMessage('Start guessing');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});

//Refactoring the code: The Dry principle
//To eliminate the duplicate code
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let secretNumber1;

console.log(secretNumber);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //For input it should be value to select the oytput like textcontent for others
  //Always remember queryselector  value will be a string

  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!!';
    //0 is also considered as no number
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high!' : '🛺 Too Low!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '🎇 You lost the game!';
    }
  }

  /*else if(guess>secretNumber){
    document.querySelector('.message').textContent='📈 Too high!';
    if(score>1){
      score=score-1;
      document.querySelector('.score').textContent=score;
    }else{
      document.querySelector('.score').textContent=0;
      document.querySelector('.message').textContent='🎇 You lost the game!';

    }  

  }else if(guess<secretNumber){
    document.querySelector('.message').textContent='🛺 Too Low!';
    if(score>1){
      score=score-1;
      document.querySelector('.score').textContent=score;
    }else{
      document.querySelector('.score').textContent=0;
      document.querySelector('.message').textContent='🎇 You lost the game!';

    }  
  }
  */
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
