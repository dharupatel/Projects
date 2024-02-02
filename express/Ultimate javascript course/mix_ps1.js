// 1.  For a given array with marks of students -> [85, 97, 44, 37, 76, 60] Find the average marks of the entire class.

/*
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let val of marks) {
    sum += val;
}

let avg = sum / marks.length;
console.log(`avg marks of the class = ${avg}`);
*/


// 2. For a given array with prices of 5 items -> [250, 645, 300, 900, 50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

/*
let item = [250, 645, 300, 900, 50];
let i = 0;
for (let val of item) {
    console.log(`Value at index ${i} = ${val}`);
    let offer = val / 10;
    item[i] = item[i] - offer;
    console.log(`value after offer = ${item[i]}`);
    i++;
}
*/

/* Create an array to store companies ->"Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
1. Remove the first company from the array
2. Remove Uber & Add ola in its place
3. Add Amazon at the end
*/

/*
// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// companies.shift("Bloomberg");
// console.log(companies);

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// companies.splice(2,1,"ola");
// console.log(companies);

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.push("Amazon");
console.log(companies);
*/


// 3. Create a function using the "function" keyword that takes a String as an argument & returs the number of vowels in the string.
/*
function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "0" || char === "u") {
            count++;
        }
    }
    console.log(count);
}
*/


// 4. Create an arrow function to perform the same task.(using ps - 3)
/*
const countvow = (str) => {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "0" || char === "u") {
            count++;
        }
    }
    console.log(count);
}
*/


// 5. For a given array of numbers, print the square of each value using the forEach loop.
/*
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// num.forEach(num => {
// console.log(num * num);
// });

// Second method using forEach

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let calcSquare = (num) => {
    console.log(num * num);
}

num.forEach(calcSquare);
*/

// 6. write a javascript program to find the araea of a triangle where three sides are 5,6,7.
/*
let side1=5;
let side2=6;
let side3=7;

let s = (side1+side2+side3)/2;
let area = Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);
*/

// 7. write a javascript program to determine whether a given year is a leap year in the gregorian calendar.
/*
let year = prompt("Enter year!")
if(year % 4 === 0)
{
    console.log("Yes, This is a leap year");
}
else
{
    console.log("No, This is not a leap year");
}
*/

// 8. write a javascript exerise to create a variable using a user-defined name.
/*
let var_name = 'dhara';
let n = 47;
this[var_name]=n;
console.log(this[var_name]);
*/

// 9. write a javascript program to check a pair of numbers and return true if one the numbers is 50 or if their sun is 50.
/*
function test50(x,y)
{
   return((x==50||y==50)||(x+y==50));
}
console.log(test50(50,50));
console.log(test50(20,50));
console.log(test50(20,20));
console.log(test50(20,30));
*/

// 10. write a javascript program to check two given integers whether one is positive and another one is negative.
/*
let x = prompt("Enter value of x");
function positive_negative_num(x)
{
   if (x>=0) {
    console.log("postive Integer");
   }
   else
   {
    console.log("negative Integer");
   }
}
console.log(positive_negative_num(x));
*/

// 11. write a javascript program to check whether a given positive number is a multiple of 3 or 7.
/*
let x = prompt("Enter value of x");
function div(x) 
{
   if ((x%3 == 0) || (x%7==0)) {
    console.log("Yess, divided!");
   }    
   else
   {
    console.log("Nohh,deivided");
   }
}
console.log(div(x));
*/

