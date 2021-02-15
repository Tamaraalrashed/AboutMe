'use strict';
alert('welcome in About Me guessing game lets have some fun');
let userName = prompt('whats your name?');
alert('Welcome to my cozy corner ' + userName);

let tamaraReading = prompt('Do I love reading books?', 'yes');
tamaraReading = tamaraReading.toLowerCase();
console.log('users answer if I love reading books ' + tamaraReading);

while (!(tamaraReading === 'y' || tamaraReading === 'yes'|| tamaraReading === 'n' || tamaraReading === 'no'))
{
  alert('Please answer with yes/no');
  tamaraReading = prompt('Do I love reading books?', 'yes');
}

if (tamaraReading === 'y' || tamaraReading === 'yes')
{
  //console.log('Yes, I am into reading books, excellent, you know something interesting about me');
  alert('Yes, I am into reading books, excellent, you know something interesting about me');

}
else {
  //console.log('Wrong, WHY you dont know that I am into Books:(');
  alert('Wrong, WHY you dont know that I am into Books:(');
}

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
  //console.log('Wrong! WHY do you think that I have? actually I dont have a particular color to like');
  alert('Wrong! WHY do you think that I have? actually I dont have a particular color to like' );

}
else {
  //console.log('True,You have a good idea about me, I love most of colors :)');
  alert('True,You have a good idea about me, I love most of colors :)');
}

let tamaraHand = prompt('Do I a left-handed ?', 'yes');
tamaraHand = tamaraHand.toLowerCase();
console.log('users answer if I am left-handed ? ' + tamaraHand);
while (!(tamaraHand === 'y' || tamaraHand === 'yes'|| tamaraHand === 'n' || tamaraHand === 'no'))
{
  alert('Please answer with yes/no');
  tamaraHand = prompt('Do I a left-handed ?', 'yes');
}

if (tamaraHand === 'y' || tamaraHand === 'yes')
{
  //console.log('Yup,I am left-handed :)' );
  alert('Yup,I am left-handed :)' );
}
else {
  //console.log('Oops,WHY you dont know that Iam left-handed !');
  alert('Oops,WHY you dont know that Iam left-handed !');
}

let tamaraEducation = prompt('Am I a civil engineer?', 'yes');
tamaraEducation = tamaraEducation .toLowerCase();
console.log('users answer if I am civil engineer? ' + tamaraEducation);

while (!(tamaraEducation === 'y' || tamaraEducation === 'yes'|| tamaraEducation === 'n' || tamaraEducation === 'no'))
{
  alert('Please answer with yes/no');
  tamaraEducation = prompt('Am I a civil engineer?', 'yes');
}

if (tamaraEducation === 'y' || tamaraEducation === 'yes')
{
  //console.log('Sorry, I am not! I am an electrical engineer!' );
  alert('Sorry, I am not! I am an electrical engineer!' );
}
else {
  //console.log('Well done:) ,I am an electrical engineer');
  alert('Well done:) ,I am an electrical engineer');
}

let tamaraExperience = prompt('Do I have work experience in my major?', 'yes');
tamaraExperience = tamaraExperience .toLowerCase();
console.log('users answer if I have work experience in my major? ' + tamaraExperience);

while (!(tamaraExperience === 'y' || tamaraExperience === 'yes'|| tamaraExperience === 'n' || tamaraExperience === 'no'))
{
  alert('Please answer with yes/no');
  tamaraExperience = prompt('Do I have work experience in my major?', 'yes');
}

if (tamaraExperience === 'y' || tamaraExperience === 'yes')
{
  //console.log('Yes, I have 6 years experience.' );
  alert('Yes,'+userName+ ' I have 6 years experience.' );
}
else {
  //console.log('Sorry' + userName+ 'but I have work experience.');
  alert('Sorry ' + userName+ ', but I have work experience.');
}
