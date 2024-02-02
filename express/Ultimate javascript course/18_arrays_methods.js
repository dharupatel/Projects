// Delete is not a method it is one type of operator.
/*
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(num.length);
delete num[0];
console.log(num.length);

let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num2 = [11, 12, 13, 14, 15, 16, 17, 18, 19];
let newArray = num1.concat(num2);// concat method return a new array and all array to merge...
console.log(newArray);
console.log(num1,num2); // Does not change existing array
*/

// sorted array - Modify the original array
/*
let num = [21, 54, 73, 84, 125, 46, 37, 78, 69];
num.sort();
console.log(num);

// sort method but ascending order
let compare = (a,b)=>
{
    return a-b;
}
let num1=[12,23,45,3,21,222,45,76,87,98,76];
num1.sort(compare);
console.log(num1);

//  sort method but descending order
let compare1 = (a,b)=>
{
    return b-a;
}
let num2=[12,23,45,3,21,222,45,76,87,98,76];
num2.sort(compare1);
console.log(num2);
*/

// Reverse
/*
let num = [1,2,3,4,5,6,7,8,9];
console.log(num);
num.reverse();
console.log(num);
*/

// Splice 

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// splice(which index , element deleted, add new element ) - Return deleted items and modify the array
num.splice(2, 3, 1021, 1022, 1023, 1024);
console.log(num);
let deletedvalues = num.splice(2, 3, 1021, 1022, 1023, 1024);
console.log(typeof deletedvalues);

// slice
let num1 = [11, 12, 13, 14, 15, 16, 17, 18, 19];
console.log(num1);
let newNum = num1.slice(3);
console.log(newNum);

let newNum1 = num1.slice(3, 6);
console.log(newNum1);
