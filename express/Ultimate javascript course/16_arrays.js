// arrays are mutable and array can be changed

let marks_class_12 = [91, 82, 63, 84, false, "not Present"];
marks_class_12[6] = 89;
console.log(marks_class_12[0]);
console.log(marks_class_12[1]);
console.log(marks_class_12[2]);
console.log(marks_class_12[3]);
console.log(marks_class_12[4]);
console.log(marks_class_12[5]);
console.log(marks_class_12[6]);
console.log(marks_class_12[7]);// will be undefined because index 6
console.log("The length of marks_class_12 is ", marks_class_12.length);
marks_class_12[6] = 89; // Adding a new value to the array
marks_class_12[0] = 96; // Changing the avlue of an array

console.log(marks_class_12);
console.log( typeof marks_class_12);

// using for loop and print array
let arr = [1, 3, 5, 7, 9, 11]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); 
}