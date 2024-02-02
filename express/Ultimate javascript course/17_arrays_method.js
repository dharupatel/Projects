let num = [1, 2, 3, 4, 5, 6];
console.log(num, typeof num);
let b = num.toString(); // b is now a string
console.log(b, typeof b);
let c = num.join("_");
console.log(c, typeof c);

// num.pop();
// console.log(num);

// let r = num.pop(); // pop returns the popped element
// console.log(num , r);

// let r1 = num.push(7); // push returns the new array length
// console.log(num, r1);

let r3 = num.shift();
console.log(r3, num); // Removes an elemnet from the start of the array

let r4 = num.unshift(99); // Add an element from the start of the array
console.log(r4, num);