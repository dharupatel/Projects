console.log("Javascript tutorial 3: var,let,const");
var a = 45;
var a = 'd';
console.log(a);

let b ="Dhara";
 b = "Keval"
console.log(b);

const author = "Dhara";
 author = "Keval"; // Throws an error because constant cannot be changed
console.log(author);

let a = "Dhara"
{
  let a = "this";
  console.log(a);
}
console.log(a);