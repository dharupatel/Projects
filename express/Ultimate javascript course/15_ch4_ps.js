/*
1.  What will the following print in javascript ?
console.log("har\".length")

2. Explore the includes,startsWith & endsWuth function of a string

3. Write a program to convert a given string to lowecase

4. Explore the amount out of this string
   "Please give Rs 1000"

5. try to change 4th character of a given string were you offer to do it?
*/ 

let name = "har\"";
console.log(name.length);
console.log(name.startsWith('ha'));
console.log(name.endsWith('ra'));
console.log(name.toLowerCase());

const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

let str2 = "Please give Rs 1000";
let amount =Number.parseInt(str2.slice(15));
console.log(amount);
console.log(typeof amount);

let friend = "Deepika";
friend[3] = "r";
console.log(friend); // friend is not change beacause string is immutable