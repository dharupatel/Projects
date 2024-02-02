// fullName is a variable that store name of Dhara
// fullName = "Dhara";
// console.log(fullName);

// let fullName = "Drashti";
// // let fullName = "Drashti"; // not re-declared but can be updated
// console.log(fullName);

// const fullName = "jasmin";
// // const fullName = "lovish"; // not re-declared & not updated
// console.log(fullName);

// const student ={
//     fullName : "dhara",
//     age : 20,
//     ispass : true,
// };
// console.log(student);
// console.log(student.ispass);

// const product = {
//    information: "Parker jotter standard CT ball pen(Balck)",
//    rating:4.5,
//    price:270,
//    offer:100,
// };
// console.log(product);
// console.log(product.information);

// const profile = {
//     pname:"dharapatel249",
//     follow:1280,
//     following:350,
//     bio:"BENIM",
//     post:0,
// };
// console.log(profile);
// console.log(typeof profile);
// console.log(profile.bio);
// console.log(typeof profile["pname"]);

// // Operators
// let a = 5;
// let b = 2;

// console.log("a + b =",a+b);
// console.log("a - b =",a-b);
// console.log("a * b =",a*b);
// console.log("a / b =",a/b);
// console.log("a % b =",a%b);
// console.log("a ** b=",a**b);
// console.log("a++ =",a++);
// console.log("++a =",++a);
// console.log("b-- =",b--);
// console.log("++b =",--b);
// console.log("a > b =",a>b);
// console.log("a >= b =",a>=b);
// console.log("a < b =",a<b);
// console.log("a <= b =",a<=b);
// console.log("a==b =",a==b);
// console.log("a===b =",a===b);
// console.log("a!=b =",a!=b);
// console.log("a!==b =",a!==b);
// console.log("a && b =",a&&b);
// console.log("a || b =",a||b);
// console.log("!b =",!b);

// Conditional Statement

// let age=20;
// if(age>18)
// {
//     console.log("You can drive");
// }

// let age1=17;
// if(age1>18)
// {
//     console.log("You can drive!");
// }
// else
// {
//     console.log("You can not drive!");
// }

// let age2 = 17;
// if(age2>18)
// {
//     console.log("you can drive!");
// }
// else if(age2>=16)
// {
//     console.log("You can not drive!");
// }
// else if(age2>10)
// {
//     console.log(" You prepared !");
// }
// else{
//     console.log("You are child!");
// }

// let age = 10;
// let age1 = (age>18) ? "adult"  :"not adult";
// console.log(age1);

// let name = prompt("Hello Dhara! How Are You!");
// console.log(name);
// let name1 = alert("Are you sure?");
// console.log(name1);

// 1. Get user to input a number using prompt("Enter a number:").Check if
//  the number is a multiple of 5 or not.

// let num = prompt("Enter a Number?");
// if (num % 5 === 0) {
//     console.log("Yes");
// } else {
//     console.log("no");
// }

// let marks = prompt("Enter Your marks");
// if (marks >= 80 && marks <= 100) {
//     console.log("grade A");
// } else if (marks >= 70 && marks <= 89) {
//     console.log("grade B");
// } else if (marks >= 60 && marks <= 69) {
//     console.log("grade C");
// }
// else if (marks >= 50 && marks <= 59) {
//     console.log("grade D");
// }
// else {
//     console.log("garde F");
// }

// for (let count = 1; count <= 5; count++) {
//     console.log("Dhara patel");
// }

// let i = 1;
// while (i<=5) {
//     console.log("i = ", i);
//     i++;
// }

// let i = 1;
// do {
//     console.log("i = ", i);
//     i++;
// } while (i <= 10);

// let str = "DharaPatel";
// for (let i of str) {
//     console.log("i =", i);
// }

// let student ={
//     name:"DharaPatel",
//     age:20,
//     cgpa:8.0,
//     isPass:true,
// };

// for(let key in student)
// {
//     console.log("key=",key,"value=",student[key]);
// }

// console.log(typeof student);

// let str = "KevalPatel";
// console.log(str);
// console.log(str.length);
// console.log(str[0], str[1]);

// Template literals

// let obj = {
//     item: "pen",
//     price: 10,
// };

// let output = `The cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// console.log("The cost of",obj.item,"is",obj.price,"rupees");

// console.log("Dhara\nPatel");
// console.log("Dhara\tPatel");

// String Methods

// let name = "DharaPatel";
// console.log(name);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.slice(3,7));
// console.log(name.charAt(3));

// let degree = " BCA Student";
// console.log(name.concat(degree));

// let name1 = "     Dhara Patel    ";
// console.log(name1);
// console.log(name1.trim());

// let str = "Hello";
// console.log(str.replace("lo","p"));

// Array

// let marks = [89, 90, 93, 86, 96];
// console.log(marks);
// console.log(marks[3]);

// Looping over an Array.
// for(let i =0; i<marks.length; i++){
//     console.log(marks[i]);
// }

// Looping over an Array.     .......... WHY? undefind Research...........
// for( let val of marks){
//     console.log(marks[val]);
// }

// let fruits = ["banana", "papaya", "mangoes", "lichi", "apple"];
// console.log(fruits);
// console.log(fruits.length);

// fruits.push("kiviii");
// console.log(fruits);

// fruits.pop(fruits);
// console.log(fruits.toString());

// console.log(fruits.unshift("oranges"));
// console.log(fruits);

// console.log(fruits.shift());
// console.log(fruits);

// splice(StartIdx,delConut,newEl1)
// console.log(fruits.splice("banana","lichi","kivii"));
// console.log(fruits);

// FUNCTIONS
//           - Block of code that performs a specific task,can be invoked whenever needed...

// Function Defintion
// function sum(){
//     console.log("HEllO WORLD!");
// }
// // Funtion call
// sum();

// function sum1(a, b) {
//     console.log(a + b);
// }
// sum1(10, 20);

// Arrow Function

// const arrowSum = (a, b) => {
//     console.log(a + b);
// };
// arrowSum(20, 20);

// function countVowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     console.log(count);
// }
// countVowels("DharaPatel");

// ..............................................................................................................ERROR...........
// const countVowels(str) => {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     console.log(count);
// }

// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function printVal(val) {
//     console.log(val);
// });

// HOF - higher model function  HOM - higer model method
// let city = ["pune", "ahemadabad", "baroda", "botad"];
// city.forEach(function cityName(val, idx, city) {
//     console.log(val.toUpperCase(), idx, city);
// });

// Q - For a given array of numbers, print the square of each value using the forEach loop.

// let nums = [1, 2, 3, 4, 5, 6, 7];
// nums.forEach((num) => {
//     console.log(num * num);
// });

// let nums = [99, 97, 91];
// nums.map((val) => {
//     console.log(val);
// });

// newArr return
// let newArr = nums.map((val)=>{
//     return val*val;
// });
// console.log(newArr);

// let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// let newArr = arr.filter((val) => {
//     return val % 2 === 0;
// });
// console.log(newArr);

// let arr = [5, 6, 2, 1, 3, 4];
// const output = arr.reduce((prev, curr) => {
//     return prev + curr;
// });
// console.log(output);

// DOM PART-1

// Window object - it is a global object with lots of properties & methods.

// DOM - Document object model

/*
    window;
    window.document;
    console.log(window.document);
    console.dir(document.body);
    console.log(document.body);
    console.dir(document.body.childNodes[1]);
    document.body.style.background = "pink";
    document.body.childNodes[1].innerText = "HEY DEAR KEVAL!"
*/


// // Selecting with id
// document.getElementById("myId");
// document.getElementsByClassName("myClass");
// document.getElementsByTagName("p");
// document.querySelector("myId/myClass/tag");
// document.querySelectorAll("myId/myClass/tag");


// let heading = document.getElementById("myId");
// console.log(heading);

// let heading1 = document.getElementsByClassName("myClass");
// console.log(heading1);

// let heading2 = document.getElementsByTagName(".p");
// console.log(heading2);

// let elements = document.querySelector(".p");
// console.log(elements); // First elements returns

// let elements1 = document.querySelectorAll(".p");
// console.log(elements1); // returns all nodeList

// let child = document.querySelector("div").children;
// console.log(child);

// let div = document.querySelector("div");
// console.dir(div);
// Try to div.innerText and div.innerHTML and div.textcontent...

// DOM PART-2
// ATTRIBUTES:

// let div = document.querySelector("div");
// console.log(div);
// let Id = div.getAttribute("Id");
// console.log(Id);

// let div1 = document.querySelector("div");
// console.log(div1);
// let name = div.getAttribute("name");
// console.log(name);

// div = document.querySelector("div");
// console.log(div);
// let name = div.setAttribute("name","keval");
// console.log(name);

// let div = document.querySelector("div");
// div.style.backgroundColor = "green";
// div.style.fontSize = "30px";
// div.innerText ="HELLO";
// div.style.visibility = "hidden";

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click!";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn);

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click!";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.prepend(newBtn);

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click!";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.before(newBtn);

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click!";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.after(newBtn);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>HEY, I AM NEW!</i>";
// document.querySelector("body").prepend(newHeading);

// let para = document.querySelector("p");
// para.remove();

// EVENT:
// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 47;
//     a++;
//     console.log(a);
// }

// let btn2 = document.querySelector("#btn2");

// btn2.ondblclick= () => {
//     console.log("btn2 was clicked");
// }


// let div = document.querySelector("div");
// div.onmouseover = () =>{
//     console.log("You are inside div!");
// };

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// };

// let div = document.querySelector("div");
// div.onmouseover = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// };

// // Same event multiple work then used this addEventListener.
// let btn1 = document.querySelector("#btn1");

// // btn1.addEventListener("click", () =>{
// //     console.log("button1 was clicked!");
// // });
// // btn1.addEventListener("click", () =>{
// //     console.log("button1 was clicked! - handler2");
// // });
// // btn1.addEventListener("click", () =>{
// //     console.log("button1 was clicked! - handler3");
// // });

// btn1.addEventListener("click", (evt) => {
//     console.log("button1 was clicked!");
//     console.log(evt);
//     console.log(evt.type);
// });


// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked!");
// });

// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked! - handler2");
// });
// const handler3 = () => {
//     console.log("button1 was clicked! - handler3");
// }
// btn1.addEventListener("click", handler3);

// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked! - handler4");
// });

// btn1.removeEventListener("click", handler3);

// const student = {
//     fullName: "dharapatel",
//     marks: 97.7,
//     printMarks: function () {
//         console.log("marks =", this.marks);
//     },
// };

// console.log(student);
// console.log("marks =", student.marks);

// const employee = {
//     calTax1() {
//         console.log("Tax rate is 10%");
//     },
//     calTax2: function () {
//         console.log("Tax rate is 10%");
//     }
// };

// employee.calTax1();
// employee.calTax2();

// const employee = {
//     calTax1() {
//         console.log("Tax rate is 10%");
//     },
// };
// employee.calTax1();

// const karanArjun = {
//     salary: 50000,
//     calTax1() {
//         console.log("Tax rate is 20%");
//     },
// };

// karanArjun.__proto__ = employee;

// class ToyotaCar {
//     constructor(brand) {
//         console.log("Creating new object");
//         this.brand = brand;
//     }
//     start() {
//         console.log("Start");
//     }
//     stop() {
//         console.log("Stop");
//     }
// }

// let fortuner = new ToyotaCar("fortuner");
// console.log(fortuner);
// let lexus = new ToyotaCar();
// console.log(lexus);

// try to console and same as lexus car...
// fortuner
// fortuner.start
// fortuner.stop

// class person {
//     constructor() {
//         console.log("Enter parent constructor");
//         this.species = "homo sapiens"
//     }
//     eat() {
//         console.log("eat");
//     }

//     work() {
//         console.log("Do nothing");
//     }
// }

// class Engineer extends person {
//     constructor(branch) {
//         console.log("Enter child constructor");
//         super(); // To invoke parent class constructor.
//         this.branch = branch;
//         console.log("Exits child constructor");
//     }
//     work() {
//         super.eat(); // first eat and then work.
//         console.log("solve problems,build something");
//     }
// }

// // let dharaObj = new Engineer();  // if we used console dharaObj.work(); then print child class work not a parent class work.
// let engObj = new Engineer("chemical engineer");

// TRY AND CATCH...

// let a = 5;
// let b = 10;
// console.log("a = ", a);
// console.log("b = ", b);
// console.log("a+b = ", a + b);
// try {
//     console.log("a+b = ", a + c); // error
// } catch (err) {
//     console.log(err);
// }
// console.log("a+b = ", a + b);
// console.log("a+b = ", a + b);
// console.log("a+b = ", a + b);
// console.log("a+b = ", a + b);

// CALLBACKS , PROMISES & ASYNC-AWAIT.
// Asynchronous programming....

// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("Hello");
// }, 4000);// timeout
// console.log("Three");
// console.log("four");

//CALLBACKS

// function sum(a, b) {
//     console.log(a + b);
// }
// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }

// // calculator(1, 2, sum);
// // or
// calculator(1, 2, (a, b) => {
//     console.log(a + b);
// });

// const hello = () => {
//     console.log("hello");
// };

// setTimeout(hello, 3000);

// function getData(dataId, getNextData) {
//     //2s
//     setTimeout(() => {
//         console.log("Data", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }

// Callback hell

// getData(1, () => {
//     console.log("getting data2....");
//     getData(2, () => {
//         console.log("getting data3....");
//         getData(3, () => {
//             console.log("getting data4....");
//             getData(4);
//         })
//     })
// })

// PROMISE:

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log("Data", dataId);
//             // resolve("success");
//             reject("error");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000);
//     });
// }

// // let promise = getData(47);
// // promise
// // print hone ke bad bhi
// // promise

// const getPromise = () => {
//     return new Promise((reslove, reject) => {
//         console.log("I am a promise");
//         // reslove("success");
//         reject("network error");
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res);
// });

// promise.catch((err) => {
//     console.log("rejected", err);
// }); 


// Promise chain....

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data1");
//             resolve("success");
//         }, 4000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data2");
//             resolve("success");
//         }, 4000);
//     });
// }

// // console.log("Fetching Data1.....");
// // let p1 = asyncFunc1();
// // p1.then((res)=>{
// //     console.log("Fetching Data2.....");
// //     let p2 = asyncFunc2();
// //     p2.then((res)=>{});
// // });

// // or

// console.log("Fetching Data1.....");
// asyncFunc1().then((res) => {
//     console.log("Fetching Data2.....");
//     asyncFunc2().then((res) => { });
// });

// Async-Await

// async function hello() {
//     console.log("Hello");
// }
// run-time  write to console ......hello(); 

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         }, 2000);
//     });
// }

// async function getWeatherData(){
//     await api(); // 1st call
//     await api(); // 2nd call
// }

// getWeatherData();


// FETCH API.... 

const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

// let promise = fetch(URL);
// console.log(promise);

const getFacts = async () => {
    console.log("getting Data....");
    let response = await fetch(URL);
    console.log(response); //JSON format
    let data = await response.json();
    factPara.innerText = data[1].text;
};

btn.addEventListener("click",getFacts);

// getFacts() call in console....          