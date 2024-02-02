// 1. write a program using prompt functin to take input of age as a value from the user and use alert to tell him if the can derive.
/*
let age = prompt("Enter your age?");
age = Number.parseInt(age);
const canDrive = (age) => {
    return age >= 18 ? true : false;
}
if (canDrive(age)) {
    alert("Yes, you can drive");
}
else {
    alert("You cannot drive");
}
*/

// 2. in Q-1 use confirm to ask the user if she wants to see the prompt again.
/*
let runAgain = true;
const canDrive = (age) => {
    return age >= 18 ? true : false;
}
while (runAgain) {
    let age = prompt("Enter your age?");
    age = Number.parseInt(age);

    if (canDrive(age)) {
        alert("Yes, you can drive");
    }
    else {
        alert("You cannot drive");
    }
    runAgain = confirm("Do you want to play again?");
}
*/

// 3. In the previous question use console.error to log the error if the age enterd is negative.
/*
let runAgain = true;
const canDrive = (age) => {
    return age >= 18 ? true : false;
}
while (runAgain) {
    let age = prompt("Enter your age?");
    age = Number.parseInt(age);
    if (age < 0) {
        console.error("Please enter a valid age!");
        break;
    }

    if (canDrive(age)) {
        alert("Yes, you can drive");
    }
    else {
        alert("You cannot drive");
    }
    runAgain = confirm("Do you want to play again?");
}
*/

// 4. write a program to change the url to google.com (Redirection) if user enters a number greater input through prompt.
/*
let number = prompt("Enter your number");
number = Number.parseInt(number);

if (number > 4) {
    location.href = "http://google.com";
}
*/

// 5. Change the background of the page to yellow,red or any other color based on user input through prompt.

let color = prompt("Enter the page background color");
document.body.style.background = color;

