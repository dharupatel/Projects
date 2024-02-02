let num = [10, 7, 6, 3, 2];

for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}

// For-each loop

num.forEach((Element) => {
    console.log(Element * Element);
})

// array.from
let name = "Dhara"; // html collection array make
let arr = Array.from(name);
console.log(arr);

// For ...of
for(let item of num){
    console.log(item);
}

// For...in
for(let i in num)
{
    console.log(num[i]);
}
