// console.log("Hey");
// console.log("Hey");
// console.log("Hey");

//Using for loop

// for(let i=0; i<=10;i++){
// console.log("Hey");
// }

// Using while loop

// var i = 0;
// while (i < 10) {
//     console.log("hey");
//     i++;
// }

// Using Do While loop

// var i = 0;
// do {
//     console.log("hey");
//     i++;
// } while (i < 10);

// conditions

// var age = 18;
// if (age >= 18) {
//     console.log("Yes you can do it vote");
// }
// else {
//     console.log("No you can't do it vote");
// }

// var marks = 65;
// if (marks >= 90) {
//     console.log("A Grade");
// }
// else if (marks < 90 && marks >= 70) {
//     console.log("B Grade");
// }
// else if (marks < 70 && marks >= 60) {
//     console.log("C Grade");
// }
// else{
//     console.log("Fail");
// }

// Ternary Operator

// var age = 5;
// var result = (age <= 10) ? "adult" : "not adult";
// console.log(result);

// Switch Case

// var day = 7;
// switch (day) {
//     case 1: "sunday";
//         break;
//     case 2: "monday"
//         break;
//     case 3: "tueday";
//         break;
//     case 4: "wednesday";
//         break;
//     case 5: "thrshday";
//         break;
//     case 6: "firday";
//         break;
//     case 7: "saturday";
//         break;
// }

// Foreach loop
// var array = [1,2,3,4,5,6,7,8,9,10];

// array.forEach(element => {
//     console.log("Hey");
// });

// DOM (Document Object Model) MANIPULATION

// In Window

// alert("Are You Sure About This?");
// prompt("Are You Sure About This?");

// event - click,dblclick,mousemove,mouseleave,mouseover

// var btn = document.querySelector("#btn")
//  btn.addEventListener("click",function(){
//     btn.style.backgroundColor = "purple"
//     btn.style.color = "white";
//     btn.style.borderRadius = "10px";
//     btn.style.fontSize = "1.3rem";
//     btn.style.opacity = "0.5";
//     btn.style.border = " 1px solid black";
//     btn.style.transition = "3s";
// });

// How TO RanDom Number

// var RandomNumber = Math.floor(Math.random() * 10);
// console.log(RandomNumber);

// Async js

// console.log("Hey1");
// setTimeout(() => {
//     console.log("Hey2");
// }, 3000);
// console.log("Hey3");
// setInterval(()=>{
// console.log("Hey4");
// },2000);

// User wil ask for a number between 0 se 9 and if the number is below 5 resolve if not reject.

// var ans = new Promise((res, rej) => {
//     var n = Math.floor(Math.random() * 10);
//     console.log(n);

//     if (n < 5) {
//         return res();
//     }
//     else {
//         return rej();
//     }
// });

// ans.then(function () {
//     console.log("below");
// })
//     .catch(function () {
//         console.log("above");
//     })

// Used of This
// Global scope me this ki value hoti hai window...
// Function scope me this ki value hoti hai window...
// Method scope me this ki value hoti hai object...

// function cricularButton(color) {
//     this.radius = 2;
//     this.color = color;
//     this.icon = false;
//     this.pressable = true;
// }

// var redbtn = new cricularButton("red");
// console.log(redbtn);

// What is method ?

// Aek function jo objects ke aandar hota hai usse hum method kahete he..

// var obj = {
//     baatKaro: function () {
//     }
// }

// Inheritance in js

// var student = {
//     canTalk: true,
//     canWalk: true,
//     haveEmotions: true,
//     hasFourlegs: false
// }

// var professors = {
//     canMakeAmazingWebsite: true,
//     canMakeAwesomeAnimations: true
// }

// professors.__proto__ = student;
// console.log(professors);


// Pure function

// function sum(a, b) {
//     return a + b;
// }

// var ans1 = sum(1, 2);
// console.log(ans1);
// var ans2 = sum(1, 2);
// console.log(ans2);

// Impure function 

// function sum(){
//     return Math.floor(Math.random()*10);
// }

// var ans1 = sum();
// console.log(ans1);
// var ans2 = sum();
// console.log(ans2);