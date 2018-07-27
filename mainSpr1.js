let goodName = alert('Tell us about You! Share your name\, uke\, and how many years playing');
let myName = prompt("Enter your name?");
let myNameUke = prompt("What type of Uke do you play?");
let myUkeLevel = prompt('Describe your player level as Beginner\, Intermediate\, Advanced');
let myYrsUke = confirm('Played > 5?');
// let elName = document.getElementById('name')
let output = document.getElementById('name');
output.innerHTML = myName;
let output2 = document.getElementById('uke');
output2.innerHTML = myNameUke;
let output3 = document.getElementById('level');
output3.innerHTML = myUkeLevel;
let output4 = document.getElementById('yrs');
output4.innerHTML = myYrsUke;

console.log(myName);
console.log(myNameUke);
console.log(myUkeLevel);
console.log(myYrsUke);

if (myYrsUke === true) {  //if the years playing uke is greater than 5
console.log ('Hello my name is ' + myName + ' and I\'ve been playing the Uke for some time now');
} else {
console.log('Hello\, my name is ' + myName + ' I\'m fairly new playing the uke!');
}
// function GetSelectedItem(myName) {
//    output.innerHTML = myName.value;
//}
//alert('Hello K');