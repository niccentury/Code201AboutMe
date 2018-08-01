'use strict';

console.log('js is woroking');

var alertWrongAnswer = 'Sorry that\'s incorrect';
var alertCorrect = 'Correct!!';
var usersName = prompt('Hello, Welcome. What\'s your name?');

if (usersName){
    quizQ();
} else {
    alert('Have a nice day!');
}

function quizQ(){
    alert('Hey ' + usersName + ' Lets take a quiz about me.');
    var questionB = prompt('Is my hair black?');
    if (questionB.toUpperCase() == 'YES' || questionB.toUpperCase() == 'Y'){
        alert(alertCorrect);
    } else{
        alert(alertWrongAnswer);
    }

//This is the 3rd Question
console.log('quizQ ran fine to this point')
var favoriteShow = prompt('Do you think I have a favorite tv show?');
if (favoriteShow.toUpperCase() == 'NO' || favoriteShow.toUpperCase() == 'N') {
    alert(alertCorrect);
} else {
    alert(alertWrongAnswer);
}
//4th Question
var homeTown = prompt('Am I from seattle?');
if (homeTown.toUpperCase() == 'NO' || homeTown.toUpperCase() == 'N') {
    alert(alertCorrect);
} else {
    alert(alertWrongAnswer);
}
//5th Question
var favoriteShow = prompt('Am I a couch potato?');
if (favoriteShow.toUpperCase() == 'YES' || favoriteShow.toUpperCase() == 'Y') {
    alert(alertCorrect);
} else {
    alert(alertWrongAnswer);
}

alert('That was fun, Have a nice day');
}