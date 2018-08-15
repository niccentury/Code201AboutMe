'use strict';

console.log('js is working');
var correctAnswer = 0;
var alertWrongAnswer = 'Sorry that\'s incorrect';
var alertCorrect = 'Correct!!';
var usersName = prompt('Hello, Welcome. What\'s your name?');
var answers = ['Y', 'N', 'N', 'Y'];

if (usersName) {
  alert('Hey ' + usersName + ' Lets take a quiz about me.');

  //Question
  var questionB = prompt('Is my hair black?');
  checkAnswer(questionB, 0);

  //This is the 3rd Question
  var favoriteShow = prompt('Do you think I have a favorite tv show?');
  checkAnswer(favoriteShow, 1);

  //4th Question
  var homeTown = prompt('Am I from seattle?');
  checkAnswer(homeTown, 2);

  //5th Question
  var couchPotato = prompt('Am I a couch potato?');
  checkAnswer(couchPotato, 3);

} else {
  alert('Have a nice day!');
}
//question 6
guessShoe();

//Question 7
var myColors = ['red', 'black', 'blue', 'pink'];
var colorGuess = 0;
while (colorGuess < 7) {
  var colorQuestion = prompt('What\'s my favorite color');
  if (myColors.includes(colorQuestion) === true) {
    alert('Got it!');
    correctAnswer++;

    break;
  } else {
    colorGuess++;
    console.log('Question 7 Check');
  }
} alert('You Got ' + correctAnswer + ' Correct');

//function to check answers Y or N
function checkAnswer(response, i) {
  if (response.toUpperCase() === 'YES' || response.toUpperCase() === 'Y') {
    response = 'Y';
    if (answers[i] === response) {
      alert(alertCorrect);
      correctAnswer++;
    } else {
      alert(alertWrongAnswer);
    }
  } else if (response.toUpperCase() === 'NO' || response.toUpperCase() === 'N') {
    response = 'N';
    if (answers[i] === response) {
      alert(alertCorrect);
      correctAnswer++;
    } else {
      console.log('wrong answer');
      alert(alertWrongAnswer);
    }
  }
}

//function to check Shoe Guess
function guessShoe() {
  var shoeValue = 20;
  var shoeValueGuess = 0;
  while (shoeValueGuess < 4) {
    var showQuestion = parseInt(prompt('How many pairs of shoes do I own'));
    if (showQuestion === shoeValue) {
      alert('Correct!!');
      correctAnswer++;
      console.log('Question 6 Check');
      return;
    } else if (showQuestion > shoeValue) {
      alert('To high');
    } else {
      alert('To low');
      console.log('Qestion 6 Check');
    }
    shoeValueGuess++;
  }
}