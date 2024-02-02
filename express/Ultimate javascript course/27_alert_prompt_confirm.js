// alert("Hello your script work!");
// let a = prompt("Enter a here");
// document.write(a);

alert("Enter your script work!");
let a = prompt("Enter a here", "47"); // 47 is default value
a = Number.parseInt(a);
alert("You entered a of type " + (typeof a));
let write = confirm("Do you want to write it to the page");
if (write) {
    document.write(a);
}
else {
    document.write("Please allow me to !");
}