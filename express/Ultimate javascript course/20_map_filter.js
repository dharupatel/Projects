let arr = [45, 23, 21];
console.log(arr);

// Array map method - create a new array by performing some operation on each array element.
let a = arr.map((value, index, array) => {
    console.log(value, index, array);
    // return value + 1;
    return value + index;
})
console.log(a);

// Array filter method
let arr2 = [45, 23, 21, 0, 3, 5];
let a2 = arr2.filter((a) => {
    return a < 10;
})
console.log(a2);

// Array reduce method
let arr3 = [1, 2, 3, 5, 2, 1];
let newarr3 = arr3.reduce((h1, h2) => {
    return h1 + h2;
})
console.log(newarr3);

// Second method reduce array
let array = [1, 2, 3, 4, 5, 6, 7];
const reduce_func = (h1, h2) => {
    return h1 + h2;
}
let newArray = array.reduce(reduce_func)
console.log(newArray);