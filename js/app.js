'use strict';
let scoreAa=0;
let userName = '';
function welcomeMessage() {
  alert('welcome in About Me guessing game lets have some fun');
  let userName = prompt('whats your name?');
  alert('Welcome to my cozy corner ' + userName);
}
welcomeMessage();
function myReading(){
  let tamaraReading = prompt('Do I love reading books?', 'yes');
  tamaraReading = tamaraReading.toLowerCase();

  while (!(tamaraReading === 'y' || tamaraReading === 'yes'|| tamaraReading === 'n' || tamaraReading === 'no'))
  {
    alert('Please answer with yes/no');
    tamaraReading = prompt('Do I love reading books?', 'yes');
  }

  if (tamaraReading === 'y' || tamaraReading === 'yes')
  {

    alert('Yes, I am into reading books, excellent, you know something interesting about me');
    scoreAa=scoreAa+1;

  }
  else {

    alert('Wrong, WHY you dont know that I am into Books:(');
  }
}
myReading();

function myFavouriteColor () {
  let tamaraColor = prompt('Do I have favourite color?', 'yes');
  tamaraColor = tamaraColor.toLowerCase();
  console.log('users answer if I have favourite color? ' + tamaraColor);

  while (!(tamaraColor === 'y' || tamaraColor === 'yes'|| tamaraColor === 'n' || tamaraColor === 'no'))
  {
    alert('Please answer with yes/no');
    tamaraColor = prompt('Do I have favourite color?', 'yes');
  }

  if (tamaraColor === 'y' || tamaraColor === 'yes')
  {
    alert('Wrong! WHY do you think that I have? actually I dont have a particular color to like' );

  }
  else {

    alert('True,You have a good idea about me, I love most of colors :)');
    scoreAa= scoreAa+1;


  }
}
myFavouriteColor();

function myHand(){
  let tamaraHand = prompt('Do I a left-handed ?', 'yes');
  tamaraHand = tamaraHand.toLowerCase();

  while (!(tamaraHand === 'y' || tamaraHand === 'yes'|| tamaraHand === 'n' || tamaraHand === 'no'))
  {
    alert('Please answer with yes/no');
    tamaraHand = prompt('Do I a left-handed ?', 'yes');
  }

  if (tamaraHand === 'y' || tamaraHand === 'yes')
  {
    alert('Yup,I am left-handed :)' );
    scoreAa= scoreAa+1;
  }
  else {
    alert('Oops,WHY you dont know that Iam left-handed !');
  }
}
myHand();
function myEducation() {
  let tamaraEducation = prompt('Am I a civil engineer?', 'yes');
  tamaraEducation = tamaraEducation .toLowerCase();

  while (!(tamaraEducation === 'y' || tamaraEducation === 'yes'|| tamaraEducation === 'n' || tamaraEducation === 'no'))
  {
    alert('Please answer with yes/no');
    tamaraEducation = prompt('Am I a civil engineer?', 'yes');
  }

  if (tamaraEducation === 'y' || tamaraEducation === 'yes')
  {
    alert('Sorry, I am not! I am an electrical engineer!' );
  }
  else {
    alert('Well done:) ,I am an electrical engineer');
    scoreAa= scoreAa+1;
  }
}
myEducation();
function myExperience() {
  let tamaraExperience = prompt('Do I have work experience in my major?', 'yes');
  tamaraExperience = tamaraExperience .toLowerCase();

  while (!(tamaraExperience === 'y' || tamaraExperience === 'yes'|| tamaraExperience === 'n' || tamaraExperience === 'no'))
  {
    alert('Please answer with yes/no');
    tamaraExperience = prompt('Do I have work experience in my major?', 'yes');
  }

  if (tamaraExperience === 'y' || tamaraExperience === 'yes')
  {
    alert('Yes,'+userName+ ' I have 6 years experience.' );
    scoreAa= scoreAa+1;
  }
  else {
    alert('Sorry ' + userName+ ', but I have work experience.');
  }
}
myExperience();

function favouriteNumber(){
  let tamaraVal;
  for (let i = 0; i < 4; i++) {
    tamaraVal = prompt('Whats my favourite number?', '3');
    if (tamaraVal > 7) {
      alert('too high');
      console.log(tamaraVal);
    }
    else if (tamaraVal < 7) {
      alert('too low');
      console.log(tamaraVal);
    }
    else {
      alert('Correct!');
      scoreAa= scoreAa+1;
      break;
    }
  }
  alert('The correct Answer is 7');
}
favouriteNumber();
function namesOfGrandChildren(){
  let tamaraArr = ['zain', 'salma', 'omar'];
  for (let j = 0; j < 6; j++) {
    let grandChildren = prompt('Name one of my familys three grandchildren');
    grandChildren = grandChildren.toLowerCase();

    if (
      grandChildren === tamaraArr[0] ||
    grandChildren === tamaraArr[1]
    ) {
      alert('Yes, ' + grandChildren + ' is my neice');
      scoreAa= scoreAa+1;
      break;
    }
    else if
    (grandChildren === tamaraArr[2])

    {
      alert('Yes, ' + grandChildren + ' is my nephew');
      scoreAa= scoreAa+1;
      break;
    }
    else{
      alert('try again');
    }
  }
  alert('I have 2 neices: Zain and Salma,and I have a nephew Omar');
}
namesOfGrandChildren();

alert('Your score is '+ scoreAa+ '/ 7');

