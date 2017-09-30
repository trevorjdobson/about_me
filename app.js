'use strict';

var userPoints = 0;

alert('My name is Trevor, welcome to my guessing game');
var user = prompt('What is your name?');
console.log('The user\'s name is ' + user);

var areSure = prompt('Hi ' + user + '! Are you sure you want to play my guessing game?  Don\'t worry its not that scary. Please type Yes or No.').toLowerCase();
console.log('When asked if they wanted to play my guessing game ' + user + ' said ' + areSure);

if(areSure === 'yes' || areSure === 'y'){
  alert('Awesome lets begin! Please only type Yes or No');
} else {
  alert('Too bad lets begin! Please only type Yes or No');
}
var answer1 = prompt('Do I have a dog?').toLowerCase();
console.log('When asked if Trevor had a dog ' + user + ' answered: ' + answer1);

if(answer1 === 'yes' || answer1 === 'y'){
  alert('Nice job, I have a yellow lab');
  userPoints++;
} else {
  alert('Wrong!  I do have a dog.  He is a yellow lab');
}
if(userPoints === 1){
  alert('You have ' + userPoints + ' point.');
} else{
  alert('You have ' + userPoints + ' points.');
}
var answer2 = prompt('Does my dog fetch me beer out of the fridge?').toLowerCase();
console.log('When asked if Trevor\'s dog fetches beer ' + user + ' answered: ' + answer2);

if(answer2 === 'no' || answer2 === 'n'){
  alert('Good job! That would be cool if he did!');
  userPoints++;
} else {
  alert('Unfortunately he does not.  That would be cool if he did!');
}
if(userPoints === 1){
  alert('You have ' + userPoints + ' point.');
} else{
  alert('You have ' + userPoints + ' points.');
}
var answer3 = prompt('Am I originally from Washington?').toLowerCase();
console.log('When asked if Trevor was from Washington, ' + user + ' answered: ' + answer3);

if(answer3 === 'no' || answer3 === 'n'){
  alert('Awesome, you get a point!  I\'m from Iowa');
  userPoints++;
} else {
  alert('Wronggggggg, no points for you! I\'m from Iowa');
}
if(userPoints === 1){
  alert('You have ' + userPoints + ' point.');
} else{
  alert('You have ' + userPoints + ' points.');
}
var answer4 = prompt('Have I ever jumped out of a plane?').toLowerCase();
console.log('When asked if Trevor jumped out of a plane, ' + user + 'answered: ' + answer4);

if(answer4 === 'yes' || answer4 === 'y'){
  alert('Good Job! 5 times to be exact.');
  userPoints++;
} else {
  alert('Wrong, I have, 5 times');
}
if(userPoints === 1){
  alert('You have ' + userPoints + ' point.');
} else{
  alert('You have ' + userPoints + ' points.');
}
var answer5 = prompt('Am I tired right now?').toLowerCase();
console.log('When asked if Trevor was tired, ' + user + 'answered: ' + answer5);

if(answer5 === 'yes' || answer5 === 'y'){
  alert('You are right, I am very tired, I need to quit my job');
  userPoints++;
} else {
  alert('Wrong, I am very tired, I need to quit my job');
}
if(userPoints >= 3){
  alert('You finished with ' + userPoints + ' points. Good Job');
} else {
  alert('You finished with ' + userPoints + ' points, this isn\'t golf, the more points the better.');
}
console.log(user + ' finished with ' + userPoints + ' points');

//Example
var correctNumber = 12;
var notDone = true;

var gues;
for (var guesses = 3; guesses > 0 && notDone; guesses--) {

}
//test
