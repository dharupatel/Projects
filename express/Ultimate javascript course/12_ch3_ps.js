let marks = {
    harry: 90,
    dhara: 34,
    shubham: 56,
    rohan: 45,
}

// Problem no 1
for (let i = 0; i <= Object.keys(marks).length; i++) {
    console.log("The marks of " + Object.keys(marks)[i] + "are" + marks[Object.keys(marks)[i]]);
}

// problem no 2
// for (let key in marks) {
//     console.log("The marks of "+ key + " are " + marks[key]);
// }

// Problem no 3
// let cn = 47;
// let i;
// while (i != cn) {
//     i = prompt("Enter a number");
// }
// console.log("You have entered a correct number");

// Problem no 4
// const mean = (a, b, c, d) => {
//     return (a + b + c + d) / 4
// }
// console.log(mean(4, 5, 6, 7));