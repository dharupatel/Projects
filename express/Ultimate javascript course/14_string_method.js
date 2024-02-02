let name = "Dhara";
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(1, 4));
console.log(name.slice(2));
console.log(name.replace("ara", "ruv"));


let person = "           Meena          ";
console.log(person);
console.log(person.trim());

let friend = "Dhruv";
console.log(name.concat(" is a friend of ", friend));
console.log(friend[0]);
console.log(friend[1]);
console.log(friend[2]);
console.log(friend[3]);
console.log(friend[4]);
// friend[4] = "o" // This is not possible
// Use a for loop to print a string

for (let i = 0; i < friend.length; i++) {
    console.log(friend[i]);
}

let person1 = "keval" + "drashti" + "dhara"
console.log(person1);