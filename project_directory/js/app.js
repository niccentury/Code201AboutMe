'use strict';

console.log('js is working');
var correctAnswer= 0;
var alertWrongAnswer = 'Sorry that\'s incorrect';
var alertCorrect = 'Correct!!';
var usersName = prompt('Hello, Welcome. What\'s your name?');

if (usersName) {
    alert('Hey ' + usersName + ' Lets take a quiz about me.');
    var questionB = prompt('Is my hair black?');
    if (questionB.toUpperCase() === 'YES' || questionB.toUpperCase() === 'Y') {
        alert(alertCorrect);
        correctAnswer++;
    } else {
        alert(alertWrongAnswer);
    }

    //This is the 3rd Question
    
    var favoriteShow = prompt('Do you think I have a favorite tv show?');
    if (favoriteShow.toUpperCase() === 'NO' || favoriteShow.toUpperCase() === 'N') {
        alert(alertCorrect);
        correctAnswer++;
    } else {
        alert(alertWrongAnswer);
    }
    //4th Question
    var homeTown = prompt('Am I from seattle?');
    if (homeTown.toUpperCase() === 'NO' || homeTown.toUpperCase() === 'N') {
        alert(alertCorrect);
        correctAnswer++;
    } else {
        alert(alertWrongAnswer);
    }
    //5th Question
    var favoriteShow = prompt('Am I a couch potato?');
    if (favoriteShow.toUpperCase() === 'YES' || favoriteShow.toUpperCase() === 'Y') {
        alert(alertCorrect);
        correctAnswer++;
    } else {
        alert(alertWrongAnswer);
    };
} else {
    alert('Have a nice day!');
}
    //question 6
    var shoeValue=20;
    var shoeValueGuess=0;
while(shoeValueGuess<4){
    var showQuestion=parseInt(prompt("How many pairs of shoes do I own"));
    if(showQuestion === shoeValue){
        alert("Correct!!");
        correctAnswer++;
        console.log('Question 6 Check');
        break;
    } else if (showQuestion > shoeValue) {
        alert('To high');
    } else {
        alert('To low');
        console.log('Qestion 6 Check');
    } 
    shoeValueGuess++;
}
//Question 7
 var myColors=['red', 'black', 'blue', 'pink']
 var colorGuess=0;
 while(colorGuess<7){
     var colorQuestion=prompt('What\'s my favorite color');
     if (myColors.includes(colorQuestion) === true) {
         alert('Got it!');
         correctAnswer++;
         
         break;
     }else {
             colorGuess++;
             console.log('Question 7 Check');
         }
     } alert('You Got ' + correctAnswer + ' Correct');
 
 // function quizQ(){
//     alert('Hey ' + usersName + ' Lets take a quiz about me.');
//     var questionB = prompt('Is my hair black?');
//     if (questionB.toUpperCase() === 'YES' || questionB.toUpperCase() === 'Y'){
//         alert(alertCorrect);
//     } else{
//         alert(alertWrongAnswer);
//     }

// //This is the 3rd Question
// console.log('quizQ ran fine to this point')
// var favoriteShow = prompt('Do you think I have a favorite tv show?');
// if (favoriteShow.toUpperCase() === 'NO' || favoriteShow.toUpperCase() === 'N') {
//     alert(alertCorrect);
// } else {
//     alert(alertWrongAnswer);
// }
// //4th Question
// var homeTown = prompt('Am I from seattle?');
// if (homeTown.toUpperCase() === 'NO' || homeTown.toUpperCase() === 'N') {
//     alert(alertCorrect);
// } else {
//     alert(alertWrongAnswer);
// }
// //5th Question
// var favoriteShow = prompt('Am I a couch potato?');
// if (favoriteShow.toUpperCase() === 'YES' || favoriteShow.toUpperCase() === 'Y') {
//     alert(alertCorrect);
// } else {
//     alert(alertWrongAnswer);
// }

//alert('That was fun, Have a nice day');

