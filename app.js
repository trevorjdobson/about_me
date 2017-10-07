'use strict';

var userPoints = 0;

alert('My name is Trevor, welcome to my guessing game');
var user = prompt('What is your name?');
console.log('The user\'s name is ' + user);

function question1(){
  var areSure = prompt('Hi ' + user + '! Are you sure you want to play my guessing game?  Don\'t worry its not that scary. Please type Yes or No.').toLowerCase();
  console.log('When asked if they wanted to play my guessing game ' + user + ' said ' + areSure);

  if(areSure === 'yes' || areSure === 'y'){
    alert('Awesome lets begin! Please only type Yes or No');
  } else {
    alert('Too bad lets begin! Please only type Yes or No');
  }
};
question1();

function question2 (){
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
};
question2();

function question3(){
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
};
question3();

function question4(){
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
};
question4();

function question5(){
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
};
question5();

function question6(){
  var answer5 = prompt('Am I tired right now?').toLowerCase();
  console.log('When asked if Trevor was tired, ' + user + 'answered: ' + answer5);

  if(answer5 === 'yes' || answer5 === 'y'){
    alert('You are right, I am very tired, I need to quit my job');
    userPoints++;
  } else {
    alert('Wrong, I am very tired, I need to quit my job');
  }
};
question6();

function question7(){
  var carsOwned = 4;
  var answer6 = prompt('How many cars have I owned?').toLowerCase();
  var answer6Correct = false;
  while (answer6Correct == false) {
    if (answer6 === '4') {
      alert('Good Job');
      answer6Correct = true;
      userPoints++;
    }
    if (answer6 > 4) {
      answer6 = prompt('Too many guess again');
    }
    if (answer6 < 4) {
      answer6 = prompt('Not enough, guess again');
    }
  }
};
question7();

function question8(){
  var favDestinations = ['hawaii', 'las vegas', 'colorado', 'alaska'];
  var attempts = 6;
  var flag = false;

  var answer7 = prompt('What is one of my favorite places to travel to?  City or State').toLowerCase();

  while (!flag && attempts > 0) {
    for (var i = 0; i < favDestinations.length; i++) {
      if (answer7 === favDestinations[i]) {
        flag = true;
      }
    }
    if(flag === true) {
      alert('Good guess');
    } else {
      answer = prompt('try again');
      attempts--;
    }
  }
};
question8();

if(userPoints >= 3){
  alert('You finished with ' + userPoints + ' points out of 7. Good Job');
} else {
  alert('You finished with ' + userPoints + ' points out of 7, this isn\'t golf, the more points the better.');
}
console.log(user + ' finished with ' + userPoints + ' points');
