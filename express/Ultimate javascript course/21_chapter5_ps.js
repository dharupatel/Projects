// Chapter 5 practice Set

// 1. create an array of numbers and take input from the user to add numbers to this array.
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let a = prompt("Enter a number");
a = Number.parseInt(a);
arr.push(a);
console.log(arr);
*/

// 2. Keep adding numbers to the array in (1) until 0 is added to the array.
/*
let Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let a1;
do {
    a1 = prompt("Enter a number");
    a1 = Number.parseInt(a1);
    Array.push(a1);
} while (a1 != 0);
console.log(Array);
*/

// 3. filter fro numbers divisible by 10 from a given array. 
/*
let arr2 = [10, 5, 20, 4, 30, 56, 35, 40, 90, 47];
let n = arr2.filter((x) => {
    return x % 10 == 0;
})
console.log(n);
*/

// 4.create an array of square of given numbers.
/*
let arr3 = [10, 5, 20, 4, 30, 56, 35, 40, 90, 47];
let n = arr3.map((x) => {
    return x * x;
})
console.log(n);
*/

// 5. Use reduce to calculate factorial of a given number from an array of first n natural numbers(n being the number factorial needs to be calculated).
let arr3 = [1, 2, 3, 4, 5, 6];
let n = arr3.reduce((x1, x2) => {
    return x1 * x2;
})
console.log(n);